let tl = gsap.timeline({ defaults: { duration: 0.75, ease: Power2.easeOut } });

tl.fromTo(".cookie-container", { scale: 0 }, { scale: 1, ease: Elastic.easeOut.config(1, 0.4), duration: 1.5 });

tl.fromTo("#cookie", { opacity: 0, x: -110, rotation: "-55deg" }, { opacity: 1, x: 0, rotation: "0deg" }, "<50%");

tl.fromTo(".text", { x: 50, opacity: 0 }, { x: 0, opacity: 1 }, "<");

tl.fromTo("#cookie", { y: 0, rotation: "0deg" }, { y: -22, rotation: "-20deg", yoyo: true, repeat: -1 });

tl.fromTo("#scrums", { y: 0 }, { y: -22, yoyo: true, repeat: -1 }, "<");

// confirm-btn click handler
const confirmBtn = document.getElementById("confirm-btn");
confirmBtn.addEventListener("click", () => {
  gsap.to(".cookie-container", { opacity: 0, y: 80, duration: 0.75 });
});
