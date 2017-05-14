class AuthUserSerializer < ActiveModel::Serializer
  attributes :created_at, :email, :slug
end