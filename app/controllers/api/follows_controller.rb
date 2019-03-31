class Api::FollowsController < ApplicationController

    before_action :get_user, only: [:index]

    def index
        @followings = @user.followings
        @followers = @user.followers
        render "api/follows/index"
    end

    def create
        @follow = Follow.new(follow_params)
        if @follow.save
            render "api/follows/show"
        else
            render json: @follow.errors.full_messages, status: 422
        end
    end

    def destroy
        @follow = Follow.find_by(id: params[:id])
        @follow.destroy
    end

    private

    def follow_params
        params.require(:follow).permit(:follower_id, :followee_id)
    end

    def get_user
        @user = User.includes(:followings, :followers).find_by(id: params[:user_id])
    end

end