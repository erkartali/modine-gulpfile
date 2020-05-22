$(".button-1").on("click", function() {
  $(".button-2").removeClass("opened-color");
  $(".arrow-2").removeClass("opened-arrow");

  $(".button-3").removeClass("opened-color");
  $(".arrow-3").removeClass("opened-arrow");

  $(".button-4").removeClass("opened-color");
  $(".arrow-4").removeClass("opened-arrow");

  if ($(".button-1").hasClass("opened-color")) {
    $(".button-1").removeClass("opened-color");
    $(".arrow-1").removeClass("opened-arrow");
  } else {
    $(".button-1").addClass("opened-color");
    $(".arrow-1").addClass("opened-arrow");
  }
});

$(".button-2").on("click", function() {

  $(".button-1").removeClass("opened-color");
  $(".arrow-1").removeClass("opened-arrow");

  $(".button-3").removeClass("opened-color");
  $(".arrow-3").removeClass("opened-arrow");

  $(".button-4").removeClass("opened-color");
  $(".arrow-4").removeClass("opened-arrow");

  if ($(".button-2").hasClass("opened-color")) {
    $(".button-2").removeClass("opened-color");
    $(".arrow-2").removeClass("opened-arrow");
  } else {
    $(".button-2").addClass("opened-color");
    $(".arrow-2").addClass("opened-arrow");
  }
});

$(".button-3").on("click", function() {

  $(".button-1").removeClass("opened-color");
  $(".arrow-1").removeClass("opened-arrow");

  $(".button-2").removeClass("opened-color");
  $(".arrow-2").removeClass("opened-arrow");

  $(".button-4").removeClass("opened-color");
  $(".arrow-4").removeClass("opened-arrow");

  if ($(".button-3").hasClass("opened-color")) {
    $(".button-3").removeClass("opened-color");
    $(".arrow-3").removeClass("opened-arrow");
  } else {
    $(".button-3").addClass("opened-color");
    $(".arrow-3").addClass("opened-arrow");
  }
});

$(".button-4").on("click", function() {

$(".button-1").removeClass("opened-color");
  $(".arrow-1").removeClass("opened-arrow");

  $(".button-2").removeClass("opened-color");
  $(".arrow-2").removeClass("opened-arrow");

  $(".button-3").removeClass("opened-color");
  $(".arrow-3").removeClass("opened-arrow");

  if ($(".button-4").hasClass("opened-color")) {
    $(".button-4").removeClass("opened-color");
    $(".arrow-4").removeClass("opened-arrow");
  } else {
    $(".button-4").addClass("opened-color");
    $(".arrow-4").addClass("opened-arrow");
  }
});
