require 'mini_magick'

class Post < ApplicationRecord
  belongs_to :profile
  has_many :comments, dependent: :destroy
  has_many :likes, as: :likable, dependent: :destroy
  has_one_attached :photo

  def self.find_posts(profileID)
    posts = Post.where(profile_id: profileID)
    posts
  end

  # def getLikers
  #   likersProfiles = []
    
  # end 

  # def formatUrl
  #   img = self.img_url

  #   img = MiniMagick::Image.new(img) 
  #   img.resize "200x200" 
  #   self.img_url = img
  #   # self.save
  # end
 
end


 