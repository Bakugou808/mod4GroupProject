class PostSerializer < ActiveModel::Serializer
  attributes :id, :profile_id, :media_file, :caption, :created_at, :updated_at
  belongs_to :profile 
  has_many :comments
  has_many :likes, as: :likable
end
 