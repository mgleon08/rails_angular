FactoryBot.define do
  factory :user do
    first_name { Faker::Name.first_name }
    last_name { Faker::Name.last_name }
    age { Faker::Number.number(2) }
    gender { Faker::Gender.binary_type.downcase }
  end
end
