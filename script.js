///////////////////////////////////////////////////////////
// Setting the Current Year in the Footer

const yearEl = document.querySelector(".year");
const currYear = new Date().getFullYear();
yearEl.textContent = currYear;

///////////////////////////////////////////////////////////
// Making Mobile Navigation Work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
    headerEl.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
// Fixing the Scrolling Effect

const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const hrefEl = link.getAttribute("href");

        // Scroll back to Top

        if (hrefEl === "#")
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });

        // Scroll to Other Links

        if (hrefEl !== "#" && hrefEl.startsWith("#")) {
            const sectionEl = document.querySelector(hrefEl);
            sectionEl.scrollIntoView({ behavior: "smooth" });
        }

        // Close Mobile Navigation

        if (link.classList.contains("main-nav-link")) headerEl.classList.toggle("nav-open");
    });
});

///////////////////////////////////////////////////////////
// Applying the Sticky Navigation

const sectionHeroEl = document.querySelector(".section-hero");
const obs = new IntersectionObserver(
    function (entries) {
        const ent = entries[0];
        console.log(ent);
        if (ent.isIntersecting === false) {
            document.body.classList.add("sticky");
        }
        if (ent.isIntersecting === true) {
            document.body.classList.remove("sticky");
        }
    },
    {
        // In the viewport
        root: null,
        threshold: 0,
        rootMargin: "-80px",
    }
);
obs.observe(sectionHeroEl);
