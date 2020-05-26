class User < ApplicationRecord
    has_secure_password
    has_many :profiles, dependent: :destroy
    validates :email, uniqueness: {case_sensitive: false}
end


