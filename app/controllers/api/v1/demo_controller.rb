class Api::V1::DemoController < ApplicationController
  include ApiV1Helper

  before_action :demo_api_token

  def show_with_receipt
    auth_session_by_receipt

    if @auth_session
      render json: @auth_session, serializer: AuthSessionReceiptSerializer
    else
      render status: :not_found, json: {message: "auth session found for receipt #{params}"}
    end
  end

  def create
    @auth_session = AuthSession.new(params_auth_session)
    @auth_session.api_token = @api_token

    if create_auth_session(@auth_session)
      render json: @auth_session, serializer: AuthSessionReceiptSerializer
    else
      render status: :bad_request, json: {errors: @auth_session.errors.full_messages}
    end
  end

  private

  def demo_api_token
    demo_api_token = Rails.application.secrets.demo_api_token
    @api_token ||= ApiToken.find_by_token(demo_api_token)
  end

  def params_auth_session
    params.permit(:identity, :identity_type)
  end

  def auth_session_by_receipt
    valid_params = params.permit(:receipt)
    @auth_session = AuthSession.find_by_receipt(valid_params[:receipt])
  end

end
