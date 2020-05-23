class CreateComments < ActiveRecord::Migration[6.0]
  def change
    create_table :comments do |t|
      t.references :post, null: false, foreign_key: true
      t.references :profile, null: false, foreign_key: true
      t.string :comment
      # t.datetime :timestamp

      t.timestamps
    end
  end
end
