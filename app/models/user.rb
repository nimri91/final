class User < ApplicationRecord
  validates :email, presence: true, uniqueness: true
  has_secure_password
  enum role: [ :admin, :member ]
  has_many :blogs

end
