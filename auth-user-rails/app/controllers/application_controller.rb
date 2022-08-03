class ApplicationController < ActionController::API

  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

  rescue_from ActiveRecord::RecordNotFound, with: :render_record_not_found

  before_action :authorize, :require_login

  def authorize
    redirect_to 'http://localhost:3000/login' unless current_user
  end

  def require_login
    unless logged_in?
      flash[:error] = "You must be logged in to access this section"
      redirect_to 'http://localhost:3000/login'
    end
  end

  def render_unprocessable_entity(exception)
    render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
  end
  
  
  def render_record_not_found
    render json: {error: ["Not Found"] }, status: :not_found
  end

  def current_user 
    @current_user ||= session[:user_id] && User.find_by(id: session[:user_id])
  end

  def logged_in?
    !!session[:user_id]
  end
end
