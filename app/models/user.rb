class User < ActiveRecord::Base
  validates :first_name, :last_name, presence: true
  validates :age, numericality: { greater_than: 0 }
  validates :gender, inclusion: { in: %w(male female others) }

  def full_name
    "#{first_name} #{last_name}"
  end
end
