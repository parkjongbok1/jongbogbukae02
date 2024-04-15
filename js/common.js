$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $(".header").addClass("active");
    } else {
      $(".header").removeClass("active");
    }
  });

  // side_bar
  $(".side_bar").click(function () {
    $(".bar_btn, .meun-bar, .barTt").toggleClass("active");
  });
});
