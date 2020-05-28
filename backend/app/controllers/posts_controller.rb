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
        render json: posts, include: ['comments', 'likes', 'profile']
    end 
  
    def create 
        
        post = Post.new(post_params)
        
        if post.save 
            url = url_for(post.photo) 
            post.img_url = url
            
            post.save
            
            render json: post
        else
            render json: "Failed to save post"
        end 
    end 

    def findLikers
        post = Post.find(params[:post_id])
        likers = post.getLikers
        render json: likers
    end

    def get_comments 
        post = Post.find(params[:post_id])
        comments = post.comments 
        render json: comments, include: ['profile']
        
    end

    def get_commentors
        commentors = Comment.get_commentors(params[:post_id])
        render json: commentors
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
        params.permit(:profile_id, :photo, :caption)
    end 
end
