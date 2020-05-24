class ChangeColumnName < ActiveRecord::Migration[6.0]
  def change
    rename_column :followers, :follower, :follower_id 
  end
end
