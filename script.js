document.getElementById("exploreBtn").addEventListener("click", function() {
    window.scrollTo({
      top: document.getElementById("services").offsetTop,
      behavior: "smooth"
    });
});