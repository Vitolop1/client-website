document.addEventListener("DOMContentLoaded", function () {
  var subscribeButtons = document.querySelectorAll(".subscribe-button");
  var addToCartButtons = document.querySelectorAll(".add-to-cart-button");
  var clearCartButton = document.getElementById("clear-cart-button");
  var processOrderButton = document.getElementById("process-order-button");
  var contactForm = document.getElementById("contact-form");

  subscribeButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      alert("Thank you for subscribing.");
    });
  });

  addToCartButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      alert("Item added to the cart.");
    });
  });

  if (clearCartButton) {
    clearCartButton.addEventListener("click", function () {
      alert("Cart cleared.");
    });
  }

  if (processOrderButton) {
    processOrderButton.addEventListener("click", function () {
      alert("Thank you for your order.");
    });
  }

  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      alert("Thank you for your message.");
      contactForm.reset();
    });
  }
});
