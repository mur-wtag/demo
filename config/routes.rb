Rails.application.routes.draw do
  devise_for :users, controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations',
    password: 'users/passwords'
  }

  resources :users, path: :staffs, only: %i[index new create edit update destroy]

  resources :users, only: [] do
    resources :shops, only: %i[index new create edit update destroy]
  end

  resources :carts, only: [] do
    collection do
      post :add_line_item
      post :update_line_item
      delete :remove_line_item
    end
  end

  resources :products, only: %i[index new create edit update destroy]
  get :search, to: 'dashboard#search', as: :search

  resources :orders, only: %i[create index]

  scope :api, defaults: { format: :json } do
    get :products, to: 'products#index'
  end

  root to: 'products#index'
end
