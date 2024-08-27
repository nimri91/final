class SessionsController < ApplicationController
  def new 
    @user = User.new
  end

  def create
     @user = User.find_by(email: user_params[:email])
     @status = @user && @user.authenticate(user_params[:password])
     if @status
       session[:current_user_id] = @user.id
       flash[:notice] = "Login Successful"
       redirect_to dashboard_path
     else
       flash[:alert] = "Login Failed"
       render :new, status: :unprocessable_entity
     end
  end

  def destroy
    session[:current_user_id] = User.find(session[:current_user_id])
    flash[:notice] = "Logout"
    redirect_to new_session_path
  end

  def user_params
    params.permit(:email,:password, :commit, :authenticity_token)
  end
end

