class AddAgeToUsers < ActiveRecord::Migration
  def change
    add_column :users, :age, :integer, after: :last_name
  end
end
