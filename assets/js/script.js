var modal = $(".modal");
var contact = $(".modal__contact");

$(".modal__contact-click").on("click", function () {
  modal.addClass("active");
});
$(".modal__close, .btn__close").on("click", function () {
  modal.removeClass("active");
});

modal.click(function (e) {
  if (e.target !== this) return;
  modal.removeClass("active");
});


function disableScroll() {
  // Get the current page scroll position
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  (scrollLeft = window.pageXOffset || document.documentElement.scrollLeft),
    // if any scroll is attempted, set this to the previous value
    (window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    });
}

function enableScroll() {
  window.onscroll = function () {};
}
// $(document).on("click", function (e) {
//   console.log(e.target);
// });
