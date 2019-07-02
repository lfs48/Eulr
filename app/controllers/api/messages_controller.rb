class Api::UsersController < ApplicationController

    def index
        @user = User.find_by(id: params[:user_id])
        @messages = []
        @messages += Message.find_by(sender_id: @user.id)
        @messages += Message.find_by(receiver_id: @user.id)
        render "api/messages/index"
    end

end