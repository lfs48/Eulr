class Api::TagsController < ApplicationController

    def index
        @tags = Tag.all
        render "api/tags/index"
    end

    def show
        @tag = Tag.find_by(id: params[:id])
        render "api/tags/show"
    end

    private

    def tag_params
        params.require(:tag).permit(:tag)
    end

end