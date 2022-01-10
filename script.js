const buttons = document.querySelectorAll("#colors>button");
const html = document.querySelector("html");
const img = document.querySelector("#productImg>img");

buttons.forEach((button) =>
  button.addEventListener("click", (e) => {
      
    img.classList.remove('orange');
    img.classList.remove('blue');
    img.classList.remove('green');

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
