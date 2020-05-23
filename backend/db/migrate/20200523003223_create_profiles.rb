class CreateProfiles < ActiveRecord::Migration[6.0]
  def change
    create_table :profiles do |t|
      t.references :user, null: false, foreign_key: true
      t.string :username
      t.string :description
      t.string :img_file
      t.datetime :last_seen

      t.timestamps
    end
  end
end
