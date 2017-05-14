class ApplicationController < ActionController::API

  API_KEY_HEADER_NAME = 'X-AUTHQUICK-API-KEY'
  AUTH_TOKEN_HEADER_NAME = 'X-AUTHQUICK-AUTH-TOKEN'

  protected

  def require_api_key
    check_api_key || render_unauthorized
  end

  def require_auth_token
    check_auth_token || render_unauthorized
  end

  private

  def check_api_key
    key = request.headers[API_KEY_HEADER_NAME]
    @current_api_key = ApiKey.find_by(key: key) if key
  end

  def check_auth_token
    auth_token = request.headers[AUTH_TOKEN_HEADER_NAME]
    @auth_user = AuthUser.find_by(auth_token: auth_token) if auth_token
  end

  def render_unauthorized
    render status: :unauthorized, json: {message: 'failed authentication'}
  end

end
