Rails.application.routes.draw do
  resources :likes
  resources :comments
  resources :posts
  resources :followers
  resources :profiles
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
