class AuthSessionReceiptSerializer < ActiveModel::Serializer
  attributes :identity, :identity_type, :receipt, :state, :created_at
end