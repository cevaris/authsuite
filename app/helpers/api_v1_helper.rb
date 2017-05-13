module ApiV1Helper

  def create_auth_session(api_key, payload)
    url = "#{ENV['EXTERNAL_API']}#{api_v1_sessions_path(format: :json)}"

    HTTP.headers(:accept => "application/json")
        .headers(ApplicationController::API_KEY_HEADER_NAME => api_key)
        .post(url, json: payload)
  end

  def get_status_auth_session(api_key, receipt)
    url = "#{ENV['EXTERNAL_API']}#{api_v1_session_status_path(receipt: receipt, format: :json)}"

    HTTP.headers(:accept => "application/json")
        .headers(ApplicationController::API_KEY_HEADER_NAME => api_key)
        .get(url)
  end

end
