class Api::V1::WelcomeController < ApplicationController

  def show
    render :json => {token: 'awesomeToken', created_at: Time.now.utc}
  end

end
