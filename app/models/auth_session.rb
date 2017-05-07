require 'securerandom'

class AuthSession < ApplicationRecord
  include ActiveModel::Serialization
  include AASM

  belongs_to :api_key
  before_save :default_values
  before_validation :clean_values, on: :create

  validates :identity, :identity_type, presence: true
  validates_uniqueness_of :token, :receipt
  after_validation :check_identity

  enum state: {sent: 0, accepted: 1, rejected: 2, }
  enum identity_type: {email: 0, phone: 1, }

  aasm column: :state, enum: true do
    state :sent, :initial => true
    state :accepted
    state :rejected

    event :accept do
      transitions from: [:accepted, :sent], to: :accepted
    end
    event :reject do
      transitions from: [:rejected, :sent], to: :rejected
    end
  end

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

  def clean_values
    if self.identity_type == 'phone'
      if self.identity
        self.identity = '+1'+self.identity.gsub(/[^\d,\.]/, '')
      end
    end
  end

  def check_identity
    case self.identity_type
      when 'email'
        email_regex = /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i
        if self.identity.match(email_regex).nil?
          errors.add(:identity, "#{self.identity} is not a valid email")
        end
      when 'phone'
        # no validation on phone
      else
        errors.add(:identity_type, "'#{self.identity_type}' not supported")
    end
  end

end
