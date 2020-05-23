class CreateLikes < ActiveRecord::Migration[6.0]
  def change
    create_table :likes do |t|
      t.references :profiles, null: false, foreign_key: true
      t.references :likable, polymorphic: true, null: false
      # t.datetime :timestamp

      t.timestamps
    end
  end
end
