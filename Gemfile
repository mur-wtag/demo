# frozen_string_literal: true

source 'https://rubygems.org'

ruby '3.0.1'

# Core
gem 'rack'
gem 'rails', '~> 6.1.3', '>= 6.1.3.2'
gem 'bootsnap', require: false
gem 'audited', '~> 5.0'

# db
gem 'pg'
gem 'pghero'
gem 'pg_query'
gem 'pg_search'
gem 'acts_as_tenant'

# assets
gem 'webpacker', '~> 4.0.7'
gem 'jquery-rails'
gem 'jquery-ui-rails'
gem 'bootstrap', '~> 4.3.1'
gem 'mini_racer'
gem 'simple_form'
gem 'country_select'
gem 'selectize-rails'
gem 'shrine'
gem 'aws-sdk-s3'
gem 'dropzonejs-rails'

# emails
gem 'inky-rb', require: 'inky'
gem 'premailer-rails'

gem 'jbuilder'
gem 'devise'
gem 'devise-async'
gem 'cancancan'

group :assets do
  gem 'sass-rails', '~> 5.0'
  gem 'uglifier', '>= 1.3.0'
  gem 'autoprefixer-rails'
end

group :development do
  gem 'listen'
  gem 'capistrano', '~> 3'
  gem 'capistrano-bundler'
  gem 'capistrano-rails'
  gem 'capistrano-passenger'
  gem 'capistrano-rbenv'
  gem 'rubocop'
  gem 'i18n-tasks'
  gem 'faker', git: 'https://github.com/faker-ruby/faker.git', branch: 'master'
  gem 'puma'
end

group :development, :test do
  gem 'byebug'
end

group :production do
  gem 'elastic-apm'
end
