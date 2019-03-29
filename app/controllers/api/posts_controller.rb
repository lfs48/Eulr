class PostsController < ApplicationController

    before_action :get_post, only: [:update, :show, :destroy]

    def index
        @posts = Post.all
        render "api/posts/index"
    end

    def create
        @post = Post.new(post_params)
        if @post.save
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
        params.require(:post).permit(:id, :author_id, :poster_id, :content, :post_type)
    end
    
    def get_post
        @post = Post.find_by(id: params[:id])
    end

end