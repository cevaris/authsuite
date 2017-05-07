require 'test_helper'

class Api::V1::ApiKeyControllerTest < ActionDispatch::IntegrationTest
  test 'can create api key' do
    test_email = 'test@example.com'
    api_key_params = {email: test_email}
    post api_v1_keys_path(format: :json), params: api_key_params
    assert_response :success

    response_body = response.parsed_body

    assert_not_nil response_body['key']
    assert_equal 'active', response_body['state']
    assert_equal test_email, response_body['email']
  end

  test 'can get api key' do
    api_key = api_keys(:one)

    get api_v1_key_path(format: :json), headers: {HEADER_API_TOKEN => api_key.key}
    assert_response :success

    response_body = response.parsed_body

    assert_not_nil response_body['key']
    assert_equal api_key.state, response_body['state']
    assert_equal api_key.email, response_body['email']
  end

  test 'can handle missing invalid parameters' do
    post api_v1_keys_path(format: :json), params: {email: 'not valid email'}
    assert_response :bad_request

    post api_v1_keys_path(format: :json), params: {email: ''}
    assert_response :bad_request

    post api_v1_keys_url(format: :json), params: {}
    assert_response :bad_request
  end
end