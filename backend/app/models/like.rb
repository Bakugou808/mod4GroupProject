class Like < ApplicationRecord
  belongs_to :likable, polymorphic: true
  delegate: profile, to: :posts
end
