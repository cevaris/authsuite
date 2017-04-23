require 'securerandom'

class ApiToken < ApplicationRecord
  before_save :default_values

  validates :email, presence: true, format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i }
  validates_uniqueness_of :email
  validates_uniqueness_of :token

  enum states: {
      active: 0,
      deactivated: 1,
      unverified: 2,
  }
  STATE_ACTIVE = states[:active]
  STATE_DEACTIVATED = states[:deactivated]
  STATE_UNVERIFIED = states[:unverified]

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
