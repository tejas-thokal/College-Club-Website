const slides = [
  {
    image: "https://i.pinimg.com/736x/db/57/c8/db57c81f5289b8df72ff900440b23d1e.jpg",
    heading: "Echoes of Stardust: Live in Concert",
    description: "this is more than a concert, it's an experience"
  },
  {
    image: "https://i.pinimg.com/736x/1a/15/dc/1a15dc42d6d245a215e990a26bd22ecd.jpg",
    heading: "Burning Highways: Zach Bryan Live",
    description: "Burning Highways captures the spirit of the road."
  },
  {
    image: "https://i.pinimg.com/736x/b4/3a/ff/b43affaaa8ac283bcde81304b950e3e5.jpg",
    heading: "No Limits: KSI Live Unleashed",
    description: "From viral anthems to raw rap verses."
  }
];

let index = 0;
const img = document.getElementById("slideshows");
const heading = document.getElementById("slide-heading");
const desc = document.getElementById("slide-desc");

function showSlide(i) {
  img.src = slides[i].image;
  heading.textContent = slides[i].heading;
  desc.textContent = slides[i].description;
}

setInterval(() => {
  index = (index + 1) % slides.length;
  showSlide(index);
}, 3000);
showSlide(index);

gsap.from("#slide-heading", {
  duration: 1,
  y: -50,
  opacity: 0,
  ease: "power2.out"
});

gsap.from("#slide-desc", {
  duration: 1,
  delay: 0.5,
  y: 50,
  opacity: 0,
  ease: "power2.out"
});

gsap.from("button", {
  duration: 1,
  delay: 1,
  scale: 0,
  opacity: 0,
  ease: "back.out(1.7)"
});

gsap.from(".logo-mobile, .logo-desktop", {
  duration: 1,
  y: -50,
  opacity: 0,
  ease: "power2.out"
});
gsap.from(".nav-left .nav-link", {
  duration: 0.8,
  opacity: 0,
  x: -30,
  stagger: 0.2,
  delay: 0.3,
  ease: "power2.out"
});
gsap.from(".nav-right .nav-link", {
  duration: 0.8,
  opacity: 0,
  x: 30,
  stagger: 0.2,
  delay: 0.6,
  ease: "power2.out"
});
gsap.from(".toggler-btn", {
  duration: 0.8,
  opacity: 0,
  scale: 0,
  delay: 0.2,
  ease: "back.out(1.7)"
});