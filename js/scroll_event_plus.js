$(document).ready(function () {
  // 각 섹션의 변수
  const sec1_offset = $(".visual").offset().top;
  const sec2_offset = $(".produce").offset().top;
  const sec2_1_offset = $(".produce_air").offset().top;

  let contents_scrillTop = 0;

  $(window).scroll(function () {
    const scrollTop = $(this).scrollTop();
    contents_scrillTop = scrollTop - sec2_1_offset;

    if (scrollTop >= sec1_offset + 2) {
      $(".visual ").css({
        position: "fixed",
        transition: 0.3 + "s",
        filter: "blur(10px)",
      });
    } else {
      $(".visual").css({
        position: "",
        filter: "blur(0)",
      });
    }

    // sec2
    if (scrollTop >= sec2_offset / 2) {
      $(".visual .title").css({
        opacity: 0,
      });
    } else {
      $(".visual .title").css({
        opacity: 1,
      });
    }

    if (scrollTop >= sec2_offset / 1) {
      $(".produce .pointImg").css({
        position: "fixed",
      });
      $(".produce_air").css({
        position: "fixed",
      });
      $(".produce_air img").css({
        opacity: 1,
      });
      $(".produce_air img").css({
        transform:
          "translateY(" +
          -contents_scrillTop * 0.15 +
          "px)translateX(" +
          contents_scrillTop * 0.35 +
          "px)",
      });
    } else {
      $(".produce .pointImg").css({
        position: "",
      });
      $(".produce_air").css({
        position: "",
      });
      $(".produce_air img").css({
        opacity: 0,
      });
    }
    // sec2 end
  });
});
