class Comment < ApplicationRecord
  belongs_to :post
  belongs_to :profile
  has_many :likes, as: :likable, dependent: :destroy

  def self.get_commentors(post_id)
    
    comments = Comment.where(post_id: post_id)
    sorted = comments.order('created_at DESC')
    profiles = sorted.map{|comment| Profile.find(comment.profile_id)}
    profiles  
  end


end
