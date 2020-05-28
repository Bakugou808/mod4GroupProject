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
        
        if post.save 
            # post.media_file.attach(params[:media_file])
            url = url_for(post.photo) 
            post.img_url = url
            
            # post.formatUrl

            # image = MiniMagick::Image.new(url)
            # image.resize "500x500"
            # post.img_url = url


            post.save
            
            render json: post
        else
            render json: "Failed to save post"
        end 
    end 

    # def findLikers
    #     byebug
    #     likers = @post.getLikers
    #     render json: likers
    # end

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
