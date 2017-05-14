class CreateAuthUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :auth_users do |t|
      t.string :slug
      t.string :email
      t.string :auth_token

      t.timestamps
    end

    add_index :auth_users, :email, unique: true
    add_index :auth_users, :slug, unique: true
    add_index :auth_users, :auth_token, unique: true
  end
end
