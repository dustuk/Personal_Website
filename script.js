document.addEventListener("scroll", function() {
    var body = document.body;
    var scrolled = window.scrollY > 0;
  
    if (scrolled) {
      body.classList.add("scrolled-down");
      body.classList.remove("scrolled-up");
    } else {
      body.classList.remove("scrolled-down");
      body.classList.add("scrolled-up");
    }
});  