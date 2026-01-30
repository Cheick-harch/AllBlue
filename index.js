$("a, button").on("click", function(e) {
    e.preventDefault();
});

$(".bi-list").on("click", function(e){
    $(".sidebar").toggleClass("showSideBar");
});

$(".close").on("click", function(e){
    $(".sidebar").removeClass("showSideBar");
});
