//Color Changing
const buttons = document.querySelectorAll("#colors>button");
const html = document.querySelector("html");
const img = document.querySelector("#productImg>img");

buttons.forEach((button) =>
  button.addEventListener("click", (e) => {
    img.classList.remove("orange");
    img.classList.remove("blue");
    img.classList.remove("green");

    img.classList.add(e.srcElement.id);
    if (e.srcElement.id === "orange") {
      html.style.setProperty("--main-primary", "#eba768");
      html.style.setProperty("--main-secondary", "#f0e5dc");
    } else if (e.srcElement.id === "blue") {
      html.style.setProperty("--main-primary", "#78c1ed");
      html.style.setProperty("--main-secondary", "#dce6f0");
    } else if (e.srcElement.id === "green") {
      html.style.setProperty("--main-primary", "#97a754");
      html.style.setProperty("--main-secondary", "#e8f0dc");
    }
  })
);

//Size Changing
const sizes = document.querySelectorAll(".size");
sizes.forEach((s) =>
  s.addEventListener("click", (e) => {
    sizes.forEach((s) => s.classList.remove("active"));
    e.srcElement.classList.add("active");
    img.style.transform = `rotate(-30deg) scale(${e.srcElement.innerText / 41})`;
  })
);

//GSAP Animations
const maintl = gsap.timeline({
  defaults: { duration: 0.5, ease: "power1.inOut" },
});
const asidetl = gsap.timeline({
  defaults: { duration: 0.5, ease: "power1.inOut" },
});

maintl
  .from(".anim1", {
    opacity: 0,
    y: -200,
    stagger: 0.2,
  })
  .from(
    "#searchBar",
    {
      opacity: 0,
      y: -500,
    },
    "=-0.4"
  )
  .from(
    "#discount",
    {
      rotate: 60,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
    },
    "=-0.1"
  )
  .from(
    "#nikeText *",
    {
      opacity: 0,
      y: -500,
    },
    "=-0.5"
  );
asidetl
  .from("#productImg>img", {
    x: 100,
    opacity: 0,
    delay: 1,
  })
  .from("#colors>button", {
    opacity: 0,
    stagger: 0.2,
  })
  .from("#shoeDetails", {
    y: 100,
    opacity: 0,
  });
