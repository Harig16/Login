Rails.application.routes.draw do
  resources :users, only: [:create, :index]
  get '/me', to: "users#show"
  get '/login', to: "sessions#new"
  post '/login', to: "sessions#create"
end
