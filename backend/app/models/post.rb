class Post < ApplicationRecord
  belongs_to :profile
  has_many :comments, dependent: :destroy
  has_many :likes, as: :likable, dependent: :destroy
end
