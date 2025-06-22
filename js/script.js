// Function to show toast notification
function showToast(message) {
  // Create toast container if it doesn't exist
  let toastContainer = document.querySelector(".toast-container");
  if (!toastContainer) {
    toastContainer = document.createElement("div");
    toastContainer.className =
      "toast-container position-fixed bottom-0 end-0 p-3";
    document.body.appendChild(toastContainer);
  }

  // Create toast element
  const toastEl = document.createElement("div");
  toastEl.className = "toast align-items-center text-white bg-success border-0";
  toastEl.setAttribute("role", "alert");
  toastEl.setAttribute("aria-live", "assertive");
  toastEl.setAttribute("aria-atomic", "true");

  toastEl.innerHTML = `
        <div class="d-flex">
            <div class="toast-body">
                ${message}
            </div>
            <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
    `;

  toastContainer.appendChild(toastEl);

  // Initialize and show the toast
  const toast = new bootstrap.Toast(toastEl, {
    autohide: true,
    delay: 3000,
  });
  toast.show();

  // Remove toast after it's hidden
  toastEl.addEventListener("hidden.bs.toast", function () {
    toastEl.remove();
  });
}

// Function to update cart count
function updateCartCount() {
  // Get cart icon/element
  const cartCountElement = document.querySelector(".cart-count");
  if (cartCountElement) {
    // Get current count
    let currentCount = parseInt(cartCountElement.textContent || "0");
    // Increment count
    currentCount++;
    // Update display
    cartCountElement.textContent = currentCount;
  }
}
