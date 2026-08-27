// Portfolio loaded
console.log("Steve Richi Portfolio Loaded 🚀");

// Smooth reveal animation
const sections = document.querySelectorAll(".section, .contact");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.15
    }
);

sections.forEach((section) => {
    observer.observe(section);
});