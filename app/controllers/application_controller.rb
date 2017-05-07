class ApplicationController < ActionController::API

  API_KEY_HEADER_NAME = 'X-AUTHQUICK-API-KEY'

  protected

  def require_api_key
    check_api_key || render_unauthorized
  end

  private

  def check_api_key
    key = request.headers[API_KEY_HEADER_NAME]
    @current_api_key = ApiKey.find_by(key: key) if key
  end

  def render_unauthorized
    render status: :unauthorized, json: {message: 'failed api key authentication'}
  end

end
