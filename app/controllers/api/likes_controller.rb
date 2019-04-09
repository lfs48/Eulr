class Api::LikesController < ApplicationController
    
    def create
        @post = Post.find_by(id: params[:postId])
        if @post.likes.create(likes_params)
            render "api/posts/post"
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    def destroy
        like = Like.find_by(post_id: params[:post_id], user_id: params[:user_id])
        id = like.id
        like.destroy
        render json: id
    end

    private

    def likes_params
        params.require(:like).permit(:post_id, :user_id)
    end
end