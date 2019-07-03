class Api::MessagesController < ApplicationController

    def index
        @user = User.find_by(id: params[:user_id])
        @messages = []
        @messages += Message.where( :sender_id => @user.id )
        @messages += Message.where( :receiver_id => @user.id )
        render "api/messages/index"
    end

end