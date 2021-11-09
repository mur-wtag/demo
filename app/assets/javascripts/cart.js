$(function () {
  var $currentShop = $('.current-shop');
  var currentShopID = $currentShop.data("current-shop");

  $(document).on("click", ".add-to-cart", function (e) {
    e.stopPropagation();

    var productID = $(this).data("product-id");

    $.ajax({
      url: '/carts/add_line_item',
      method: "POST",
      data: { shop_id: currentShopID, product_id: productID, quantity: $('.line-item-quantity.new').val() || 1 }
    })
  });

	$(document).on('change', 'input.line-item-quantity:not(.new)', function (e) {
		var lineItemId = $(this).closest('tr').data("line-item-id");

		$.ajax({
			url: '/carts/update_line_item',
			method: "POST",
			data: { line_item_id: lineItemId, quantity: $(this).val() || 1 }
		})
	});

	$(document).on("click", ".remove-line-item", function (e) {
		e.stopPropagation();

		var lineItemId = $(this).closest('tr').data("line-item-id");

		$.ajax({
			url: '/carts/remove_line_item',
			method: "DELETE",
			data: { line_item_id: lineItemId }
		})
	});

	$(document).on('change', '.order-input', function (e) {
		calculateCashChange();
	});

	recalculateCartSerial();
	recalculateGrandTotal();
	calculateCashChange();
	toggleOrderCompletion();
});

function recalculateCartSerial() {
	var i = 1;

	$(".serial").each(function() {
		$(this).text(i++);
	});
}

function recalculateGrandTotal() {
	var total = 0;

	$(".line-item-total").each(function() {
		total += parseFloat($(this).text());
	});

	$('.final-price').text(total.toFixed(2));
}

function calculateCashChange() {
	let cashTotal = parseFloat($("input[name=\"order[cash_amount]\"]").val());
	let cardTotal = parseFloat($("input[name=\"order[card_amount]\"]").val());
	let grandTotal = parseFloat($('.final-price').text());
	let leftAmount = grandTotal - cashTotal - cardTotal;

	if (!leftAmount) {
		leftAmount = 0
	}

	$('.final-changes').text(leftAmount.toFixed(2));
	toggleOrderCompletion();
}

function toggleOrderCompletion() {
	let finalChange = parseFloat($('.final-changes').text()) || 0;
	const completeBtn = $(".complete-order input");
	const cartId = $("#order_cart_id").val();

	if (finalChange > 0 || !cartId) {
		completeBtn.addClass('disabled');
	} else {
		completeBtn.removeClass('disabled');
	}
}