class SessionsController < ApplicationController 

  skip_before_action :authorize, :require_login , only: [:new, :create]

  def new 
    redirect_to 'http://localhost:3000/login'
  end

  def create 
    user = User.find_by(username: params[:user][:username])
    #byebug
    if user && user.authenticate(params[:user][:password])
      session[:user_id] = user.id 
      redirect_to '/'
      #render json: { user: user, status: :created }
    else 
      render json: { errors: ["please pass username/password"] , status: :not_logged_in }
    end
  end
end