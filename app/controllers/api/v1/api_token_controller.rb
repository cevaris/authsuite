class Api::V1::ApiTokenController < ApplicationController

  before_action :require_api_token, except: [:create]

  def show
    render json: @current_api_token, serializer: ApiTokenSerializer
  end

  def create
    @api_token = ApiToken.new(api_token_params)
    if @api_token.save
      render json: @api_token, serializer: ApiTokenSerializer
    else
      render status: :bad_request, json: {errors: @api_token.errors.full_messages}
    end
  end

  def api_token_params
    params.permit(:email)
  end

end
