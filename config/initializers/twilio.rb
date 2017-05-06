gem 'twilio-ruby'

Twilio.configure do |config|
  config.account_sid = ENV['TWILIO_API_SID']
  config.auth_token  = ENV['TWILIO_API_TOKEN']
end