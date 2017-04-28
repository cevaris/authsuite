Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  scope format: true, constraints: {format: :json} do
    namespace :api do
      namespace :v1 do
        get 'welcome', to: 'welcome#show'

        resources :tokens, controller: 'api_token', only: [:create]
        get 'tokens', to: 'api_token#show', as: :token

        post 'sessions/', to: 'auth_session#create', as: :sessions
        post 'sessions/tokens/:token/accept', to: 'auth_session#token_accept', as: :session_accept
        post 'sessions/tokens/:token/reject', to: 'auth_session#token_reject', as: :session_reject
        get 'sessions/receipts/:receipt/status', to: 'auth_session#show_with_receipt', as: :session_status

      end
    end
  end
end
