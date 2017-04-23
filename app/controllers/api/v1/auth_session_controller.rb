class Api::V1::AuthSessionController < ApplicationController

  before_action :require_api_token
  before_action :auth_session_by_token, only: [:token_accept, :token_reject]

  def show_with_receipt
    receipt_param = params[:receipt]
    if receipt_param.nil?
      render status: :bad_request, json: {message: 'missing receipt query parameter'}
      return
    end

    @auth_session = AuthSession.find_by_receipt(receipt_param)
    if @auth_session
      render json: @auth_session, serializer: AuthSessionReceiptSerializer
    else
      render status: :not_found, json: {message: "auth session found for receipt #{receipt_param}"}
    end
  end

  def create
    @auth_session = AuthSession.new(auth_session_params)
    @auth_session.api_token = @current_api_token

    if @auth_session.save
      render json: @auth_session, serializer: AuthSessionReceiptSerializer
    else
      render json: {errors: @auth_session.errors.full_messages}
    end
  end

  def token_accept
    if @auth_session.accept!
      render status: :ok, :nothing => true
    else
      render json: {errors: ["invalid state transition from #{@auth_session.state} to accept state"]}
    end
  end

  def token_reject
    if @auth_session.reject!
      render status: :ok, :nothing => true
    else
      render json: {errors: ["invalid state transition from #{@auth_session.state} to reject state"]}
    end
  end

  private

  def auth_session_by_token
    token_params = params.require(:auth_session).permit(:token)
    @auth_session = AuthSession.find_by_token(token_params[:token])
  end

  def auth_session_params
    params.require(:auth_session).permit(:identity, :identity_type)
  end

end
