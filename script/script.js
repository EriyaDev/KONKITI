
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector(".hamburger");
    const close = document.querySelector(".close");

    if (hamburger) {
        hamburger.addEventListener("click", showSidebar);
    }

    if (close) {
        close.addEventListener("click", hideSidebar);
    }

    function showSidebar(event) {
        event.preventDefault();
        let sidebar = document.querySelector(".sidebar");
        if (sidebar) {
            sidebar.style.display = 'flex';
        }
    }

    function hideSidebar(event) {
        event.preventDefault();
        let sidebar = document.querySelector(".sidebar");
        if (sidebar) {
            sidebar.style.display = "none";
        }
    }
});




