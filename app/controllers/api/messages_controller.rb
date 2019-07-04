class Api::MessagesController < ApplicationController

    def index
        @user = User.find_by(id: params[:user_id])
        @messages = []
        @messages += Message.where( :sender_id => @user.id )
        @messages += Message.where( :receiver_id => @user.id )
        render "api/messages/index"
    end

    def create
        @message = Message.new(message_params)
        if @message.save
            render "api/messages/show"
        else
            render @message.errors.full_messages, status: 422
        end
    end

    private

    def message_params
        params.require(:message).permit(:sender_id, :receiver_id, :body)
    end

end