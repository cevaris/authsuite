class Api::V1::AuthUserController < ApplicationController

  before_action :require_auth_token, except: [:create]

  def show
    if @auth_user
      render json: @auth_user, serializer: AuthUserSerializer
    else
      render status: :not_found, json: {message: "auth user found for slug #{params_by_slug.inspect}"}
    end
  end

  def create
    @auth_user = AuthUser.new(params_auth_user)

    if @auth_user.save
      render json: @auth_user, serializer: AuthUserSerializer
    else
      render status: :bad_request, json: {errors: @auth_user.errors.full_messages}
    end
  end

  private

  def auth_user_by_slug
    @auth_user = AuthSession.find_by_slug(params_by_slug)
  end

  def params_auth_user
    params.permit(:email)
  end

  def params_by_slug
    params.permit(:slug)
  end
end