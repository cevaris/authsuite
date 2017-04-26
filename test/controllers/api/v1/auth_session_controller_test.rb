require 'test_helper'

class Api::V1::AuthSessionControllerTest < ActionDispatch::IntegrationTest
  test 'can create auth session' do
    api_token = api_tokens(:one)
    test_email = 'test@email.com'

    post api_v1_sessions_path(format: :json),
         params: {auth_session: {identity: test_email, identity_type: :email}},
         headers: {HEADER_API_TOKEN => api_token.token}

    assert_response :success

    response_body = response.parsed_body

    assert_not_nil response_body['receipt']
    assert_equal test_email, response_body['identity']
    assert_equal 'email', response_body['identity_type']
    assert_equal 'sent', response_body['state']
  end

  test 'can accept auth session' do
    auth_session = auth_sessions(:one)

    assert_auth_session_state(auth_session, 'sent')

    post api_v1_session_accept_path(format: :json, token: auth_session.token)
    assert_response :ok

    assert_auth_session_state(auth_session, 'accepted')
  end

  test 'can cancel auth session' do
    auth_session = auth_sessions(:one)

    assert_auth_session_state(auth_session, 'sent')

    post api_v1_session_reject_path(format: :json, token: auth_session.token)
    assert_response :ok

    assert_auth_session_state(auth_session, 'rejected')
  end


  def assert_auth_session_state(auth_session, expected_state)
    get api_v1_session_status_path(format: :json, receipt: auth_session.receipt),
        headers: {HEADER_API_TOKEN => auth_session.api_token.token}
    assert_response :success
    assert_equal expected_state, response.parsed_body['state']
  end
end