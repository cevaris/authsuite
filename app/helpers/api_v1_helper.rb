module ApiV1Helper

  def create_auth_session(auth_session)
    AuthSession.transaction do
      auth_session_saved = auth_session.save!

      # send notification
      if auth_session.email?
        AuthSessionMailer.build_auth_session(auth_session).deliver!
      end
      if auth_session.phone?
        AuthSessionTexter.build_auth_session(auth_session).deliver
      end

      auth_session_saved
    end
  end

end
