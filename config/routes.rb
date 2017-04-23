Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      get 'welcome.json', to: 'welcome#show'

      get 'auth', to: 'api_token#show'
      post 'auth', to: 'api_token#create'
    end
  end

end
