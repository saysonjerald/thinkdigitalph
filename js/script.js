const burger = document.querySelector(".burger");
const ctaFillForm = document.querySelectorAll(".ctaFillForm");
const ctaClose = document.querySelector("#ctaClose");
const copyDataFrom = document.querySelector("#copyDataFrom");
const copyDataTo = document.querySelector("#copyDataTo");

let controller;
let slideScene;

//GSAP
gsap.defaults({ ease: "power3.inOut" });
let master = gsap.timeline();

//navigation slider
let createSlide;
let navBarSlider;
let navBarSliderHolder;
let bulletLabel;
let bullet;
let bulletY;
let bulletColor;
let navbarColor;
let bulletLabelColor;
//FULL PAGE JS
new fullpage("#slider", {
  licenseKey: null,
  scrollingSpeed: 1000,
  responsiveSlides: true,
  autoScrolling: true,
  verticalCentered: false,
  navigation: true,
  navigationPosition: "left",
  navigationTooltips: [
    "home",
    "about us",
    "services",
    "portfolio",
    "blog",
    "contact",
  ],
  responsiveWidth: 768,
  showActiveTooltip: true,
  afterRender: function () {
    navBarSliderHolder = document.querySelectorAll("#fp-nav ul li a");
    bulletLabel = document.querySelectorAll("#fp-nav ul li .fp-tooltip");
    bulletWrapper = document.querySelectorAll("#fp-nav ul li");
    bullet = document.querySelectorAll(
      "#fp-nav ul li a span.fp-sr-only + span"
    );
    navBarSliderHolder.forEach((x) => {
      createSlide = document.createElement("div");
      createSlide.className = "navBarSlider";
      x.appendChild(createSlide);
    });
    navBarSlider = document.querySelectorAll("#fp-nav ul li a .navBarSlider");

    master
      .set(bulletLabel, { color: "#ffffff" })
      .set(bulletWrapper[0], { y: 0 })
      .set(bulletWrapper[1], { y: 150 })
      .set(bulletWrapper[2], { y: 150 })
      .set(bulletWrapper[3], { y: 150 })
      .set(bulletWrapper[4], { y: 150 })
      .set(bulletWrapper[5], { y: 150 })
      .set(bullet[0], { backgroundColor: "#ffffff" })
      .set(bullet[1], { backgroundColor: "#737373" })
      .set(bullet[2], { backgroundColor: "#737373" })
      .set(bullet[3], { backgroundColor: "#737373" })
      .set(bullet[4], { backgroundColor: "#737373" })
      .set(bullet[5], { backgroundColor: "#737373" })
      .set(navBarSlider[0], { scaleY: 1 });
  },
  onLeave: function (origin, destination, direction) {
    if (destination.index == 0) {
      gsap.to(".nav", 0.5, { opacity: 1, y: 0 });
    } else {
      gsap.to(".nav", 0.5, { opacity: 0, y: -150 });
    }
    if (destination.index == 0) {
      bulletsColor(destination);
      bulletSlide(destination);
      navBarSlide(destination);
      bulletLabelColorChanger(destination);
    }
    if (destination.index == 1) {
      bulletsColor(destination);
      bulletSlide(destination);
      navBarSlide(destination);
      bulletLabelColorChanger(destination);
    }
    if (destination.index == 2) {
      bulletsColor(destination);
      bulletSlide(destination);
      navBarSlide(destination);
      bulletLabelColorChanger(destination);
    }
    if (destination.index == 3) {
      bulletsColor(destination);
      bulletSlide(destination);
      navBarSlide(destination);
      bulletLabelColorChanger(destination);
    }
    if (destination.index == 4) {
      bulletsColor(destination);
      bulletSlide(destination);
      navBarSlide(destination);
      bulletLabelColorChanger(destination);
    }
    if (destination.index == 5) {
      bulletsColor(destination);
      bulletSlide(destination);
      navBarSlide(destination);
      bulletLabelColorChanger(destination);
    }
  },
});

function navBarSlide(slide) {
  let t1 = gsap.timeline({ duration: 0.7, ease: "power3.inOut" });
  let i = 0;
  switch (slide.index) {
    case 0:
      navbarColor = "#ffffff";
      i = 0;
      break;
    case 1:
      navbarColor = "#333333";
      i = 1;
      break;
    case 2:
      navbarColor = "#ffffff";
      i = 2;
      break;
    case 3:
      navbarColor = "#ffffff";
      i = 3;
      break;
    case 4:
      navbarColor = "#333333";
      i = 4;
      break;
    case 5:
      navbarColor = "#f7f7f7";
      i = 5;
      break;
    default:
      navbarColor = "#333333";
      break;
  }
  t1.fromTo(
    navBarSlider[i],
    { scaleY: 0, backgroundColor: navbarColor },
    { scaleY: 1 }
  );
  return t1;
}

function bulletLabelColorChanger(slide) {
  let t1 = gsap.timeline({ duration: 0.1 });
  switch (slide.index) {
    case 0:
      bulletLabelColor = "#ffffff";
      break;
    case 1:
      bulletLabelColor = "#333333";
      break;
    case 2:
      bulletLabelColor = "#ffffff";
      break;
    case 3:
      bulletLabelColor = "#ffffff";
      break;
    case 4:
      bulletLabelColor = "#333333";
      break;
    case 5:
      bulletLabelColor = "#f7f7f7";
      break;
    default:
      bulletLabelColor = "#333333";
      break;
  }
  t1.fromTo(
    bulletLabel,
    { opacity: 0, color: bulletLabelColor },
    { opacity: 1, color: bulletLabelColor }
  );
  return t1;
}

function bulletSlide(slide) {
  let t1 = gsap.timeline({ duration: 1.1, ease: "power3.inOut" });

  switch (slide.index) {
    case 0:
      bulletY = 150;
      t1.to(bulletWrapper[0], { y: 0 })
        .to(bulletWrapper[1], { y: bulletY }, "-=1")
        .to(bulletWrapper[2], { y: bulletY }, "-=1")
        .to(bulletWrapper[3], { y: bulletY }, "-=1")
        .to(bulletWrapper[4], { y: bulletY }, "-=1")
        .to(bulletWrapper[5], { y: bulletY }, "-=1");
      break;
    case 1:
      bulletY = 150;
      t1.to(bulletWrapper[0], { y: 0 })
        .to(bulletWrapper[1], { y: 0 }, "-=1")
        .to(bulletWrapper[2], { y: bulletY }, "-=1")
        .to(bulletWrapper[3], { y: bulletY }, "-=1")
        .to(bulletWrapper[4], { y: bulletY }, "-=1")
        .to(bulletWrapper[5], { y: bulletY }, "-=1");
      break;
    case 2:
      bulletY = 150;
      t1.to(bulletWrapper[0], { y: 0 })
        .to(bulletWrapper[1], { y: 0 }, "-=1")
        .to(bulletWrapper[2], { y: 0 }, "-=1")
        .to(bulletWrapper[3], { y: bulletY }, "-=1")
        .to(bulletWrapper[4], { y: bulletY }, "-=1")
        .to(bulletWrapper[5], { y: bulletY }, "-=1");
      break;
    case 3:
      bulletY = 150;
      t1.to(bulletWrapper[0], { y: 0 })
        .to(bulletWrapper[1], { y: 0 }, "-=1")
        .to(bulletWrapper[2], { y: 0 }, "-=1")
        .to(bulletWrapper[3], { y: 0 }, "-=1")
        .to(bulletWrapper[4], { y: bulletY }, "-=1")
        .to(bulletWrapper[5], { y: bulletY }, "-=1");
      break;
    case 4:
      bulletY = 150;
      t1.to(bulletWrapper[0], { y: 0 })
        .to(bulletWrapper[1], { y: 0 }, "-=1")
        .to(bulletWrapper[2], { y: 0 }, "-=1")
        .to(bulletWrapper[3], { y: 0 }, "-=1")
        .to(bulletWrapper[4], { y: 0 }, "-=1")
        .to(bulletWrapper[5], { y: bulletY }, "-=1");
      break;
    case 5:
      bulletY = 150;
      t1.to(bulletWrapper[0], { y: 0 })
        .to(bulletWrapper[1], { y: 0 }, "-=1")
        .to(bulletWrapper[2], { y: 0 }, "-=1")
        .to(bulletWrapper[3], { y: 0 }, "-=1")
        .to(bulletWrapper[4], { y: 0 }, "-=1")
        .to(bulletWrapper[5], { y: 0 }, "-=1");
      break;
  }
  return t1;
}

function bulletsColor(slide) {
  let t1 = gsap.timeline({ ease: "power3.inOut" });

  switch (slide.index) {
    case 0:
      bulletColor = "#737373";
      t1.to(bullet[0], { backgroundColor: "#ffffff" })
        .to(bullet[1], { backgroundColor: bulletColor }, "-=1")
        .to(bullet[2], { backgroundColor: bulletColor }, "-=1")
        .to(bullet[3], { backgroundColor: bulletColor }, "-=1")
        .to(bullet[4], { backgroundColor: bulletColor }, "-=1")
        .to(bullet[5], { backgroundColor: bulletColor }, "-=1");
      break;
    case 1:
      bulletColor = "#e6e6e6";
      t1.to(bullet[0], { backgroundColor: bulletColor })
        .to(bullet[1], { backgroundColor: "#333333" }, "-=1")
        .to(bullet[2], { backgroundColor: bulletColor }, "-=1")
        .to(bullet[3], { backgroundColor: bulletColor }, "-=1")
        .to(bullet[4], { backgroundColor: bulletColor }, "-=1")
        .to(bullet[5], { backgroundColor: bulletColor }, "-=1");
      break;
    case 2:
      bulletColor = "#737373";
      t1.to(bullet[0], { backgroundColor: bulletColor })
        .to(bullet[1], { backgroundColor: bulletColor }, "-=1")
        .to(bullet[2], { backgroundColor: "#ffffff" }, "-=1")
        .to(bullet[3], { backgroundColor: bulletColor }, "-=1")
        .to(bullet[4], { backgroundColor: bulletColor }, "-=1")
        .to(bullet[5], { backgroundColor: bulletColor }, "-=1");
      break;
    case 3:
      bulletColor = "#737373";
      t1.to(bullet[0], { backgroundColor: bulletColor })
        .to(bullet[1], { backgroundColor: bulletColor }, "-=1")
        .to(bullet[2], { backgroundColor: bulletColor }, "-=1")
        .to(bullet[3], { backgroundColor: "#ffffff" }, "-=1")
        .to(bullet[4], { backgroundColor: bulletColor }, "-=1")
        .to(bullet[5], { backgroundColor: bulletColor }, "-=1");
      break;
    case 4:
      bulletColor = "#EDEDED";
      t1.to(bullet[0], { backgroundColor: bulletColor })
        .to(bullet[1], { backgroundColor: bulletColor }, "-=1")
        .to(bullet[2], { backgroundColor: bulletColor }, "-=1")
        .to(bullet[3], { backgroundColor: bulletColor }, "-=1")
        .to(bullet[4], { backgroundColor: "#333333" }, "-=1")
        .to(bullet[5], { backgroundColor: bulletColor }, "-=1");
      break;
    case 5:
      bulletColor = "#666666";
      t1.to(bullet[0], { backgroundColor: bulletColor })
        .to(bullet[1], { backgroundColor: bulletColor }, "-=1")
        .to(bullet[2], { backgroundColor: bulletColor }, "-=1")
        .to(bullet[3], { backgroundColor: bulletColor }, "-=1")
        .to(bullet[4], { backgroundColor: bulletColor }, "-=1")
        .to(bullet[5], { backgroundColor: "#f7f7f7" }, "-=1");
      break;
  }
  return t1;
}

// master.add(navBarSlide());
// master.add(bulletSlide1(), "-=1");

//Start as website starts
gsap.to(".nav", 1, { delay: 1.5, y: 0 });

//Event Functions
function navToggle(e) {
  if (!e.target.classList.contains("active")) {
    e.target.classList.add("active");
    gsap.to(".line1", 0.5, { rotate: "45", y: 11, backgroundColor: "#000000" });
    gsap.to(".line3", 0.5, { opacity: 0, backgroundColor: "#000000" });
    gsap.to(".line2", 0.5, {
      rotate: "-45",
      backgroundColor: "#000000",
    });
    gsap.to(".nav__logo", 1, { filter: "invert(1)" });
    gsap.to(".nav-section", 1, { clipPath: "circle(2500px at 100% -10%)" });
    gsap.to(".nav__phone", 0.5, { backgroundColor: "white" });
    document.body.classList.add("hide");
  } else {
    e.target.classList.remove("active");
    gsap.to(".line1", 0.5, { rotate: "0", y: 0, backgroundColor: "#ffffff" });
    gsap.to(".line3", 0.5, { opacity: 1, backgroundColor: "#ffffff" });
    gsap.to(".line2", 0.5, { rotate: "0", y: 0, backgroundColor: "#ffffff" });
    gsap.to(".nav__logo", 1, { filter: "invert(0)" });
    gsap.to(".nav-section", 1, { clipPath: "circle(50px at 100% -10%)" });
    gsap.to(".nav__phone", 1, { backgroundColor: "#333" });
    document.body.classList.remove("hide");
  }
}

function ctaShow() {
  gsap.to(".ctaForm", 0.5, { display: "inline-block" });
}

function ctaHide() {
  gsap.to(".ctaForm", 0.5, { display: "none" });
}

function copyDataFromTo() {
  copyDataTo.value = copyDataFrom.value;
}

//Eventlisteners
burger.addEventListener("click", navToggle);
ctaFillForm.forEach((x) => x.addEventListener("click", ctaShow));
ctaClose.addEventListener("click", ctaHide);
copyDataFrom.addEventListener("change", copyDataFromTo);
