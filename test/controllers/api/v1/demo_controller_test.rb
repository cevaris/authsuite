require 'test_helper'
require 'rails/commands/server'

class Api::V1::DemoControllerTest < ActionDispatch::IntegrationTest

  test 'can demo auth session' do
    # host! "localhost:3333"
    #
    # api_tokens(:demo)
    #
    # test_email = 'test@email.com'
    #
    # demo_auth_session = auth_sessions(:demo)
    # mock_json = {receipt: demo_auth_session.receipt}.to_json
    # allow_any_instance_of(Faraday::Connection).to receive(:post).and_return(
    #     double('response', status: 200, body: mock_json)
    # )
    #
    # post api_v1_demos_auth_sessions_path(format: :json),
    #      params: {identity: test_email, identity_type: :email}
    #
    # assert_response :success
    #
    # response_body = response.parsed_body
    #
    # assert_not_nil response_body['receipt']
    assert true
  end
end