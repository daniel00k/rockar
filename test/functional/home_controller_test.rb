require 'test_helper'

class HomeControllerTest < ActionController::TestCase
  test "should get inicio" do
    get :inicio
    assert_response :success
  end

  test "should get perfil" do
    get :perfil
    assert_response :success
  end

  test "should get muro" do
    get :muro
    assert_response :success
  end

  test "should get posts" do
    get :posts
    assert_response :success
  end

  test "should get comentarios" do
    get :comentarios
    assert_response :success
  end

end
