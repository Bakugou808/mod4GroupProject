class ChangeColumnNull < ActiveRecord::Migration[6.0]
  def change
    change_column_null(:followers, :follower_id, false)
  end
end
