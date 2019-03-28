class Api::SessionsController < ApplicationController

    def create
        email = params[:user][:email]
        pw = params[:user][:password]
        @user = User.find_by_credentials(email, pw)
        if @user
            log_user_in!(@user)
            render "api/users/show"
        else
            render json: "Invalid username/password, try again", status: 422
        end
    end

    def destroy
        log_user_out!
    end

end
