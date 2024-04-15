$(document).ready(function () {
  // 각 섹션의 변수
  const sec1_offset = $(".sec01").offset().top;
  const sec2_offset = $(".produce").offset().top;
  // const sec3_offset = $(".sec03").offset().top;
  // const sec5_offset = $(".sec05").offset().top;

  let contents_scrillTop = 0;

  $(window).scroll(function () {
    const scrollTop = $(this).scrollTop();
    contents_scrillTop = scrollTop - sec2_offset;

    // sec2
    if (scrollTop > sec2_offset / 2) {
      $(".pd_item01").css({
        transform: "translateY(" + -contents_scrillTop * 0.2 + "px)",
      });
    }
    // sec2 end

    // // sec4_1
    // if (scrollTop > sec4_1_offset / 1.08) {
    //   $(".mo_item01").css({
    //     transform: "scale(1)",
    //     opacity: 1,
    //   });
    // } else {
    //   $(".mo_item01").css({
    //     transform: "scale(1.1)",
    //     opacity: 0,
    //   });
    // }

    // // sec4_2
    // if (scrollTop > sec4_2_offset / 1.08) {
    //   $(".mo_item02").css({
    //     transform: "scale(1)",
    //     opacity: 1,
    //   });
    // } else {
    //   $(".mo_item02").css({
    //     transform: "scale(1.1)",
    //     opacity: 0,
    //   });
    // }

    // // sec4_3
    // if (scrollTop > sec4_3_offset / 1.08) {
    //   $(".mo_item03").css({
    //     transform: "scale(1)",
    //     opacity: 1,
    //   });
    // } else {
    //   $(".mo_item03").css({
    //     transform: "scale(1.1)",
    //     opacity: 0,
    //   });
    // }

    // const windowWidth = $(this).width(); // 현재 창의 너비 가져오기

    // // 너비가 1400일 때만 해당 코드 적용
    // if (windowWidth === 1400) {
    //   // sec4_1
    //   if (scrollTop > sec4_1_offset / 2) {
    //     $(".mo_item01").css({
    //       transform: "scale(1)",
    //       opacity: 1,
    //     });
    //   } else {
    //     $(".mo_item01").css({
    //       transform: "scale(1.1)",
    //       opacity: 0,
    //     });
    //   }

    //   // sec4_2
    //   if (scrollTop > sec4_2_offset / 1.08) {
    //     $(".mo_item02").css({
    //       transform: "scale(1)",
    //       opacity: 1,
    //     });
    //   } else {
    //     $(".mo_item02").css({
    //       transform: "scale(1.1)",
    //       opacity: 0,
    //     });
    //   }

    //   // sec4_3
    //   if (scrollTop > sec4_3_offset / 1.08) {
    //     $(".mo_item03").css({
    //       transform: "scale(1)",
    //       opacity: 1,
    //     });
    //   } else {
    //     $(".mo_item03").css({
    //       transform: "scale(1.1)",
    //       opacity: 0,
    //     });
    //   }
    // }

    // // sec4 end

    // $(window).scroll(function () {
    //   const scrollTop = $(this).scrollTop(); // 현재 스크롤 위치

    // });
  });
});
