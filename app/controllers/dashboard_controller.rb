class DashboardController < ApplicationController
  before_action do
    if session[:current_user_id]
      @current_user = current_user
    else
      redirect_to new_session_path unless session[:current_user_id]
    end
  end

  def index
  end
end
