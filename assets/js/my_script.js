//$("document").ready(function() {
$("#nest-outer").click(function () {
  $("#nest-inner").toggle("medium");
});

$(".name").click(function () {
  $(".title").toggle();
});

$("#side-section-heading").click(function () {
  $("#side-menu").toggle();
});