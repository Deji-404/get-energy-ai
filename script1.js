document.addEventListener("DOMContentLoaded", function() {
    // Scroll to top functionality
    let scrollToTopButton = document.getElementById('scrollToTop');

    window.onscroll = function() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            scrollToTopButton.style.display = "block";
        } else {
            scrollToTopButton.style.display = "none";
        }
    };

    scrollToTopButton.onclick = function() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For other browsers
    };

    // Dynamic year in the footer
    let currentDate = new Date();
    document.getElementById('currentYear').textContent = currentDate.getFullYear();
});

function showFlashMessage() {
    let flash = document.getElementById("flashMessage");
    flash.className = "flash-show";
    setTimeout(function(){
        flash.className = "flash-hide";
    }, 3000);  // The message will disappear after 3 seconds
}

document.getElementById("themeSwitcher").addEventListener("click", function() {
    let body = document.body;
    if (body.classList.contains("dark-theme")) {
        body.classList.remove("dark-theme");
    } else {
        body.classList.add("dark-theme");
    }
});