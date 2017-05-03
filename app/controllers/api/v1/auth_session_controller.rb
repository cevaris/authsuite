class Api::V1::AuthSessionController < ApplicationController

  before_action :require_api_token, except: [:token_accept, :token_reject, :show_with_token]
  before_action :auth_session_by_token, only: [:show_with_token, :token_accept, :token_reject]
  before_action :auth_session_by_receipt, only: [:show_with_receipt]

  def show_with_token
    if @auth_session
      render json: @auth_session, serializer: AuthSessionTokenSerializer
    else
      render status: :not_found, json: {message: "auth session found for receipt #{auth_session_by_token}"}
    end
  end

  def show_with_receipt
    if @auth_session
      render json: @auth_session, serializer: AuthSessionReceiptSerializer
    else
      render status: :not_found, json: {message: "auth session found for receipt #{auth_session_by_receipt}"}
    end
  end

  def create
    @auth_session = AuthSession.new(auth_session_params)
    @auth_session.api_token = @current_api_token

    if create_auth_session(@auth_session)
      render json: @auth_session, serializer: AuthSessionReceiptSerializer
    else
      render status: :bad_request, json: {errors: @auth_session.errors.full_messages}
    end
  end

  def token_accept
    if @auth_session.accept and @auth_session.save
      head :ok
    else
      render status: :bad_request, json: {errors: ["invalid state transition from #{@auth_session.state} to accepted state"]}
    end
  end

  def token_reject
    if @auth_session.reject and @auth_session.save
      head :ok
    else
      render status: :bad_request, json: {errors: ["invalid state transition from #{@auth_session.state} to rejected state"]}
    end
  end

  private

  rescue_from AASM::InvalidTransition do |exception|
    render status: :bad_request, json: {errors: [exception.message]}
  end

  def create_auth_session(auth_session)
    AuthSession.transaction do
      auth_session_saved = @auth_session.save!

      # send notification
      AuthSessionMailer.build_auth_session(@auth_session).deliver!

      auth_session_saved
    end
  end

  def auth_session_by_token
    valid_params = params.permit(:token)
    @auth_session = AuthSession.find_by_token(valid_params[:token])
  end

  def auth_session_by_receipt
    valid_params = params.permit(:receipt)
    @auth_session = AuthSession.find_by_receipt(valid_params[:receipt])
  end

  def auth_session_params
    params.permit(:identity, :identity_type)
  end

end
