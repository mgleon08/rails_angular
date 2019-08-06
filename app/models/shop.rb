class Shop
  include Mongoid::Document
  field :name, type: String
  field :user_id, type: Integer

  belongs_to :user
end