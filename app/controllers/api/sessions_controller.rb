class Api::SessionsController < ApplicationController

    def create
        username = params[:user][:username]
        pw = params[:user][:password]
        @user = User.find_by_credentials(username, pw)
        if @user
            log_user_in!(@user)
            render "api/users/show"
        else
        end
    end

    def destroy
        log_user_out!
    end

end
