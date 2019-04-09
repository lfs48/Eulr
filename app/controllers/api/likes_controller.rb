class Api::LikesController < ApplicationController
    
    def create
        @post = Post.find_by(id: params[:like][:post_id])
        if @post.likes.create(likes_params)
            render "api/posts/show"
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    def destroy
        like = Like.find_by(post_id: params[:like][:post_id], user_id: params[:like][:user_id])
        @post = like.post
        likeDup = like.dup
        like.destroy
        render json: likeDup
    end

    private

    def likes_params
        params.require(:like).permit(:post_id, :user_id)
    end
end