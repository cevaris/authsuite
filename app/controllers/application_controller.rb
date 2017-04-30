class ApplicationController < ActionController::API

  API_KEY_HEADER_NAME = 'X-AUTH-API-TOKEN'

  protected

  def require_api_token
    check_api_token || render_unauthorized
  end

  private

  def check_api_token
    token = request.headers[API_KEY_HEADER_NAME]
    @current_api_token = ApiToken.find_by(token: token) if token
  end

  def render_unauthorized
    render status: :unauthorized, json: {message: 'failed api token authentication'}
  end

end
