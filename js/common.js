$(document).ready(function () {
  let targetElement = $(".custom-container");

  $("#intro")
    .delay(6000)
    .fadeOut(1000, function () {
      // body 클래스를 제거하고, 대상 요소에 클래스를 추가합니다.
      targetElement.removeClass("before-load");
    });

  function setProgress(progress) {
    // 프로그레스 바 엘리먼트를 선택합니다.
    const progressBar = document.querySelector(".progress");
    // 프로그레스 바의 너비를 전달된 퍼센트 값으로 설정합니다.
    progressBar.style.width = `${progress}%`;
  }

  // 0부터 100%까지의 프로그레스를 애니메이션으로 표시합니다.
  function animateProgressBar() {
    let progress = 0;
    // 일정 간격으로 반복하여 애니메이션을 실행합니다.
    const interval = setInterval(() => {
      // 프로그레스가 100%에 도달하면 애니메이션을 멈춥니다.
      if (progress >= 100) {
        clearInterval(interval);
      } else {
        // 프로그레스를 1%씩 증가시킵니다.
        progress++;
        // 프로그레스를 설정하는 함수를 호출하여 화면에 반영합니다.
        setProgress(progress);
      }
    }, 10); // 애니메이션 간격을 조절하여 부드러운 애니메이션을 제어합니다.
  }

  // 프로그레스 바 애니메이션을 시작합니다.
  animateProgressBar();

  // 로딩을 처리할 함수
  function startLoading() {
    let span = document.querySelector(".counter span");
    let counter = 0;
    let interval = setInterval(function () {
      counter++;
      span.style.counter = counter + "%";
      span.textContent = counter + "%";
      if (counter >= 100) {
        clearInterval(interval);
      }
    }, 55); // 로딩 속도를 조절할 수 있습니다.
  }

  // 페이지 로딩 후 자동으로 로딩 시작
  window.addEventListener("load", function () {
    startLoading();
  });

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

  // side_bar
  $(".family").click(function () {
    $(".family-list, .fa-caret-up").toggleClass("active");
  });
});

$(".side_bar").on("click", function () {
  if ($(this).toggleClass(".side_bar")) {
    $(".meun-bar bar_bg").get(0).play();
  } else {
    $(".meun-bar bar_bg").get(0).pause();
  }
});

window.addEventListener("scroll", function () {
  let scrollTop = window.scrollY; // 스크롤된 거리
  let scrollHeight = document.body.scrollHeight - window.innerHeight; // 전체 스크롤 가능한 높이
  let progress = (scrollTop / scrollHeight) * 100; // 스크롤된 비율을 퍼센트로 계산

  // 랜덤한 색상 생성
  let startColor = getRandomColor();
  let endColor = getRandomColor();

  // 그라데이션 스타일 생성
  let gradientStyle = `linear-gradient(to right, ${startColor}, ${endColor})`;

  // 프로그레스 바에 그라데이션 스타일 적용
  let heightBar = document.getElementById("heightBar");
  heightBar.style.background = gradientStyle;
  heightBar.style.width = progress + "%";
});

function getRandomColor() {
  // 랜덤한 RGB 값 생성
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}
