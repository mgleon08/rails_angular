require 'rails_helper'

RSpec.describe 'Users', type: :request do
  let(:user){ create(:user) }

  let(:params) do
    { first_name: 'Leon', last_name: 'ji', age: 28, gender: 'male' }
  end

  let(:invalid_params) do
    { first_name: nil, last_name: nil, age: 28, gender: 'male' }
  end

  describe 'GET /api/users' do
    it 'response with status code 200' do
      new_user = user
      get '/api/users'
      expect(response.content_type).to eq('application/json')
      expect(response).to have_http_status(200)
      format_response = JSON.parse(response.body)
      expect(response.body).to include(user.id)
      expect(format_response.class).to eq(Array)
    end
  end

  describe 'GET /api/users/:id' do
    it 'response with status code 200' do
      get "/api/users/#{user.id}"
      expect(response.content_type).to eq('application/json')
      expect(response).to have_http_status(200)
      expect(response.body).to include(user.id)
    end
  end

  describe 'POST /api/users' do
    it 'response with status code 200' do
      post '/api/users', user: params
      expect(response.content_type).to eq('application/json')
      expect(response).to have_http_status(200)
    end

    it 'when create with valid params' do
      expect{ post '/api/users', user: params }.to change{ User.count }.by(1)
    end

    it 'when create with invalid params' do
      expect{ post '/api/users', user: invalid_params }.to change{ User.count }.by(0)
    end
  end

  describe 'PUT /api/users/:id' do
    it 'response with status code 200' do
      put "/api/users/#{user.id}", user: params
      expect(response.content_type).to eq('application/json')
      expect(response).to have_http_status(200)
    end

    it 'when update with valid params' do
      put "/api/users/#{user.id}", user: params
      expect(User.first.first_name).to eq(params[:first_name])
    end

    it 'when update with invalid params' do
      put "/api/users/#{user.id}", user: invalid_params
      expect(User.first.first_name).not_to eq(params[:first_name])
    end
  end

  describe 'DELETE /api/users/:id' do
    it 'response with status code 200' do
      delete "/api/users/#{user.id}"
      expect(response.content_type).to eq('application/json')
      expect(response).to have_http_status(200)
    end

    it 'when delete with a existing user' do
      new_user = user
      expect{ delete "/api/users/#{new_user.id}" }.to change{ User.count }.by(-1)
    end
  end

  describe 'Get /api/users/count' do
    it 'response with status code 200' do
      get '/api/users/count'
      expect(response.content_type).to eq('application/json')
      expect(response).to have_http_status(200)
    end

    it 'should response with right count number' do
      new_user = user
      get '/api/users/count'
      format_response = JSON.parse(response.body).with_indifferent_access
      expect(format_response[:count]).to eq(1)
    end
  end

  describe 'Get /api/users/:id/name' do
    it 'response with status code 200' do
      get "/api/users/#{user.id}/name"
      expect(response.content_type).to eq('application/json')
      expect(response).to have_http_status(200)
    end

    it 'when response with a existing user' do
      get "/api/users/#{user.id}/name"
      format_response = JSON.parse(response.body).with_indifferent_access
      expect(format_response[:name]).to eq("#{user.first_name} #{user.last_name}")
    end
  end
end
