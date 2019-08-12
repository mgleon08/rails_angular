require 'rails_helper'

RSpec.describe UsersController, type: :controller do
  let(:user){ create(:user) }

  let(:params) do
    { first_name: 'Leon', last_name: 'ji', age: 28, gender: 'male' }
  end

  let(:invalid_params) do
    { first_name: nil, last_name: nil, age: 28, gender: 'male' }
  end

  describe 'GET #index' do
    it 'response with status code 200' do
      get :index, format: :json
      expect(response).to have_http_status(200)
    end
  end

  describe 'GET #show' do
    it 'when show with a existing user' do
      get :show, id: user.id, format: :json
      expect(response).to have_http_status(200)
    end
  end

  describe 'POST #create' do
    it 'response with status code 200' do
      post :create, user: params
      expect(response).to have_http_status(200)
    end

    it 'when create with valid params' do
      expect{ post :create, user: params }.to change{ User.count }.by(1)
    end

    it 'when create with invalid params' do
      expect{ post :create, user: invalid_params }.to change{ User.count }.by(0)
    end
  end

  describe 'PUT #update' do
    it 'response with status code 200' do
      put :update, id: user.id, user: params
      expect(response).to have_http_status(200)
    end

    it 'when update with valid params' do
      put :update, id: user.id, user: params
      expect(User.first.first_name).to eq(params[:first_name])
    end

    it 'when update with invalid params' do
      put :update, id: user.id, user: invalid_params
      expect(User.first.first_name).not_to eq(params[:first_name])
    end
  end

  describe 'DELETE #destroy' do
    it 'response with status code 200' do
      delete :destroy, id: user.id
      expect(response).to have_http_status(200)
    end

    it 'when delete with a existing user' do
      new_user = user
      expect{ delete :destroy, id: new_user.id }.to change{ User.count }.by(-1)
    end
  end
end
