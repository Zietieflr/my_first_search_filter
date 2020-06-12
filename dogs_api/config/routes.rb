Rails.application.routes.draw do
  resources :bones, only: [:index, :show]
  resources :dogs, only: [:index, :show, :create, :destroy, :update]
end
