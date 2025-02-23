module ApplicationHelper
  def js_controller_name
    session[:current_page][:controller].slice(1..).sub("/", "--")
  end
end
