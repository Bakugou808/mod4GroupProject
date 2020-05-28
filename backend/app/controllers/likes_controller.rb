class LikesController < ApplicationController
    before_action :set_like, only: [:show, :update, :destroy]

    def index 
        likes = Like.all 
        render json: likes
    end

    def show 
        render json: @like
    end 

    def create
        like = Like.new(like_params)
        
        if like.save 
            render json: like 
        else
            render json: "did not save like"
        end 
    end 

    def get_likes 
        likes = Like.findLikes(params[:likable_id],params[:likable_type])
        render json: likes
    end


    def update 
        if @like.update(like_params)
            render json: @like 
        end 
    end 

    def destroy 
        @like.destroy 
        render json: "Like Deleted"
    end 


    private 

    def set_like 
        @like = Like.find(params[:id])
    end 

    def like_params
        params.require(:like).permit(:profile_id, :likable_type, :likable_id)
    end 
end
