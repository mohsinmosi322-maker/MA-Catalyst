document.addEventListener("DOMContentLoaded", function () {

    /* ================= LANGUAGE ================= */

    var languageBtn = document.getElementById("languageBtn");
    var isUrdu = false;

    function setLanguage(urduMode) {

        isUrdu = urduMode;

        if (urduMode) {

            document.documentElement.lang = "ur";

            if (languageBtn) {
                languageBtn.textContent = "English";
            }

        } else {

            document.documentElement.lang = "en";

            if (languageBtn) {
                languageBtn.textContent = "اردو";
            }
        }
    }


    if (languageBtn) {

        languageBtn.addEventListener("click", function (event) {

            event.preventDefault();
            event.stopPropagation();

            setLanguage(!isUrdu);

        });

    }


    /* Default = English */

    setLanguage(false);



    /* ================= MOBILE MENU ================= */

    var menuToggle = document.getElementById("menuToggle");
    var navLinks = document.getElementById("navLinks");


    if (menuToggle && navLinks) {

        /* Hamburger */

        menuToggle.addEventListener("click", function (event) {

            event.preventDefault();
            event.stopPropagation();

            navLinks.classList.toggle("mobile-open");

        });


        /* Menu links */

        var navItems = navLinks.querySelectorAll("a");

        for (var i = 0; i < navItems.length; i++) {

            navItems[i].addEventListener("click", function () {

                navLinks.classList.remove("mobile-open");

            });

        }


        /* Click outside */

        document.addEventListener("click", function (event) {

            if (
                !navLinks.contains(event.target) &&
                !menuToggle.contains(event.target)
            ) {

                navLinks.classList.remove("mobile-open");

            }

        });


        /* ESC */

        document.addEventListener("keydown", function (event) {

            if (event.key === "Escape") {

                navLinks.classList.remove("mobile-open");

            }

        });


        /* Resize */

        window.addEventListener("resize", function () {

            if (window.innerWidth > 850) {

                navLinks.classList.remove("mobile-open");

            }

        });

    }



  /* ================= SMOOTH SCROLL ================= */

var scrollLinks = document.querySelectorAll('a[href^="#"]');

for (var s = 0; s < scrollLinks.length; s++) {

    scrollLinks[s].addEventListener("click", function (event) {

        var targetId = this.getAttribute("href");

        if (!targetId || targetId === "#") {
            return;
        }

        var target = document.querySelector(targetId);

        if (!target) {
            return;
        }

        event.preventDefault();

        /* Close mobile menu */
        if (navLinks) {
            navLinks.classList.remove("mobile-open");
        }

        /* Let browser perform native smooth scrolling */
        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });
}
});
