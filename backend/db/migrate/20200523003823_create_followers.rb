class CreateFollowers < ActiveRecord::Migration[6.0]
  def change
    create_table :followers do |t|
      t.references :profile, null: false, foreign_key: true
      t.integer :follower

      t.timestamps
    end
  end
end
