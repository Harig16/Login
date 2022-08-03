class UsersController < ApplicationController 

  skip_before_action :authorize, only: :create

  def index 
    user = User.all
    render json: user
  end

  def create 
    user = User.new(user_params)
    if user.save
      session[:user_id] = user.id 
      redirect_to 'http://localhost:3000/'
      #render json: user, status: :created
    else 
      redirect_to 'http://localhost:3000/', errors: ["Not created"] 
    end
  end

  def show 
    #byebug
    render json: @current_user
  end

  private 

    def user_params 
      params.require(:user).permit(username, email, password, password_confirmation)
    end
end