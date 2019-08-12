require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'field type' do
    it { is_expected.to have_field(:first_name, :last_name, :gender).of_type(String) }
    it { is_expected.to have_field(:age).of_type(Integer) }
  end

  describe 'validation' do
    it { is_expected.to validate_presence_of(:first_name) }
    it { is_expected.to validate_presence_of(:last_name) }
    it { is_expected.to validate_numericality_of(:age).greater_than(0) }
    it { is_expected.to validate_inclusion_of(:gender).to_allow('male', 'female', 'others') }
  end

  describe 'relation' do
    it { is_expected.to have_one(:shop) }
  end
end
