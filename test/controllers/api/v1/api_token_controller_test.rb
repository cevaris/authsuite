require 'test_helper'

class Api::V1::ApiTokenControllerTest < ActionDispatch::IntegrationTest
  test 'can create api token' do
    test_email = 'test@mail.com'
    api_token_params = {api_token: {email: test_email}}
    post api_v1_tokens_path(format: :json), params: api_token_params
    assert_response :success

    response_body = response.parsed_body

    assert_not_nil response_body['token']
    assert_equal 'active', response_body['state']
    assert_equal test_email, response_body['email']
  end

  test 'can get api token' do
    @api_token = api_tokens(:one)

    get api_v1_token_path(format: :json), headers: {HEADER_API_TOKEN => @api_token.token}
    assert_response :success

    response_body = response.parsed_body

    assert_not_nil response_body['token']
    assert_equal @api_token.state, response_body['state']
    assert_equal @api_token.email, response_body['email']
  end

  test 'can handle missing invalid parameters' do
    post api_v1_tokens_path(format: :json), params: {api_token: {email: 'not valid email'}}
    assert_response :bad_request

    post api_v1_tokens_path(format: :json), params: {api_token: {email: ''}}
    assert_response :bad_request

    assert_raises(ActionController::ParameterMissing) do
      post api_v1_tokens_path(format: :json), params: {api_token: {}}
    end

    assert_raises(ActionController::ParameterMissing) do
      post api_v1_tokens_url(format: :json), params: {}
    end
  end
end