document.addEventListener("DOMContentLoaded", function () {

    // toggle mobile navigation
    document.querySelector("#navbarSideCollapse").addEventListener("click", function () {
        this.classList.toggle("open");
        this.setAttribute(
            "aria-expanded",
            this.getAttribute("aria-expanded") === "false" ? "true" : "false"
        );
        document.querySelector(".offcanvas-collapse").classList.toggle("open");
    });

    // Prevent closing from click inside dropdown
    document.querySelectorAll(".dropdown-menu").forEach(function (element) {
        element.addEventListener("click", function (e) {
            e.stopPropagation();
        });
    })

    // make it as accordion for smaller screens
    //if (window.innerWidth < 992) {

        // close all inner dropdowns when parent is closed
        document.querySelectorAll(".navbar .dropdown").forEach(function (everydropdown) {
            everydropdown.addEventListener("hidden.bs.dropdown", function () {
                // after dropdown is hidden, then find all submenus
                this.querySelectorAll(".submenu").forEach(function (everysubmenu) {
                    // hide every submenu as well
                    everysubmenu.classList.remove("show");
                    everysubmenu.previousElementSibling.classList.remove("show");
                    everysubmenu.previousElementSibling.setAttribute("aria-expanded", false);
                });
            })
        });

        document.querySelectorAll(".dropdown-menu a").forEach(function (element) {
            element.addEventListener("click", function (e) {

                let nextEl = this.nextElementSibling;
                if (nextEl && nextEl.classList.contains("submenu")) {
                    // prevent opening link if link needs to open dropdown
                    e.preventDefault();
                    if (nextEl.classList.contains("show")) {
                        nextEl.classList.remove("show");
                        this.classList.remove("show");
                        this.setAttribute("aria-expanded", false);
                    } else {
                        nextEl.classList.add("show");
                        this.classList.add("show");
                        this.setAttribute("aria-expanded", true);
                    }

                }
            });
        })
    //}
    // end if innerWidth

});