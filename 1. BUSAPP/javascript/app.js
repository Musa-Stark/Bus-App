const donwloadApp = () => {
  window.location.href =
    "https://play.google.com/store/apps/details?id=com.smaz.busapp";
};

const linkBtn = document.querySelector("#links");
const linkList = document.querySelector("#linkList");
const linkListMob = document.querySelector("#linkListMob");

linkBtn.addEventListener("click", () => {
  if (linkList.style.right === "3.5%") {
    linkList.style.right = "-20%";
  } else {
    linkList.style.right = "3.5%";
  }

  if (linkListMob.style.top === "-350px") {
    linkListMob.style.top = "290px";
  } else {
    linkListMob.style.top = "-350px";
  }
});

// MenuBtn
const menuBtn = document.querySelector(".menuBtn");
let l1 = document.querySelector(".line1");
let l2 = document.querySelector(".line2");
let l3 = document.querySelector(".line3");
const menuList = document.querySelector(".headerUl");
menuBtn.addEventListener("click", () => {
  l1.classList.toggle("l1after");
  l2.classList.toggle("l2after");
  l3.classList.toggle("l3after");
  menuBtn.style.backgroundColor = "#976100";
  setTimeout(() => {
    menuBtn.style.backgroundColor = "orange";
  }, 200);
  if (linkListMob.style.top === "290px") {
    linkListMob.style.top = "-350px";
  }

  if (menuList.style.top !== "100px") {
    menuList.style.top = "100px";
  } else {
    menuList.style.top = "-300px";
  }
});

// Scroll animation
document.addEventListener("DOMContentLoaded", () => {
  const elLeft = document.querySelectorAll(".fade-in-X");
  const elRight = document.querySelectorAll(".fade-in-X-reverse");
  const elFade = document.querySelectorAll(".fade-in");
  const VPHeight = window.innerHeight;

  function animate() {
    elLeft.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < VPHeight - 200) {
        el.style.transform = "translateX(0px)";
        el.style.opacity = "1";
      }
    });
    elRight.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < VPHeight - 200) {
        el.style.transform = "translateX(0px)";
        el.style.opacity = "1";
      }
    });
    elFade.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < VPHeight - 100) {
        el.style.opacity = "1";
      }
    });
  }
  animate();
  window.addEventListener("scroll", animate);
});
