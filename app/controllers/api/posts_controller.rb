class PostsController < ApplicationController

    before_action :get_post, only: [:update, :show, :destroy]

    def index
        
    end

    def create

    end

    def update

    end

    def show

    end

    def destroy

    end
    
    private

    def post_params
        params.require(:post).permit(:id, :author_id, :poster_id, :content, :post_type)
    end
    
    def get_post
        @post = Post.find_by(id: params[:id])
    end

end