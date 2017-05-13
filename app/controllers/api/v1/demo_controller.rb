class Api::V1::DemoController < ApplicationController
  include ApiV1Helper

  before_action :demo_api_key

  def show_with_receipt
    auth_session_by_receipt

    if @auth_session
      render json: @auth_session, serializer: AuthSessionReceiptSerializer
    else
      render status: :not_found, json: {message: "auth session found for receipt #{params}"}
    end
  end

  def create
    auth_session_response = create_auth_session(
        @api_key.key,
        params_auth_session
    )

    auth_session_response_json = JSON.parse(auth_session_response.body)

    if auth_session_response.status != 200
      render status: :bad_request, json: {errors: auth_session_response_json}
    else
      render json: auth_session_response_json
    end

    # attempt = 1
    # poison_pill = false
    # until poison_pill or attempt >= 60
    #   puts "attempt[#{attempt}] receipt[#{auth_session_response_json['receipt']}]"
    #   status_response = get_status_auth_session(
    #       @api_key.key,
    #       auth_session_response_json['receipt']
    #   )
    #
    #   status_response_json = JSON.parse(status_response.body)
    #
    #   if status_response.status == 200 and status_response_json['state'] != 'sent'
    #     render json: status_response_json
    #     poison_pill = true
    #   else
    #     attempt += 1
    #     sleep(2)
    #   end
    # end
  end

  private

  def demo_api_key
    demo_api_key = Rails.application.secrets.demo_api_key
    @api_key ||= ApiKey.find_by_key(demo_api_key)
  end

  def params_auth_session
    params.permit(:identity, :identity_type)
  end

  def auth_session_by_receipt
    valid_params = params.permit(:receipt)
    @auth_session = AuthSession.find_by_receipt(valid_params[:receipt])
  end

end
