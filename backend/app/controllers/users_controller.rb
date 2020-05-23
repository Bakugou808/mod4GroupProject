class UsersController < ApplicationController
    before_action :set_user, only: [:show, :update, :destroy]

    def index 
        users = User.all 
        render json: users
    end

    def show 
        render json: @user
    end 

    def create 
        user = User.new(user_params)
        if user.save 
            render json: user 
        # else
        end 
    end 

    def update 
        if @user.update(user_params)
            render json:@user 
        # else 
        end 
    end 

    def destroy 
        @user.destroy 
        render json: "User Deleted"
    end 


    private 

    def set_user 
        
        @user = User.find(params[:id])
    end 

    def user_params
        params.require(:user).permit(:name, :birthday, :email, :location)
    end 
end
