class CreatePostTags < ActiveRecord::Migration[5.2]
  def change
    create_table :post_tags do |t|
      t.integer :post_id, null: false
      t.integer :tag_id, null: false
      t.index :tag_id
      t.index [:post_id, :tag_id], unique: true
      t.timestamps
    end
  end
end
