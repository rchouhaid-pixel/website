document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
  }

  var form = document.querySelector(".contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var btn = form.querySelector("button[type='submit']");
      var original = btn.textContent;
      btn.textContent = "Message envoyé ✓";
      form.reset();
      setTimeout(function () {
        btn.textContent = original;
      }, 3000);
    });
  }

  var year = document.querySelector("#year");
  if (year) year.textContent = new Date().getFullYear();
});
