require 'json'

class Api::V1::DemoController < ApplicationController
  include ApiV1Helper

  before_action :demo_api_token

  def show
    response = get_status_auth_session(
        request.host_with_port,
        @api_token.token,
        receipt_params['receipt'],
    )

    response_json = JSON.parse(response.body)

    if response.status == 200
      render json: response_json
    else
      render status: response.status, json: response_json
    end
  end

  def create
    rep = post_create_auth_session(
        request.host_with_port,
        @api_token.token,
        params_auth_session['identity'],
        params_auth_session['identity_type']
    )
    puts 'done posting', rep

    response_json = JSON.parse(rep.body)

    if rep.status == 200
      render json: response_json
    else
      render status: rep.status, json: response_json
    end
  end

  private

  def demo_api_token
    demo_api_token = Rails.application.secrets.demo_api_token
    @api_token = ApiToken.find_by_token(demo_api_token)
  end

  def params_auth_session
    params.permit(:identity, :identity_type)
  end

  def receipt_params
    params.permit(:receipt)
  end

end
