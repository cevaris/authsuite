require 'securerandom'

class AuthUser < ApplicationRecord
  include ActiveModel::Serialization

  before_save :default_values

  validates :email, presence: true
  validates_uniqueness_of :email, :auth_token, :slug
  after_validation :check_email

  def logout
    self.auth_token = nil
    save
  end

  def login
    auth_token = nil
    loop do
      auth_token = SecureRandom.hex(128)
      break auth_token unless AuthUser.exists?(auth_token: auth_token)
    end
    self.auth_token = auth_token
    save
  end

  private

  def default_values
    self.slug ||= gen_slug
  end

  private

  def gen_slug
    loop do
      slug = SecureRandom.hex(15)
      break slug unless AuthUser.exists?(slug: slug)
    end
  end


  def check_email
    email_regex = /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i
    if self.email.match(email_regex).nil?
      errors.add(:email, "#{self.email} is not a valid email")
    end
  end

end
