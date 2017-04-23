require 'securerandom'

class ApiToken < ApplicationRecord
  has_many :auth_sessions
  before_save :default_values

  validates :email, presence: true, format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i }
  validates_uniqueness_of :email
  validates_uniqueness_of :token

  STATE_ACTIVE = 'active'
  STATE_DEACTIVATED = 'deactivated'
  STATE_UNVERIFIED = 'unverified'
  enum state: {STATE_ACTIVE => 0, STATE_DEACTIVATED => 1, STATE_UNVERIFIED => 2, }

  private

  def default_values
    self.state ||= STATE_ACTIVE
    self.token ||= gen_token
  end

  def gen_token
    loop do
      a_token = SecureRandom.hex(30)
      break a_token unless ApiToken.exists?(token: a_token)
    end
  end

end
