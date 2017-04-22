class WelcomeController < ApplicationController
  def my_api
    render :json => {token: 'awesomeToken', created_at: Time.now.utc}
  end
end
