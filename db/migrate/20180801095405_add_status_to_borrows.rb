class AddStatusToBorrows < ActiveRecord::Migration[5.2]
  def change
    add_column :borrows, :status, :integer, default: 0
  end
end