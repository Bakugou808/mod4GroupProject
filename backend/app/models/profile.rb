class Profile < ApplicationRecord
  belongs_to :user
  has_many :posts
  has_many :followers
  has_many :likes
end
