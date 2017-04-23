class ApiTokenSerializer < ActiveModel::Serializer
  attributes :email, :token, :state, :created_at
end