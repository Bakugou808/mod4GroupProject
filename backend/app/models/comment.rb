class Comment < ApplicationRecord
  belongs_to :post
  belongs_to :profile
  has_many :likes, as: :likable
end
