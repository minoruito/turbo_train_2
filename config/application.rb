require_relative "boot"

require "rails/all"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module EcAdmin
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 7.0

    # Configuration for the application, engines, and railties goes here.
    #
    # These settings can be overridden in specific environments using the files
    # in config/environments, which are processed later.
    #
    # config.time_zone = "Central Time (US & Canada)"
    # config.eager_load_paths << Rails.root.join("extras")
    config.time_zone = 'Tokyo'
    config.active_record.default_timezone = :local
    # config/initializer/locale.rbで設定するので、ここでの設定はコメントアウト。
    # developmentでは、application.rbのリロードが入るとlocale.rbでの設定はリセットされる
    # config.i18n.available_locales = %i[ja en]
    # config.i18n.default_locale = :ja

    config.autoload_paths += %W(#{Rails.root}/lib)


    # include a helper which matches the name of the controller
    config.action_controller.include_all_helpers = false

    # Specify the proc used to decorate input tags that refer to attributes with errors.
    config.action_view.field_error_proc = Proc.new { |html_tag, instance| html_tag }
        
    config.action_controller.forgery_protection_origin_check = false

    #host設定 すべて受け付ける
    config.hosts.clear
    
    config.action_dispatch.default_headers['Referrer-Policy'] = 'unsafe-url'
    
    config.action_view.preload_links_header = false

    config.active_job.queue_adapter = :delayed_job

    config.encoding = "utf-8"

  end
end
