$(function () {
  var $search = $("#search");
	var currentShopId = $search.closest(".search-form").data("current-shop-id");
  $(document).on('keyup', "#search", function() {
    $(this).addClass("opened");

    var search_term = " ";
    if ($search.val() !== "" ) {
      search_term = $("#search").val();
    }

    $.ajax({type: 'GET', url: '/search?shop_id=' + currentShopId + '&q=' + search_term });
  }).on("focusout", function (e) {
    // if ($(e.relatedTarget).hasClass("search-result")) {
    //   return;
    // }
    //
    // $(this).removeClass("opened");
    // toggleHeaderZIndex(1);
    // $(".search-form .search-results").addClass("d-none");
  });
});