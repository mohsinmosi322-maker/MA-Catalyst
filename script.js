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


    /* Default English */
    setLanguage(false);



    /* ================= MOBILE MENU ================= */

    var menuToggle = document.getElementById("menuToggle");
    var navLinks = document.getElementById("navLinks");


    if (menuToggle && navLinks) {

        /* Hamburger button */

        menuToggle.addEventListener("click", function (event) {

            event.preventDefault();
            event.stopPropagation();

            navLinks.classList.toggle("mobile-open");

        });


        /* All menu links */

        var navItems = navLinks.querySelectorAll("a");

        for (var k = 0; k < navItems.length; k++) {

            navItems[k].addEventListener("click", function () {

                /* Auto hide menu */
                navLinks.classList.remove("mobile-open");

            });

        }


        /* Click outside = close */

        document.addEventListener("click", function (event) {

            if (
                !navLinks.contains(event.target) &&
                !menuToggle.contains(event.target)
            ) {

                navLinks.classList.remove("mobile-open");

            }

        });


        /* ESC = close */

        document.addEventListener("keydown", function (event) {

            if (event.key === "Escape") {

                navLinks.classList.remove("mobile-open");

            }

        });


        /* Desktop = close mobile menu */

        window.addEventListener("resize", function () {

            if (window.innerWidth > 850) {

                navLinks.classList.remove("mobile-open");

            }

        });

    }

});
