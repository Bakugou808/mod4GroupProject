Rails.application.routes.draw do
  resources :likes, only: [:create, :destroy]
  resources :comments
  resources :posts
  resources :followers, only: [:show, :create, :destroy]
  resources :profiles
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
