Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :create, :show] do
        resources :posts, only: [:index]
        resources :follows, only: [:index]
        resources :messages, only: [:index]
      end
    resource :session, only: [:create, :destroy]
    resources :posts, only: [:index, :create, :update, :show, :destroy]
    resources :follows, only: [:create]
    resource :follows, only: [:destroy]
    resources :tags, only: [:index, :show] do
      resources :posts, only: [:index]
    end
    resources :likes, only: [:create]
    resource :likes, only: [:destroy]
    resources :explore, only: [:index]
  end
  
end
