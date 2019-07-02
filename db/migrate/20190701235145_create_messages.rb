class CreateMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :messages do |t|
      t.integer :sender_id, null: false
      t.integer :receiver_id, null: false
      t.index :sender_id
      t.index :receiver_id
      t.text :body, null: false
      t.timestamps
    end
  end
end
