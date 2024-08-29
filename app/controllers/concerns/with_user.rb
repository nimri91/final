# frozen_string_literal: true
module WithUser
  extend ActiveSupport::Concern
  included do
    before_action do
      if session[:current_user_id]
        @current_user = current_user
      else
        redirect_to new_session_path
      end
    end
  end
end
