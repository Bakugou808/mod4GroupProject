class UsersController < ApplicationController
    before_action :set_, only: [:show, :update, :destroy]

    def show 
    end 

    def create 
    end 

    def update 
    end 

    def destroy 
    end 


    private 

    def set_ 
    end 

    def user_params
        params.require(:user).permit(:name, :birthday, :email, :location)
    end 
end
