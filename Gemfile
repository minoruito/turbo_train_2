source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "3.2.3"

# Bundle edge Rails instead: gem "rails", github: "rails/rails", branch: "main"
gem "rails", "~> 7.0.7.2"

# The original asset pipeline for Rails [https://github.com/rails/sprockets-rails]
gem "sprockets-rails"

# Use mysql as the database for Active Record
gem "sqlite3", "~> 1.4"

# Use the Puma web server [https://github.com/puma/puma]
gem "puma", "~> 5.0"

# Bundle and transpile JavaScript [https://github.com/rails/jsbundling-rails]
gem "jsbundling-rails"

# Hotwire's SPA-like page accelerator [https://turbo.hotwired.dev]
gem "turbo-rails"

# Hotwire's modest JavaScript framework [https://stimulus.hotwired.dev]
gem "stimulus-rails"

# Bundle and process CSS [https://github.com/rails/cssbundling-rails]
gem "cssbundling-rails"

# Build JSON APIs with ease [https://github.com/rails/jbuilder]
gem "jbuilder"

# Use Redis adapter to run Action Cable in production
# gem "redis", "~> 4.0"

# Use Kredis to get higher-level data types in Redis [https://github.com/rails/kredis]
# gem "kredis"

# Use Active Model has_secure_password [https://guides.rubyonrails.org/active_model_basics.html#securepassword]
# gem "bcrypt", "~> 3.1.7"

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem "tzinfo-data", platforms: %i[ mingw mswin x64_mingw jruby ]

# Reduces boot times through caching; required in config/boot.rb
gem "bootsnap", require: false

# Use Sass to process CSS
gem "sassc-rails"

# Use Active Storage variants [https://guides.rubyonrails.org/active_storage_overview.html#transforming-images]
# gem "image_processing", "~> 1.2"

group :development, :test do
  # See https://guides.rubyonrails.org/debugging_rails_applications.html#debugging-with-the-debug-gem
  # gem "debug", platforms: %i[ mri mingw x64_mingw ]
  gem 'debase', '0.2.5.beta2'
  gem 'debase-ruby_core_source', '0.10.18'
  gem 'ruby-debug-ide', '>=0.2.5.beta2'
  gem 'rspec-rails', '~> 4.0.1'
  gem 'factory_bot_rails', '~> 6.2'
  gem 'faker', '~> 3.2'
  gem "capistrano", "~> 3.18"
  gem "capistrano-rvm", "~> 0.1.2"
  gem "capistrano-bundler", "~> 2.1"
  gem "capistrano-rails", "~> 1.6"
  gem "capistrano-git-copy", "~> 1.5"
  gem "capistrano-passenger", "~> 0.2.1"

  gem 'pry-rails'
  gem 'pry-nav'
end

group :development do
  # Use console on exceptions pages [https://github.com/rails/web-console]
  gem "web-console"

  # Add speed badges [https://github.com/MiniProfiler/rack-mini-profiler]
  # gem "rack-mini-profiler"

  # Speed up commands on slow machines / big apps [https://github.com/rails/spring]
  # gem "spring"
end

group :test do
  # Use system testing [https://guides.rubyonrails.org/testing.html#system-testing]
  gem "capybara"
  gem 'selenium-webdriver', '>= 4.0.0'
  gem "webdrivers"
  gem 'simplecov', require: false
  gem 'forgery'
  gem 'database_cleaner'
end

gem 'reline', '0.3.0'
gem 'request_store'
gem 'activerecord-session_store'
gem 'activerecord-import'
 
gem "matrix", "~> 0.4.2" # required by asset:precompile
gem 'dotenv-rails', '~> 2.6'

gem 'rubyzip', '>= 1.2.2'

gem 'nested_form'

gem 'paper_trail'
gem 'paranoia', '2.6.1'
gem 'devise'
gem 'rmagick'
gem 'deep_cloneable'

gem 'mime-types'
gem 'carrierwave'

gem 'thinreports'
gem 'thinreports-rails'

gem 'executable-hooks'
gem 'bundler-unload'
gem "exception_notification"

gem 'rails-controller-testing'

gem 'delayed_job_active_record'
gem 'daemons'

gem 'mini_magick', '~> 4.5', '>= 4.5.1'

gem 'recaptcha', require: 'recaptcha/rails'

gem 'kaminari'

gem 'ed25519'
gem 'bcrypt_pbkdf'

gem 'iconv'

gem 'java-properties'

gem 'moji'

gem 'concurrent-ruby', '1.3.4'
