class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
      t.references :profile, null: false, foreign_key: true
      t.string :media_file
      t.string :caption
      # t.datetime :timestamp
     

      t.timestamps
    end
  end
end
