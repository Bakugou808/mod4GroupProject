class CommentSerializer < ActiveModel::Serializer
  attributes :id, :post_id, :profile_id, :comment, :created_at, :updated_at
  has_many :likes, as: :likable
  belongs_to :post
  belongs_to :profile
end
