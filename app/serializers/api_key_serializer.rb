class ApiKeySerializer < ActiveModel::Serializer
  attributes :email, :key, :state, :created_at
end