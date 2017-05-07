class CreateAuthSessions < ActiveRecord::Migration[5.0]
  def change
    create_table :auth_sessions do |t|
      t.string :identity, null: false
      t.integer :identity_type, null: false
      t.string :token, null: false
      t.string :receipt, null: false
      t.integer :state, null: false

      t.timestamps
    end

    add_reference :auth_sessions, :api_key, index: true, foreign_key: true, null: false

    add_index :auth_sessions, :token, unique: true
    add_index :auth_sessions, :receipt, unique: true
  end
end
