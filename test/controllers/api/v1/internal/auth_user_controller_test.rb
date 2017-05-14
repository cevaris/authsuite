require 'test_helper'

class Api::V1::Internal::AuthUserControllerTest < ActionDispatch::IntegrationTest
  test 'can create auth user' do
    test_email = 'test@email.com'

    post api_v1_internal_auth_users_path(format: :json),
         params: {email: test_email}

    assert_response :success

    response_body = response.parsed_body

    assert_not_nil response_body['slug']
    assert_nil response_body['auth_token']
    assert_equal test_email, response_body['email']
  end

  test 'get user' do
    auth_user = auth_users(:one)

    get api_v1_internal_auth_user_path(format: :json, slug: auth_user.slug),
        headers: {HEADER_AUTH_TOKEN => auth_user.auth_token}

    assert_response :success

    response_body = response.parsed_body

    assert_nil response_body['auth_token']
    assert_equal auth_user.slug, response_body['slug']
    assert_equal auth_user.email, response_body['email']
  end

  test 'fails get user if not authenticated' do
    auth_user = auth_users(:one)

    get api_v1_internal_auth_user_path(format: :json, slug: auth_user.slug)

    assert_response :unauthorized
  end

end