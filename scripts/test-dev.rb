#!/usr/bin/env ruby
require 'faraday'
require 'json'

DEMO_API_TOKEN = ENV['DEMO_API_TOKEN']

API_URL = 'http://localhost:3000'
IDENTITY = 'acardenas89@gmail.com'


class MyAuthSession
  attr_accessor :receipt, :state

  def initialize(params = {})
    @receipt = params.fetch(:receipt)
    @state = params.fetch(:state)
  end

  def self.create
    conn = Faraday.new(:url => API_URL)
    response = conn.post do |req|
      req.url '/api/v1/sessions.json'
      req.headers['Content-Type'] = 'application/json'
      req.headers['X-AUTH-API-TOKEN'] = DEMO_API_TOKEN
      req.body = {identity: IDENTITY, identity_type: 'email'}.to_json
    end

    if response.status == 200
      parsed_body = JSON.parse(response.body)
      MyAuthSession.new({receipt: parsed_body['receipt'], state: parsed_body['state']})
    else
      raise "failed api call: #{response.status} #{response.body}"
    end

  end

  def refresh!
    conn = Faraday.new(:url => API_URL)
    response = conn.get do |req|
      req.url "/api/v1/sessions/receipts/#{@receipt}/status.json"
      req.headers['Content-Type'] = 'application/json'
      req.headers['X-AUTH-API-TOKEN'] = DEMO_API_TOKEN
    end

    if response.status == 200
      parsed_body = JSON.parse(response.body)
      @state = parsed_body['state']
    else
      raise "failed api call: #{response.status} #{response.body}"
    end

  end
end

puts 'stating e2e test...'
auth_session = MyAuthSession.create

while true do
  puts "Auth Session receipt: #{auth_session.receipt} #{auth_session.state}"

  if auth_session.state != 'sent'
    break
  end

  auth_session.refresh!

  sleep 2
end

puts 'all done'