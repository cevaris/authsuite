class Api::V1::ApiTokenController < ApplicationController

  before_action :require_api_token

  def authenticate
    render json: @current_api_token
  end

end
