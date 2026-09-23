// Micro-interaction for button hovering
document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("mouseenter", () => {
    button.style.transform = "scale(1.02)";
  });
  button.addEventListener("mouseleave", () => {
    button.style.transform = "scale(1)";
  });
});

// Simple scroll reveal effect
const observerOptions = {
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("opacity-100", "translate-y-0");
      entry.target.classList.remove("opacity-0", "translate-y-10");
    }
  });
}, observerOptions);

document.querySelectorAll(".glass-card").forEach((el) => {
  el.classList.add(
    "transition-all",
    "duration-1000",
    "opacity-0",
    "translate-y-10",
  );
  observer.observe(el);
});
