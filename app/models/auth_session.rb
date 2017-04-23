require 'securerandom'

class AuthSession < ApplicationRecord
  include ActiveModel::Serialization

  belongs_to :api_token
  before_save :default_values

  validates :identity, :identity_type, presence: true
  validates_uniqueness_of :token, :receipt
  after_validation :check_identity

  STATE_SENT = 'sent'
  STATE_ACCEPTED = 'accepted'
  STATE_REJECTED = 'rejected'
  enum state: {STATE_SENT => 0, STATE_ACCEPTED => 1, STATE_REJECTED => 2, }

  IDENTITY_TYPE_EMAIL = 'email'
  IDENTITY_TYPE_PHONE = 'phone'
  enum identity_type: {IDENTITY_TYPE_EMAIL => 0, IDENTITY_TYPE_PHONE => 1, }

  private

  def default_values
    self.token ||= gen_token
    self.receipt ||= gen_receipt
    self.state ||= STATE_SENT
  end

  def gen_token
    loop do
      a_token = SecureRandom.hex(30)
      break a_token unless AuthSession.exists?(token: a_token)
    end
  end

  def gen_receipt
    loop do
      a_receipt = SecureRandom.hex(30)
      break a_receipt unless AuthSession.exists?(receipt: a_receipt)
    end
  end

  def check_identity
    case self.identity_type
      when 'email'
        email_regex = /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i
        if self.identity.match(email_regex).nil?
          errors.add(:identity, "#{self.identity} is not a valid email")
        end
      else
        errors.add(:identity_type, "'#{self.identity_type}' not supported")
    end
  end

end
