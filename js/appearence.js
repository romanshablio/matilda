let workSection = document.getElementById("work");
let aboutSection = document.getElementById("about");
let callSection = document.getElementById("callSection");
let portfolioSection = document.getElementById("portfolioSection");
let counterSection = document.getElementById("counterSection");
let gallerySection = document.getElementById("gallerySection");
let testimonialSection = document.getElementById("testimonialSection");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animation");
      return;
    }
  });
});
observer.observe(workSection);

const secondObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animation");
      return;
    }
  });
});
secondObserver.observe(aboutSection);

const thridObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animation");
      return;
    }
  });
});
thridObserver.observe(callSection);

// const fourthObserver = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add("animation");
//       return;
//     }
//   });
// });
// fourthObserver.observe(portfolioSection);

const fourthObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animation");
      return;
    }
  });
});
fourthObserver.observe(gallerySection);

const fifthObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animation");
      return;
    }
  });
});
fifthObserver.observe(counterSection);

const testimonialObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animation");
      return;
    }
  });
});
testimonialObserver.observe(testimonialSection);
