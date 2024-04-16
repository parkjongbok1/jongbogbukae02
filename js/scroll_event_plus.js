$(document).ready(function () {
  // 각 섹션의 변수
  const sec1_offset = $(".visual").offset().top;
  const sec2_offset = $(".produce").offset().top;
  const sec3_offset = $(".work").offset().top;
  // const sec5_offset = $(".sec05").offset().top;

  $(window).scroll(function () {
    const scrollTop = $(this).scrollTop();

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
    } else {
      $(".produce .pointImg").css({
        position: "",
      });
    }
    // sec2 end

    // sec3
    if (scrollTop >= sec3_offset + 1) {
      $(".work ").css({
        position: "fixed",
      });
    } else {
      $(".work").css({
        position: "",
      });
    }
    // sec3 end
  });
});
