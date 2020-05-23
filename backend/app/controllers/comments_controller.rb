class CommentsController < ApplicationController
    before_action :set_, only: [:show, :update, :destroy]

    def show 
        render json: @comment 
    end 

    def create 
        comment = Comment.new(comment_params)
        if comment.save 
            render json: comment 
        # else
        end 
    end 

    def update 
        if @comment.update(comment_params)
            render json: @comment 
        # else
        end 
    end 

    def destroy 
        @comment.destroy 
        
    end 


    private 

    def set_comment 
        @comment = Comment.find(params[:id])
    end 

    def comment_params
        params.require(:comment).permit(:post_id, :profile_id, :comment)
    end 
end
