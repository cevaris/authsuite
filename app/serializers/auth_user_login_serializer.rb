class AuthUserLoginSerializer < ActiveModel::Serializer
  attributes :auth_token, :slug
end