class Api::V1::ApiTokenController < ApplicationController

  before_action :require_api_token, except: [:create]

  def show
    render json: @current_api_token
  end

  def create
    @api_token = ApiToken.new(api_token_params)
    puts @api_token.inspect
    if @api_token.save
      render json: @api_token.to_json
    else
      render json: {errors: @api_token.errors.full_messages}
    end
  end


  def api_token_params
    params.require(:api_token).permit(:email)
  end

end
