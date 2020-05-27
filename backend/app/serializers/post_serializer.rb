class PostSerializer < ActiveModel::Serializer
  attributes :id, :profile_id, :media_file, :caption, :created_at, :updated_at, :img_url
  belongs_to :profile 
  has_many :comments
  has_many :likes, as: :likable
  # has_one_attached :photo
  
end
 