class ProfilesController < ApplicationController
    before_action :set_profile, only: [:show, :update, :destroy]

    def index 
        profiles = Profile.all 
        render json: profiles
    end

    def produceFeed
        # gather content/posts from friends

    end 

    def followers 

    end 

    def following 

    end 

    def show
        render json: @profile, include: ['posts', 'followers']
    end 

    def create 
        
        profile = Profile.new(profile_params)
        if profile.save 
            render json: profile 
        # else 
        #     flash[:error_messages] = profile.errors.full_messages 
        #     render json: flash[:error_messages]
        end
    end 

    def update 
        if @profile.update(profile_params)
            render json: @profile 
        # else 
        #     flash[:error_messages] = profile.errors.full_messages 
        #     render json: flash[:error_messages]
        end
    end 

    def destroy
        @profile.destroy 
        render json: "Profile Deleted"
    end

    private 

    def set_profile 
        
        @profile = Profile.find(params[:id])
    end

    def profile_params
        params.require(:profile).permit(:user_id, :username, :description, :img_file, :last_seen)
    end
end
