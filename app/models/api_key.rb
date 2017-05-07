require 'securerandom'

class ApiKey < ApplicationRecord
  include ActiveModel::Serialization

  has_many :auth_sessions
  before_save :default_values

  validates :email, presence: true, format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i }
  validates_uniqueness_of :email
  validates_uniqueness_of :key

  STATE_ACTIVE = 'active'
  STATE_DEACTIVATED = 'deactivated'
  STATE_UNVERIFIED = 'unverified'
  enum state: {STATE_ACTIVE => 0, STATE_DEACTIVATED => 1, STATE_UNVERIFIED => 2, }

  private

  def default_values
    self.state ||= STATE_ACTIVE
    self.key ||= gen_key
  end

  def gen_key
    loop do
      a_key = SecureRandom.hex(30)
      break a_key unless ApiKey.exists?(key: a_key)
    end
  end

end
