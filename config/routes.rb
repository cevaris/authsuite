Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  scope format: true, constraints: {format: :json} do
    namespace :api do
      namespace :v1 do
        get 'welcome', to: 'welcome#show'

        resources :tokens, controller: 'api_token', only: [:create]
        get 'tokens', to: 'api_token#show', as: :token

        namespace :sessions do
          post '/', to: 'auth_session#create'
          post 'tokens/:token/accept', to: 'auth_session#token_accept'
          post 'tokens/:token/reject', to: 'auth_session#token_reject'
          get 'receipts/:receipt/status', to: 'auth_session#show_with_receipt'
        end

      end
    end
  end

end
