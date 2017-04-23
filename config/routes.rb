Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'welcome#index'
  get '/welcome', to: 'welcome#index'

  namespace :api do
    namespace :v1 do
      get 'me.json', to: 'welcome#my_api'
      get 'auth.json', to: 'api_token#authenticate'
    end
  end


end
