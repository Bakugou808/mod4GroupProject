class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :birthday, :location, :email
  has_many :profiles
end
