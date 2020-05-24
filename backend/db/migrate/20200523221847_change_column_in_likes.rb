class ChangeColumnInLikes < ActiveRecord::Migration[6.0]
  def change
    rename_column :likes, :profiles_id, :profile_id
  end
end
