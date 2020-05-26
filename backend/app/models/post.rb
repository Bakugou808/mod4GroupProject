class Post < ApplicationRecord
  belongs_to :profile
  has_many :comments, dependent: :destroy
  has_many :likes, as: :likable, dependent: :destroy
  has_one_attached :media_file

  def self.find_posts(profileID)
    posts = Post.where(profile_id: profileID)
    posts
  end
 

end


 