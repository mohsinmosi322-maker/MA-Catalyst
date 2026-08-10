document.addEventListener("DOMContentLoaded", function () {

    /* ================= LANGUAGE TOGGLE ================= */

    var languageBtn = document.getElementById("languageBtn");
    var isUrdu = false;

    function setLanguage(urduMode) {

        isUrdu = urduMode;

        var englishItems = document.querySelectorAll(".en");
        var urduItems = document.querySelectorAll(".ur");

        if (isUrdu) {

            /* English hide */
            for (var i = 0; i < englishItems.length; i++) {
                englishItems[i].style.display = "none";
            }

            /* Urdu show */
            for (var j = 0; j < urduItems.length; j++) {
                urduItems[j].style.display = "";
            }

            document.documentElement.lang = "ur";

            if (languageBtn) {
                languageBtn.textContent = "English";
            }

        } else {

            /* English show */
            for (var i = 0; i < englishItems.length; i++) {
                englishItems[i].style.display = "";
            }

            /* Urdu hide */
            for (var j = 0; j < urduItems.length; j++) {
                urduItems[j].style.display = "none";
            }

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

        /* Hamburger open / close */

        menuToggle.addEventListener("click", function (event) {

            event.preventDefault();
            event.stopPropagation();

            navLinks.classList.toggle("mobile-open");

        });


        /* ================= MENU ITEMS ================= */

        var navItems = navLinks.querySelectorAll("a");

        for (var k = 0; k < navItems.length; k++) {

            navItems[k].addEventListener("click", function () {

                /* Immediately close hamburger */
                navLinks.classList.remove("mobile-open");

            });

        }


        /* ================= OUTSIDE CLICK ================= */

        document.addEventListener("click", function (event) {

            if (
                !navLinks.contains(event.target) &&
                !menuToggle.contains(event.target)
            ) {

                navLinks.classList.remove("mobile-open");

            }

        });


        /* ================= ESC KEY ================= */

        document.addEventListener("keydown", function (event) {

            if (event.key === "Escape") {

                navLinks.classList.remove("mobile-open");

            }

        });


        /* ================= DESKTOP ================= */

        window.addEventListener("resize", function () {

            if (window.innerWidth > 850) {

                navLinks.classList.remove("mobile-open");

            }

        });

    }

});
