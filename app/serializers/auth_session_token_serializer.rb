class AuthSessionTokenSerializer < ActiveModel::Serializer
  attributes :identity, :identity_type, :token, :state, :created_at
end