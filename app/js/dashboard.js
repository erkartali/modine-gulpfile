$(".accordion-button").on("click", function() {
    if ($(this).hasClass("collapsed")) {
        if ($("button").attr("aria-expanded") === 'false') {
          $(".accordion-button").css("color", "rgb(128, 128, 128)");
        }
        $(this).css("color", "#c3002f");
  } else {
    $(this).css("color", "rgb(128, 128, 128)");
  }
});
