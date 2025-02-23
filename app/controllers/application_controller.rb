# coding: utf-8
class ApplicationController < ActionController::Base
  before_action :set_current_page
  def set_current_page
    @active_menu = "/#{params[:controller]}"
    session[:current_page] = {controller: @active_menu}

    # 遷移元を保存
    unless request.referer.blank?
      uri = URI.parse(request.referer)
      session[:request_referer] = uri.path
    else
      session[:request_referer] = nil
    end
  end
end