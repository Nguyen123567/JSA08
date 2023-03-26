$(document).ready(function() {
	var productItem = [{
			productName: "FinePix Pro2 3D Camera",
			price: "1800.00",
			photo: "camera.jpg"
		},
		{
			productName: "EXP Portable Hard Drive",
			price: "800.00",
			photo: "external-hard-drive.jpg"
		},
		{
			productName: "Luxury Ultra thin Wrist Watch",
			price: "500.00",
			photo: "laptop.jpg"
		},
		{
			productName: "XP 1155 Intel Core Laptop",
			price: "1000.00",
			photo: "watch.jpg"
		}];
	showProductGallery(productItem);
});

function showProductGallery(product) {
	
	var productHTML = "";
	product.forEach(function(item) {
		productHTML += '<div class="product-item">'+
					
					'<div class="productname">' + item.productName + '</div>'+
					'<div class="price">$<span>' + item.price + '</span></div>'+
					'<div class="cart-action">'+
						'<input type="text" class="product-quantity" name="quantity" value="1" size="2" />'+
						'<input type="submit" value="Add to Cart" class="add-to-cart" onClick="addToCart(this)" />'+
					'</div>'+
				'</div>';
				"<tr>";
		
	});
	$('#product-item-container').html(productHTML);
}
function addToCart(element) {
	var productParent = $(element).closest('div.product-item');

	var price = $(productParent).find('.price span').text();
	var productName = $(productParent).find('.productname').text();
	var quantity = $(productParent).find('.product-quantity').val();

	var cartItem = {
		productName: productName,
		price: price,
		quantity: quantity
	};
	var cartItemJSON = JSON.stringify(cartItem);

	var cartArray = new Array();
	
	if (sessionStorage.getItem('shopping-cart')) {
		cartArray = JSON.parse(sessionStorage.getItem('shopping-cart'));
	}
	cartArray.push(cartItemJSON);

	var cartJSON = JSON.stringify(cartArray);
	sessionStorage.setItem('shopping-cart', cartJSON);
	showCartTable();
}