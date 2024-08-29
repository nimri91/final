# frozen_string_literal: true
module WithAdmin
  extend ActiveSupport::Concern
  included do
    before_action do
      redirect_to new_session_path unless session[:current_user_id]

      unless current_user.admin?
        flash[:error] = "Not Authorized"
        redirect_to dashboard_path
      end
    end
  end
end


