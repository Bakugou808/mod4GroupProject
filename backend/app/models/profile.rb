class Profile < ApplicationRecord
  belongs_to :user
  has_many :posts, dependent: :destroy
  has_many :followers, dependent: :destroy
  has_many :comments, dependent: :destroy
  has_many :likes, through: :posts 
  has_one_attached :avatar
  # has_many :comments, through: :posts 

  def self.get_profile_likes(profileID)
    posts = Post.where('created_at BETWEEN ? AND ?', Date.today-2, Time.now)
    posts = posts.select{|post| post.profile_id == profileID.to_i}

    likeArr = [] 
    posts.each{|post| 
      if post.likes.length > 0
         likeArr << [post.img_url, post.caption, post.likes.map{|like| Profile.find(like.profile_id)}.uniq]
      end 
    }
       
    likeArr
  end 

  def self.get_friends_posts(profileID)
    allFollowers = Follower.all
    followers = allFollowers.select{|follower| follower.profile_id == profileID.to_i }
    following = allFollowers.select{|follower| follower.follower_id == profileID.to_i }
    
    followers = followers.map{|follower| follower.follower_id}
    following = following.map{|follower| follower.profile_id}

    idList = [followers, following].flatten

    allPosts = Post.where('created_at BETWEEN ? AND ?', Date.today-7, Time.now)
    
    posts = idList.map{|id| 
      allPosts.select{|post| post.profile_id == id}
    }
    
    posts.uniq
  end


end
