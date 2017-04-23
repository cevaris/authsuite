Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      get 'welcome.json', to: 'welcome#show'
      get 'auth.json', to: 'api_token#authenticate'
    end
  end

end
