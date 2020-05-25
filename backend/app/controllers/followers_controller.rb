class FollowersController < ApplicationController
    before_action :set_follower, only: [:show, :update, :destroy]

    def show 
        render json: @follower
    end 

    def create 
        
        follower = Follower.new(follower_params)
        if follower.save 
            render json: follower 
        # else
        end 
    end 

    def update 
        if @follower.update(follower_params)
            render json:@follower 
        # else 
        end 
    end 

    def destroy 
        @follower.destroy 
        render json: "Follower Deleted"
    end 

    private 

    def set_follower 
        @follower = Follower.find(params[:id])
    end 

    def follower_params
        params.require(:follower).permit(:profile_id, :follower_id)
    end 
end
