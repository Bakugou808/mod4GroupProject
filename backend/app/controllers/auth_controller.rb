class AuthController < ApplicationController

    # Login 
      def create
        user = User.find_by(email: params[:email])
        
        if user && user.authenticate(params[:password])
          # issue that user a token\
          token = issue_token(user)
          render json: {user:user, id: user.id, email: user.email, jwt: token}
        else
          render json: {error: 'That user could not be found'}, status: 401
        end
      end
    
      def show
        user = User.find_by(id: user_id)
        if user && logged_in?
          render json: {user:user, id: user.id, email: user.email, jwt: token}
        else
          render json: {error: 'No user could be found'}, status: 401
        end
      end
    
    
    
    end