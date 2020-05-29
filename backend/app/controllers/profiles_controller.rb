class ProfilesController < ApplicationController
    before_action :set_profile, only: [:show, :update, :destroy]

    def index 
        profiles = Profile.all 
        render json: profiles
    end

    def get_friends_posts
        posts = Profile.get_friends_posts(params[:profile_id])
        render json: posts
    end 

    def get_profile_liked_posts
        likeHash = Profile.get_profile_likes(params[:profile_id])
        render json: likeHash
    end

    def show
        render json: @profile, include: [ 'posts', 'followers']
    end 

    def create 
        profile = Profile.new(profile_params)
        if profile.save 
            url = url_for(profile.avatar) 
            profile.img_file = url
            
            profile.save
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

    def get_feed
        
        # profile = Profile.find(params[:profile_id])
        # profile.get_feed
        
        feed = Post.getRandomFeed
        render json: feed, include: ['profile']
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
        params.permit(:user_id, :username, :description, :avatar, :last_seen)
    end
end
