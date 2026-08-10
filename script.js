document.addEventListener("DOMContentLoaded",
function () {

    var languageBtn = document.getElementById("languageBtn");

    var isUrdu = false;


    function setLanguage(urdu) {

        isUrdu = urdu;

        var english = document.querySelectorAll(".en");
        var urdu = document.querySelectorAll(".ur");


        if (isUrdu) {

            // Hide English
            for (var i = 0; i < english.length; i++) {
                english[i].style.display = "none";
            }

            // Show Urdu
            for (var j = 0; j < urdu.length; j++) {
                urdu[j].style.display = "block";
            }

            document.documentElement.lang = "ur";

            languageBtn.textContent = "English";

        } else {

            // Show English
            for (var i = 0; i < english.length; i++) {
                english[i].style.display = "block";
            }

            // Hide Urdu
            for (var j = 0; j < urdu.length; j++) {
                urdu[j].style.display = "none";
            }

            document.documentElement.lang = "en";

            languageBtn.textContent = "اردو";
        }
    }
    

    languageBtn.addEventListener("click", function () {

        setLanguage(!isUrdu);

    });


    // Default = English
    setLanguage(false);
    

})
/* ================= MOBILE MENU ================= */

var menuToggle = document.getElementById("menuToggle");
var navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

        navLinks.classList.toggle("mobile-open");

    });


    var navItems = navLinks.querySelectorAll("a");

    for (var i = 0; i < navItems.length; i++) {

        navItems[i].addEventListener("click", function () {

            navLinks.classList.remove("mobile-open");

        });

    }

};
