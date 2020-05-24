class ChangeColumnNameFollwer < ActiveRecord::Migration[6.0]
  def change
    rename_column :followers, :followed_id, :profile_id
  end
end
