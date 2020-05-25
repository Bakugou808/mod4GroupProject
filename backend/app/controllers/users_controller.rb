class UsersController < ApplicationController
    before_action :set_user, only: [:show, :update, :destroy]

    def index 
        users = User.all 
        render json: users
    end

    def show 
        render json: @user, include: ['profiles']
    end 

    def create 
        
        @user = User.new(user_params)
        if @user.save 
            token = issue_token_on_signup(@user)
            render json: {name: @user.name, birthday:@user.birthday, created_at: @user.created_at, location: @user.location, id: @user.id, email: @user.email, jwt: token}
        else
            render json: {error: 'That user could not be found'}, status: 401
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
        params.permit(:name, :birthday, :email, :location, :password, :password_confirmation)
    end 
end
