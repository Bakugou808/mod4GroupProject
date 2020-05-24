class FollowerSerializer < ActiveModel::Serializer
  attributes :id, :followed_id, :follower_id, :created_at
  belongs_to :profile
end
