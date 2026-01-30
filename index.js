$("a").on("click", function (e) {
  e.preventDefault();
});

$(".bi-list").on("click", function () {
  $(".sideBar").addClass("showSideBar");
});

$(".bi-x-lg").on("click", function () {
  $(".sideBar").removeClass("showSideBar");
});
