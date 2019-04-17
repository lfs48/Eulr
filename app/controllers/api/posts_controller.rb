class Api::PostsController < ApplicationController

    before_action :get_post, only: [:update, :show, :destroy]
    before_action :ensure_author, only: [:update, :destroy]

    def index
        if (params[:tag_id]) 
            @posts = Post.includes(:author, :tags, :likers).with_attached_media.all.select do |post|
                post.tags.any? {|tag| tag.id == params[:tag_id].to_i}
            end
        elsif (params[:authorIds] && params[:authorIds].length > 0)
            authors = User.includes(:authored_posts).where( :id => params[:authorIds] )
            @posts = Post.includes(:author, :tags, :likers).with_attached_media.all.where(:author => authors)
        elsif (params[:user_id])
            @posts = Post.includes(:author, :tags, :likers).with_attached_media.all.all.select {|post| post.author_id == params[:user_id].to_i}
        else 
            @posts = Post.includes(:author, :tags, :likers).with_attached_media.all.all
        end
        postIds = @posts.map { |post| post.id }
        tagIds = PostTag.where( :post_id => postIds).map { |postTag| postTag.tag_id }
        @tags = Tag.where( :id => tagIds )
        render "api/posts/index"
    end

    def create
        @post = Post.new(post_params)
        if @post.save
            if params[:post][:tags] 
                tagStrs = params[:post][:tags].split(",")
                Post.transaction do
                    Tag.create_tags_from_strings(tagStrs)
                    @post.add_tags_from_strings(tagStrs)
                end
            end
            render "api/posts/show"
        else
            render @post.errors.full_messages, status: 422
        end
    end

    def update
        if @post.update(post_params)
            if params[:post][:tags]
                tagStrs = params[:post][:tags].split(",")
                Tag.create_tags_from_strings(tagStrs)
                @post.update_tags_from_strings(tagStrs)
            end
            render "api/posts/show"
        else
            render @post.errors.full_messages, status: 422
        end
    end

    def show
        render "api/posts/show"
    end

    def destroy
        @post.destroy
    end
    
    private

    def post_params
        params.require(:post).permit(:id, :author_id, :poster_id, :content, :post_type, media: [])
    end
    
    def get_post
        @post = Post.find_by(id: params[:id])
    end

    def ensure_author
        render json: "You can't do that", status: 422 unless @post.author_id == current_user.id
    end

end