require 'securerandom'

class ApiToken < ApplicationRecord
  before_save :default_values

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
