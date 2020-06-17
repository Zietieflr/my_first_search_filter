class DogsController < ApplicationController
  before_action :where_dog, only: [:show, :destroy, :update]

  def index
    @dogs = search_params?
    render json: @dogs, include: [:bones]
  end

  def show
    render json: @dog, include: [:bones]
  end

  def create
    @dog = Dog.create(
      name: params[:name],
      age: params[:age]
    )
    redirect_to 'http://localhost:3001'
  end

  def destroy
    @dog.bones.destroy_all
    @dog.destroy
    # render status: :no_content
    redirect_to 'http://localhost:3001'
  end

  def update
    @dog = {
      name: params[:name],
      age: params[:age]
    }
    redirect_to "http://localhost:3001/dogShow.html?dogId=#{@dog.id}"
  end

  def search_params?
    if params['search']
      search_params_type
    else
      Dog.all
    end
  end

  def search_params_type
    if params['search'].to_i.positive?
      Dog.where(age: params['search'])
    else
      Dog.where('name LIKE ?', "%#{params['search']}%")
    end
  end

  def where_dog
    @dog = Dog.find(params[:id])
  end
end
