class FollowerSerializer < ActiveModel::Serializer
  attributes :id, :followed_id, :follower_id, :created_at, :profile_id
  belongs_to :profile
end
