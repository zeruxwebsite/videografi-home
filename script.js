document.addEventListener("DOMContentLoaded", function() {
  const popupLinks = document.querySelectorAll(".popup-link");
  const closeButtons = document.querySelectorAll(".close-popup");

  popupLinks.forEach(function(link) {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const popupId = this.getAttribute("data-popup");
      const popup = document.getElementById(popupId);
      popup.classList.add("popup-show");
    });
  });

  closeButtons.forEach(function(button) {
    button.addEventListener("click", function(e) {
      e.preventDefault();
      const popup = this.closest(".popup");
      popup.classList.remove("popup-show");
    });
  });
});
