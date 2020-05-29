
class Post < ApplicationRecord
  belongs_to :profile
  has_many :comments, dependent: :destroy
  has_many :likes, as: :likable, dependent: :destroy
  has_one_attached :photo

  def self.find_posts(profileID)
    posts = Post.where(profile_id: profileID)
    posts.order('created_at DESC')
  end

  def getLikers
    likes = self.likes
    sorted = likes.order('created_at DESC')
    profiles = sorted.map{|like| Profile.find(like.profile_id)}
    profiles 
  end 

  def self.getRandomFeed 
    # find all posts within the past 2 weeks 
    # render that back
    # byebug
    # Post.where("created_at < ?", Time.now)
    # posts = Post.where("created_at < ?", 2.days.ago)
    # posts = Post.where(created_at: Date.new..5.days.ago)
    posts = Post.where('created_at BETWEEN ? AND ?', Date.today-2, Time.now)
    # posts= Post.where(Post[:created_at] < 2.days.ago)
    posts.order('created_at DESC')
  end


 

end


 