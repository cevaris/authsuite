Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  scope format: true, constraints: {format: :json} do
    namespace :api do
      namespace :v1 do
        get 'welcome', to: 'welcome#show'

        get 'auth/tokens', to: 'api_token#show'
        post 'auth/tokens', to: 'api_token#create'

        get 'auth/sessions', to: 'auth_session#show'
        post 'auth/sessions/token/:token/:action', to: 'auth_session#token_action'
        post 'auth/sessions', to: 'auth_session#create'
      end
    end
  end

end
