require 'rails_helper'

RSpec.describe Shop, type: :model do
  describe 'field' do
    it { is_expected.to have_field(:name).of_type(String) }
    it { is_expected.to have_field(:user_id).of_type(Object) }
  end

  describe 'relation' do
    it { is_expected.to belong_to(:user) }
  end
end
