class ApplicationController < ActionController::API

    SECRET = 'HetoriChise'

    def issue_token(user)
      JWT.encode({user_id: user.id}, SECRET, 'HS256')
    end

    def issue_token_on_signup(user)
        JWT.encode({user_id: user.id}, SECRET, 'HS256')
    end
   
    def current_user
      @user ||= User.find_by(id: user_id)
    end
  
    def token
      request.headers['Authorization']
    end
  
    def decoded_token
      begin
        JWT.decode(token, SECRET, true, { :algorithm => 'HS256' }) #Don't actually put your key here
      rescue JWT::DecodeError
        [{error: "Invalid Token"}]
      end
    end
  
    def user_id
      decoded_token.first['user_id']
    end
  
    def logged_in?
      !!current_user
    end
  end
  