class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|

      t.integer :author_id, null: false
      t.integer :poster_id, null: false
      t.text :content, null: false
      t.string :type, null: false
      t.integer :parent_post_id

      t.index :author_id

      t.timestamps
    end
  end
end
