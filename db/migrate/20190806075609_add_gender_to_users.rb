class AddGenderToUsers < ActiveRecord::Migration
  def change
    add_column :users, :gender, :string, after: :last_name
  end
end
