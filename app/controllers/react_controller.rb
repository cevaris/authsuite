class ReactController < ApplicationController

  def index
    render file: 'public/index', layout: false
  end

  def show
    render :json => {token: 'awesomeToken', created_at: Time.now.utc}
  end

end
