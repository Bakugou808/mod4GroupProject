class AddApproveColToFollowers < ActiveRecord::Migration[6.0]
  def change
    add_column :followers, :approved, :boolean, default: false 
  end
end
