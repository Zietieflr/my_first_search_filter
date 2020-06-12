class BonesController < ApplicationController
  def index
    @bones = Bone.all
    render json: @bones
  end

  def show
    @bone = Bone.find(params[:id])
    render json: @bone
  end
end
