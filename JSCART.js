$(document).ready(function(){
  $('.product button').on('click', function(){
    var button = $(this);
    var cart = $('#cart');
    var cartTotal = parseInt(cart.attr('data-totalitems'));
    var newCartTotal = cartTotal + 1;

    // Update the cart counter
    cart.attr('data-totalitems', newCartTotal);

    // Update the cart icon
    var cartIcon = cart.find('i');
    cartIcon.addClass('fa-cart-plus'); // Change the icon to indicate an item is added

    // Add animation class to indicate an item is added to the cart
    cartIcon.addClass('animate-cart');

    // Remove animation class after a short delay
    setTimeout(function(){
      cartIcon.removeClass('animate-cart');
    }, 1000);
  });
});
