class ProfileSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :username, :description, :img_file, :last_seen, :created_at
  belongs_to :user 
  has_many :posts
  has_many :comments
  has_many :followers
end
