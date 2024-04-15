$(document).ready(function () {
  // 스크롤 이벤트
  function scrollAniEvent() {
    $(".ani, .ani_L, .ani_R, .ani_T, .ani_O, .ani_S").each(function () {
      const windHeight = $(window).innerHeight();
      const scrollTop = $(window).scrollTop();
      const viewportTop = scrollTop + windHeight;

      const elementOffset = $(this).offset().top;
      const elementOffsetBtm = elementOffset + $(this).outerHeight() / 2.8;

      if (viewportTop > elementOffsetBtm) {
        $(this).addClass("aniIn");
        $(this).addClass("aniIn_T");
        $(this).addClass("aniIn_L");
        $(this).addClass("aniIn_R");
        $(this).addClass("aniIn_O");
        $(this).addClass("aniIn_S");
      } else {
        $(this).removeClass("aniIn");
        $(this).removeClass("aniIn_T");
        $(this).removeClass("aniIn_L");
        $(this).removeClass("aniIn_R");
        $(this).removeClass("aniIn_O");
        $(this).removeClass("aniIn_S");
      }
    });
  }

  scrollAniEvent();

  $(window).on("scroll", function () {
    scrollAniEvent();
    // didScroll = true;
  });
});
