class PostsController < ApplicationController
    before_action :set_post, only: [:show, :update, :destroy]

    def index 
        posts = Post.all 
        render json: posts
    end 

    def show 
        render json: @post, include: ['comments', 'likes']
    end 

    def profiles_posts
        
        posts = Post.find_posts(params[:profile_id])
        render json: posts, include: ['comments', 'likes']
    end 
  
    def create 
        
        post = Post.new(post_params)
        # profile = Profile.find(post_params[:profile_id])
        if post.save 
            # post.media_file.attach(params[:media_file])
            url = url_for(post.media_file) 
            
            render json: url
        else
            render json: "Failed to save post"
        end 
    end 

    def update 
        if @post.update(post_params)
            render json:@post 
        # else 
        end 
    end 

    def destroy 
        @post.destroy 
        render json: "Post Deleted"
    end 

    private 

    def set_post 
        @post = Post.find(params[:id])
    end 

    def post_params
        params.permit(:profile_id, :media_file, :caption)
    end 
end
