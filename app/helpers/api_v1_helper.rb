module ApiV1Helper

  @conn = nil

  def post_create_auth_session(host_with_port, api_token_token, identity, identity_type)
    @conn ||= Faraday.new(:url => "http://#{host_with_port}")
    @conn.post do |req|
      req.url api_v1_sessions_path(format: :json)
      req.headers['Content-Type'] = 'application/json'
      req.headers[ApplicationController::API_KEY_HEADER_NAME] = api_token_token
      req.body = {identity: identity, identity_type: identity_type}.to_json
      req.options.timeout = 5
    end
  end

  def get_status_auth_session(host_with_port, api_token_token, receipt)
    @conn ||= Faraday.new(:url => "http://#{host_with_port}")
    @conn.get do |req|
      req.url api_v1_session_status_path(receipt: receipt, format: :json)
      req.headers['Content-Type'] = 'application/json'
      req.headers[ApplicationController::API_KEY_HEADER_NAME] = api_token_token
      req.options.timeout = 2
    end
  end

end
