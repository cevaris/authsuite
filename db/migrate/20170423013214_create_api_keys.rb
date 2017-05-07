class CreateApiKeys < ActiveRecord::Migration[5.0]
  def change
    create_table :api_keys do |t|
      t.string :email
      t.string :key
      t.integer :state

      t.timestamps
    end

    add_index :api_keys, :email, unique: true
    add_index :api_keys, :key, unique: true
  end
end
