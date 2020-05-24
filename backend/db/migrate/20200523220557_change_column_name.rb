class ChangeColumnName < ActiveRecord::Migration[6.0]
  def change
    rename_column :followers, :follower, :follower_id
    rename_column :followers, :profile_id, :followed_id
  end
end
