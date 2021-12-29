// /*
gsap
  .timeline({
    scrollTrigger: {
      trigger: "#smallell",
      pin: false,
      markers: true,
      start: "top 20",
      //   end: "+=300",
      scrub: 2,
    },
  })
  .from("#smallell", { x: 50, duration: 5 })
  .to("#smallell", {
    x: -50,
    duration: 5,
  })
  .from("#bigell", { x: 100, duration: 7 })
  .to("#bigell", {
    x: 10,
    duration: 7,
  });

let sc = document.querySelectorAll(".sector");
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".boardpage",
      pin: false,
      // markers: true,
      markers: { startColor: "yellow", endColor: "blue" },
      //   start: "top top",
      start: "-200 top",
      end: "bottom center+=300",
      scrub: true,
    },
  })
  .from("#i1", { x: -100, duration: 1, opacity: 0 })
  .to("#i1", { x: 5, opacity: 1.5 })
  .from("#i2", { x: 50, duration: 1, opacity: 0 })
  .to("#i2", { x: 10, opacity: 1.5 })
  .from("#i3", { x: -100, duration: 1, opacity: 0 })
  .to("#i3", { x: 5, opacity: 1.5 });
// */
