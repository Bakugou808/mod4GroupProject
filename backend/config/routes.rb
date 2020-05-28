Rails.application.routes.draw do

    resources :likes, only: [:create, :destroy]
    resources :comments
    resources :posts
    resources :followers, only: [:show, :create, :destroy]
    resources :profiles
    resources :users
    post '/auth', to: 'auth#create'
    get '/current_user', to: 'auth#show'
    get '/get_posts/:profile_id', to: 'posts#profiles_posts'
    get '/get_followers/:profile_id', to: 'followers#profiles_followers'
    get '/get_follower_requests/:profile_id', to: 'followers#profiles_follower_requests'
    get '/get_likers/:post_id', to: 'posts#findLikers'
    get '/get_likes/:likable_type/:likable_id', to: 'likes#get_likes'
    get '/get_commentors/:post_id', to: 'posts#get_commentors'
    get '/get_comments/:post_id', to: 'posts#get_comments'
    get '/get_comment_likers/:comment_id', to: 'comments#get_likers'
    get '/profiles/get_feed/:profile_id', to: 'profiles#get_feed'
    get '/get_following/:profile_id', to: 'followers#get_following'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
 