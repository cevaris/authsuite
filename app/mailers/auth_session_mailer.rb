class AuthSessionMailer < ApplicationMailer

  def build_auth_session(auth_session)
    @auth_session = auth_session
    mail(
        to: @auth_session.identity,
        from: 'mail@authquick.com',
        subject: 'Authenticate AuthQuick'
    )
  end
end
