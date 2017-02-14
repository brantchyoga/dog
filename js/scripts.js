$(function() {
  // $("button#dark").click(function() {
  //   $("body").removeClass();
  //   $("body").addClass("darkpage")
  // });
  // $("button#light").click(function() {
  //   $("body").removeClass("darkpage");
  // });
  $(".clickable").click(function() {
    $("p").toggleClass("click");
  });
});
