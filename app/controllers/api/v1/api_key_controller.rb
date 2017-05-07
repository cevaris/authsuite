class Api::V1::ApiKeyController < ApplicationController

  before_action :require_api_key, except: [:create]

  def show
    render json: @current_api_key, serializer: ApiKeySerializer
  end

  def create
    @api_key = ApiKey.new(api_key_params)
    if @api_key.save
      render json: @api_key, serializer: ApiKeySerializer
    else
      render status: :bad_request, json: {errors: @api_key.errors.full_messages}
    end
  end

  def api_key_params
    params.permit(:email)
  end

end
