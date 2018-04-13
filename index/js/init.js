$(function () {
  var LOGIN_API = '/passport/signin';
  var USER_INFO_API = '/passport/user';
  var LOGOUT_API = '/passport/signout';
  var $loginBox = $('.j-login-box');
  var $userInfoBox = $('.j-user-info-box');
  var renderUserInfo = function (data) {
    $userInfoBox.find('.yonghu').html(data.username + '&nbsp;∨');
  };
  $loginBox.on('submit', 'form', function () {
    var param = $(this).serialize();
    var args = {};
    param.split('&').forEach(function (item) {
      var arr = item.split('=');
      args[arr[0]] = arr[1];
    });
    $.post(LOGIN_API, param, function (data) {
      if(!data.msg) {
         location.href = '/center';
      }
    });
    return false;
  });

  $('.xiala').on('click', '.j-logout', function () {
    $.getJSON(LOGOUT_API, function () {
      $('.xiala').hide();
      $loginBox.show();
      $userInfoBox.hide();
    });
  });
  var checkLogin = function () {
    $.getJSON(USER_INFO_API, function (data) {
      if (data.msg) {
        $loginBox.show();
        $userInfoBox.hide();
      } else {
        renderUserInfo(data.data);
        $loginBox.hide();
        $userInfoBox.show();
      }
    })
  };

  checkLogin();
});
