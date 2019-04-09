class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.integer :post_id, null: false
      t.integer :user_id, null: false
      t.index [:post_id, :user_id], unique: true
      t.timestamps
    end
  end
end
