class UsersController < ApplicationController

  def create
    user = User.new(params.require(:user).permit(:username))
    if user.save
      render json: user
    else
      render json: user.errors.full_messages, status: :unprocessable_entity
    end
  end

  def index
    users = User.all
    render json: users
  end

end
