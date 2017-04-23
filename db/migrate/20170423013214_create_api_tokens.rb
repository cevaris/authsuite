class CreateApiTokens < ActiveRecord::Migration[5.0]
  def change
    create_table :api_tokens do |t|
      t.string :email
      t.string :token
      t.integer :state

      t.timestamps
    end

    add_index :api_tokens, :email
    add_index :api_tokens, :token
  end
end
