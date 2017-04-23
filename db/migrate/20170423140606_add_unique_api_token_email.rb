class AddUniqueApiTokenEmail < ActiveRecord::Migration[5.0]
  def change
    remove_index :api_tokens, :token
    add_index :api_tokens, :token, unique: true

    remove_index :api_tokens, :email
    add_index :api_tokens, :email, unique: true
  end
end
