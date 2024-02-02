let workSection = document.getElementById("work");
let aboutSection = document.getElementById("about");
let callSection = document.getElementById("callSection");
let portfolioSection = document.getElementById("portfolioSection");
let counterSection = document.getElementById("counterSection");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animation");
    }
  });
});
observer.observe(workSection);

const secondObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animation");
    }
  });
});
secondObserver.observe(aboutSection);

const thridObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animation");
    }
  });
});
thridObserver.observe(callSection);

const fourthObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animation");
    }
  });
});
fourthObserver.observe(portfolioSection);

const fifthObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animation");
    }
  });
});
fifthObserver.observe(counterSection);
