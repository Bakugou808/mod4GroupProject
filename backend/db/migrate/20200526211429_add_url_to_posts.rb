class AddUrlToPosts < ActiveRecord::Migration[6.0]
  def change
    add_column :posts, :img_url, :string 

  end
end
