document.addEventListener("DOMContentLoaded", function () {

    /* ================= LANGUAGE ================= */

    var languageBtn = document.getElementById("languageBtn");

    var isUrdu = false;


    function setLanguage(urdu) {

        isUrdu = urdu;

        var english = document.querySelectorAll(".en");
        var urdu = document.querySelectorAll(".ur");


        if (isUrdu) {

            for (var i = 0; i < english.length; i++) {
                english[i].style.display = "none";
            }

            for (var j = 0; j < urdu.length; j++) {
                urdu[j].style.display = "";
            }

            document.documentElement.lang = "ur";

            if (languageBtn) {
                languageBtn.textContent = "English";
            }

        } else {

            for (var i = 0; i < english.length; i++) {
                english[i].style.display = "";
            }

            for (var j = 0; j < urdu.length; j++) {
                urdu[j].style.display = "none";
            }

            document.documentElement.lang = "en";

            if (languageBtn) {
                languageBtn.textContent = "اردو";
            }
        }
    }


    if (languageBtn) {

        languageBtn.addEventListener("click", function () {

            setLanguage(!isUrdu);

        });

    }


    /* English is default */

    setLanguage(false);



    /* ================= MOBILE MENU ================= */

    var menuToggle =
        document.getElementById("menuToggle");

    var navLinks =
        document.getElementById("navLinks");


    if (menuToggle && navLinks) {


        /* Open / close menu */

        menuToggle.addEventListener("click", function (event) {

            event.stopPropagation();

            navLinks.classList.toggle("mobile-open");

        });


        /* Close menu after clicking a link */

        var navItems =
            navLinks.querySelectorAll("a");


        for (var k = 0; k < navItems.length; k++) {

            navItems[k].addEventListener("click", function () {

                navLinks.classList.remove("mobile-open");

            });

        }


        /* Close menu when clicking outside */

        document.addEventListener("click", function (event) {

            if (
                !navLinks.contains(event.target) &&
                !menuToggle.contains(event.target)
            ) {

                navLinks.classList.remove("mobile-open");

            }

        });


        /* Close menu with Escape */

        document.addEventListener("keydown", function (event) {

            if (event.key === "Escape") {

                navLinks.classList.remove("mobile-open");

            }

        });


        /* Close menu when returning to desktop */

        window.addEventListener("resize", function () {

            if (window.innerWidth > 850) {

                navLinks.classList.remove("mobile-open");

            }

        });

    }

});
