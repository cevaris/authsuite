require 'json'

class Api::V1::DemoController < ApplicationController

  def show
  end

  def create
    params
    conn = Faraday.new(:url => request.host_with_port)
    response = conn.post do |req|
      req.url api_v1_sessions_path(format: :json)
      req.headers['Content-Type'] = 'application/json'
      req.headers[API_KEY_HEADER_NAME] = @api_token.token
    end

    puts response.body
    response_json = JSON.parse(response.body)
    puts response_json

    if response.status == 200
      render json: {receipt: response_json['receipt']}
    else
      render status: :service_unavailable, json: response_json
    end
  end

  private

  def demo_api_token
    demo_api_token = Rails.application.secrets.demo_api_token
    @api_token = ApiToken.find_by_token(demo_api_token)
  end

  def demo_auth_session
    params.permit(:identity, :identity_type)
  end

  def auth_session_params
    params.require(:auth_session).permit(:identity, :identity_type)
  end

end
