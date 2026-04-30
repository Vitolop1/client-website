document.addEventListener("DOMContentLoaded", function () {
  var subscribeButtons = document.querySelectorAll(".subscribe-button");
  var addToCartButtons = document.querySelectorAll(".add-to-cart-button");
  var viewCartButton = document.getElementById("view-cart-button");
  var modalClearCartButton = document.getElementById("modal-clear-cart-button");
  var modalProcessOrderButton = document.getElementById("modal-process-order-button");
  var closeCartButton = document.getElementById("close-cart-button");
  var cartModal = document.getElementById("cart-modal");
  var cartItems = document.getElementById("cart-items");
  var cartTotal = document.getElementById("cart-total");
  var contactForm = document.getElementById("contact-form");
  var cartStorageKey = "blueRidgeCart";
  var customOrdersStorageKey = "blueRidgeCustomOrders";

  function getStoredList(storage, key) {
    try {
      return JSON.parse(storage.getItem(key)) || [];
    } catch (error) {
      storage.removeItem(key);
      return [];
    }
  }

  function getCartItems() {
    return getStoredList(sessionStorage, cartStorageKey);
  }

  function saveCartItems(items) {
    sessionStorage.setItem(cartStorageKey, JSON.stringify(items));
  }

  function clearCartItems() {
    sessionStorage.removeItem(cartStorageKey);
  }

  function renderCart() {
    var items = getCartItems();

    if (!cartItems || !cartTotal) {
      return;
    }

    if (items.length === 0) {
      cartItems.innerHTML = "<p>Your shopping cart is empty.</p>";
      cartTotal.textContent = "";
      return;
    }

    var total = items.reduce(function (sum, item) {
      return sum + Number(item.price);
    }, 0);

    cartItems.innerHTML = "<ol class=\"cart-list\">" + items.map(function (item) {
      return "<li>" + item.name + " - $" + Number(item.price).toFixed(2) + "</li>";
    }).join("") + "</ol>";
    cartTotal.textContent = "Cart total: $" + total.toFixed(2);
  }

  function openCartModal() {
    if (cartModal) {
      renderCart();
      cartModal.classList.add("show");
      cartModal.setAttribute("aria-hidden", "false");
    }
  }

  function closeCartModal() {
    if (cartModal) {
      cartModal.classList.remove("show");
      cartModal.setAttribute("aria-hidden", "true");
    }
  }

  subscribeButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      alert("Thank you for subscribing.");
    });
  });

  addToCartButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var items = getCartItems();
      var product = {
        name: button.dataset.name,
        price: button.dataset.price
      };

      items.push(product);
      saveCartItems(items);
      alert("Item added to the cart.");
    });
  });

  if (viewCartButton) {
    viewCartButton.addEventListener("click", function () {
      openCartModal();
    });
  }

  if (modalClearCartButton) {
    modalClearCartButton.addEventListener("click", function () {
      clearCartItems();
      renderCart();
      alert("Cart cleared.");
    });
  }

  if (modalProcessOrderButton) {
    modalProcessOrderButton.addEventListener("click", function () {
      clearCartItems();
      renderCart();
      alert("Thank you for your order.");
    });
  }

  if (closeCartButton) {
    closeCartButton.addEventListener("click", function () {
      closeCartModal();
    });
  }

  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      var savedOrders = getStoredList(localStorage, customOrdersStorageKey);
      var customOrder = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
        submittedAt: new Date().toLocaleString()
      };

      event.preventDefault();
      savedOrders.push(customOrder);
      localStorage.setItem(customOrdersStorageKey, JSON.stringify(savedOrders));
      alert("Thank you for your message.");
      contactForm.reset();
    });
  }
});
