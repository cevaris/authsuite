module ApiV1Helper

  def post_create_auth_session(host_with_port, api_token_token, identity, identity_type)
    conn = Faraday.new(:url => "http://#{host_with_port}")
    conn.post do |req|
      req.url api_v1_sessions_path(format: :json)
      req.headers['Content-Type'] = 'application/json'
      req.body = {identity: identity, identity_type: identity_type}.to_json
      req.headers[ApplicationController::API_KEY_HEADER_NAME] = api_token_token
    end
  end

end
