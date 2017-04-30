require 'json'

class Api::V1::DemoController < ApplicationController
  include ApiV1Helper

  before_action :demo_api_token

  def show
  end

  def create
    puts auth_session_params
    response = post_create_auth_session(
        request.host_with_port,
        @api_token.token,
        auth_session_params['identity'],
        auth_session_params['identity_type']
    )

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

  def auth_session_params
    params.permit(:identity, :identity_type)
  end

end
