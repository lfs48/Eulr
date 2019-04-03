class Api::PostsController < ApplicationController

    before_action :get_post, only: [:update, :show, :destroy]
    before_action :ensure_author, only: [:update, :destroy]

    def index
        if (params[:tag_id]) 
            @posts = Post.includes(:tags).all.select do |post|
                post.tags.any? {|tag| tag.id == params[:tag_id].to_i}
            end
        elsif (params[:user_id])
            @posts = Post.includes(:author).all.select {|post| post.author_id == params[:user_id].to_i}
        else 
            @posts = Post.all
        end
        render "api/posts/index"
    end

    def create
        @post = Post.new(post_params)
        if @post.save
            tagStrs = params[:post][:tags] || []
            Tag.create_tags_from_strings(tagStrs)
            @post.add_tags_from_strings(tagStrs)
            render "api/posts/show"
        else
            render @post.errors.full_messages, status: 422
        end
    end

    def update
        if @post.update(post_params)
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
        params.require(:post).permit(:id, :author_id, :poster_id, :content, :post_type, :media)
    end
    
    def get_post
        @post = Post.find_by(id: params[:id])
    end

    def ensure_author
        render json: "You can't do that", status: 422 unless @post.author_id == current_user.id
    end

end