// =====================================
// MOBILE MENU
// =====================================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("show");
});


// Close mobile menu after clicking a link

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (item) {

    item.addEventListener("click", function () {

        navLinks.classList.remove("show");

    });

});


// =====================================
// TYPING ANIMATION
// =====================================

const typingElement = document.getElementById("typing");

const words = [
    "Web Developer",
    "Frontend Developer",
    "JavaScript Developer"
];

let wordIndex = 0;
let characterIndex = 0;
let isDeleting = false;


function typeEffect() {

    const currentWord = words[wordIndex];


    if (!isDeleting) {

        typingElement.textContent =
            currentWord.substring(
                0,
                characterIndex + 1
            );

        characterIndex++;


        // Finished typing word
        if (characterIndex === currentWord.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(
                0,
                characterIndex - 1
            );

        characterIndex--;


        // Finished deleting
        if (characterIndex === 0) {

            isDeleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }

        }

    }


    const speed = isDeleting ? 50 : 100;

    setTimeout(typeEffect, speed);
}


// Start typing animation
typeEffect();


// =====================================
// SCROLL REVEAL ANIMATION
// =====================================

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },
        {
            threshold: 0.15
        }
    );


revealElements.forEach(function (element) {

    revealObserver.observe(element);

});


// =====================================
// SKILL BAR ANIMATION
// =====================================

const skillsSection =
    document.querySelector(".skills-section");


const skillObserver =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    skillsSection.classList.add("show");

                }

            });

        },
        {
            threshold: 0.3
        }
    );


skillObserver.observe(skillsSection);


// =====================================
// CONTACT FORM
// =====================================

const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const name =
            document.getElementById("name").value;

        const email =
            document.getElementById("email").value;

        const message =
            document.getElementById("message").value;


        if (
            name === "" ||
            email === "" ||
            message === ""
        ) {

            alert("Please fill in all fields.");

            return;
        }


        alert(
            "Thank you, " +
            name +
            "! Your message has been sent."
        );


        contactForm.reset();

    }
);
