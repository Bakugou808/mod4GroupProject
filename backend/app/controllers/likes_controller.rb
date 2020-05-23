class LikesController < ApplicationController
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

    def _params
        params.require().permit()
    end 
end
