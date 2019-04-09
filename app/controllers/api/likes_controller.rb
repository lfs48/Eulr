class Api::LikesController < ApplicationController
    
    def create

    end

    def destroy

    end

    private

    def likes_params
        params.require(:like).permit(:post_id, :user_id)
    end
end