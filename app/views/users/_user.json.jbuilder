json.extract! user, :id, :first_name, :last_name
json.url user_url(user, format: :json)
