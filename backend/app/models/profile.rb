class Profile < ApplicationRecord
  belongs_to :user
  has_many :posts, dependent: :destroy
  has_many :followers, dependent: :destroy
  has_many :comments, dependent: :destroy
  has_many :likes, through: :posts 
  # has_many :comments, through: :posts 
end
