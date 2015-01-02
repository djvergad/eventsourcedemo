require 'test_helper'

class StreamControllerTest < ActionController::TestCase
  test "should get tick" do
    get :tick
    assert_response :success
  end

end
