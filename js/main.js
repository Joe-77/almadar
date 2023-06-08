(header = document.querySelector("header")),
  (headLink = document.querySelector(".header")),
  (one = document.querySelector(".one")),
  (services = document.querySelector(".services")),
  (img = document.getElementById("img")),
  (client = document.querySelector(".client")),
  (link = document.querySelector(".link")),
  (date = document.getElementById("date")),
  (footer = document.querySelector("footer")),
  (icon = document.querySelector(".fa-bars-staggered")),
  (links = document.getElementById("links"));

window.onload = () => {
  header.style.top = "0px";
  headLink.style.top = "0px";
  one.style.top = "0px";
  services.style.top = "600px";
  client.style.top = "1000px";
  link.style.left = "0px";
  date.innerHTML = new Date().getFullYear();
  footer.style.display = "block";
  footer.style.left = "0px";
};

let i = 0;
let arr = [
  "img/1.png",
  "img/2.png",
  "img/3.png",
  "img/4.png",
  "img/5.png",
  "img/6.png",
  "img/7.png",
  "img/8.png",
  "img/9.png",
  "img/10.png",
  "img/11.png",
  "img/12.png",
  "img/13.png",
  "img/14.png",
  "img/15.png",
];
function slide() {
  img.setAttribute("src", arr[i]);

  if (i > arr.length - 2) {
    i = 0;
  } else {
    i++;
  }

  setTimeout(function () {
    slide();
  }, 5000);
}
slide();
icon.onclick = () => {
  links.style.right = "0px";
  links.style.display = "flex";
};
