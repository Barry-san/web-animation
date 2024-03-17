import gsap from "gsap";

const header = document.querySelectorAll("header > *");
const timeline = gsap.timeline();

timeline
  .set(header, { y: "100%", textAlign: "center", opacity: 0 })
  .to(header, { y: "0%", opacity: 1, duration: 1, stagger: 1 })
  .to(header, { y: "0%", opacity: 1 });

const heroImages = document.querySelectorAll(".hero_images img");

const imagesTimeline = gsap.timeline();
imagesTimeline.set(heroImages, { y: "100%", opacity: 0 });

heroImages.forEach((image) => {
  timeline
    .to(image, { y: "0%", stagger: 0.5, opacity: 1, duration: 0.3 })
    .to(image, { rotateZ: Math.round(Math.random() * 10) - 5, stagger: 1 });
});
