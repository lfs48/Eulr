class Api::UsersController < ApplicationController

    def index
        @users = User.includes(:followers, :followings, :liked_posts).with_attached_avatar.all
        render "api/users/index"
    end

    def create
        @user = User.new(user_params)
        if @user.save
            file = File.open('app/assets/images/default-avatar.png')
            @user.avatar.attach(io: file, filename: 'avatar.png')
            render "api/users/show"
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def show
        @user = User.find_by(id: params[:id])
        if @user
            render "api/users/show"
        else
        end
    end

    private

    def user_params
        params.require(:user).permit(:username, :email, :password)
    end

end
