class LikeSerializer < ActiveModel::Serializer
  attributes :id, :profile_id, :likable_type, :likable_id, :created_at
  belongs_to :likable, polymorphic: true
end
