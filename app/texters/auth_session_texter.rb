class AuthSessionTexter < Textris::Base
  default from: "AuthQuick <#{ENV['TWILIO_PHONE_NUMBER']}>"

  def build_auth_session(auth_session)
    @auth_session = auth_session
    text(to: @auth_session.identity)
  end
end