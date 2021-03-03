const menuBtn = document.querySelector(".hamburger");
const menu = document.querySelector(".navigation");
const menuOption = document.querySelectorAll(".menu-option");
const hamburgerMenu = document.querySelector("#hamburger-menu");

let isOpen = false;

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("hamburger--active");
  if (isOpen) {
    menu.style.left = "100%";
    isOpen = !isOpen;
  } else {
    menu.style.left = "0%";
    isOpen = !isOpen;
  }
});

const closeMenu = () => {
  menuOption.forEach((element) => {
    element.addEventListener("click", () => {
      menu.style.left = "100%";
      isOpen = !isOpen;
      hamburgerMenu.classList.remove("hamburger--active");
    });
  });
};

closeMenu();

gsap.registerPlugin(ScrollTrigger);

const aboutMeText = document.querySelector(".about-me-text-wrapper");

gsap.fromTo(
  aboutMeText,
  { y: "+=80", opacity: 0 },
  {
    y: 0,
    opacity: 1,
    stagger: 0.2,
    duration: 1.5,
    ease: "easeInOut",
    scrollTrigger: {
      trigger: ".about-me-text-wrapper",
      start: "top 65%",
    },
  }
);

const aboutMeHeader = document.querySelector(".about-me-header");

const addClass = () => {
  aboutMeHeader.classList.add("active");
};

gsap.fromTo(
  aboutMeHeader,
  {},
  {
    addClass,
    scrollTrigger: {
      trigger: ".about-me-text-wrapper",
      start: "top 65%",
    },
  }
);

const profession = document.querySelector(".profession");

const professionActive = () => {
  profession.classList.add("profession-active");
};

gsap.fromTo(
  profession,
  {},
  {
    professionActive,
    scrollTrigger: {
      trigger: "header",
      start: "top 1%",
    },
  }
);

const headerName = document.querySelector(".header-name");

const headerNameActive = () => {
  headerName.classList.add("header-name-active");
};
gsap.fromTo(
  headerName,
  {},
  {
    headerNameActive,
    scrollTrigger: {
      trigger: "header",
      start: "top 1%",
    },
  }
);

const formHeader = document.querySelector(".contact-me");

const formHeaderActive = () => {
  formHeader.classList.add("contact-me-active");
};

gsap.fromTo(
  formHeader,
  {},
  {
    formHeaderActive,
    scrollTrigger: {
      trigger: ".form",
      start: "top 60%",
    },
  }
);

const skillsHeader = document.querySelector(".skills-header-span");
const skillsHeaderSpanFirst = document.querySelector(
  ".skills-header-span-first"
);
const skillsHeaderSpanSecond = document.querySelector(
  ".skills-header-span-second"
);

const skillsHeaderActive = () => {
  skillsHeader.classList.add("skills-header-span-active");
  skillsHeaderSpanSecond.classList.add("skills-header-span-second-active");
  skillsHeaderSpanFirst.classList.add("skills-header-span-first-active");
};

gsap.fromTo(
  skillsHeader,
  {},
  {
    skillsHeaderActive,
    scrollTrigger: {
      trigger: ".skills",
      start: "top 30%",
    },
  }
);

const toolsHeader = document.querySelector(".second");
const toolsHeaderSpanFirst = document.querySelector(".first-text");
const toolsHeaderSpanSecond = document.querySelector(".second-text");

const toolsHeaderActive = () => {
  toolsHeader.classList.add("second-active");
  toolsHeaderSpanSecond.classList.add("second-text-active");
  toolsHeaderSpanFirst.classList.add("first-text-active");
};

gsap.fromTo(
  toolsHeader,
  {},
  {
    toolsHeaderActive,
    scrollTrigger: {
      trigger: ".tools",
      start: "top 30%",
    },
  }
);

const angularIcon = document.querySelector(".icon-angular");

gsap.fromTo(
  angularIcon.children,
  { y: "+=50", opacity: 0 },
  {
    y: 0,
    opacity: 1,
    stagger: 0.2,
    duration: 1.5,
    ease: "easeInOut",
    scrollTrigger: {
      trigger: ".skills",
      start: "top 30%"
    },
  }
);

const typescriptIcon = document.querySelector(".icon-typescript");

gsap.fromTo(
  typescriptIcon.children,
  { y: "+=50", opacity: 0 },
  {
    y: 0,
    opacity: 1,
    stagger: 0.2,
    duration: 1.5,
    ease: "easeInOut",
    scrollTrigger: {
      trigger: ".skills",
      start: "top 30%"
    },
  }
);

const javascriptIcon = document.querySelector(".icon-javascript");

gsap.fromTo(
  javascriptIcon.children,
  { y: "+=50", opacity: 0 },
  {
    y: 0,
    opacity: 1,
    stagger: 0.2,
    duration: 1.5,
    ease: "easeInOut",
    scrollTrigger: {
      trigger: ".skills",
      start: "top 30%"
    },
  }
);

const nodeIcon = document.querySelector(".icon-node");

gsap.fromTo(
  nodeIcon.children,
  { y: "+=50", opacity: 0 },
  {
    y: 0,
    opacity: 1,
    stagger: 0.2,
    duration: 1.5,
    ease: "easeInOut",
    scrollTrigger: {
      trigger: ".skills",
      start: "top 30%"
    },
  }
);

const nestIcon = document.querySelector(".icon-nest");

gsap.fromTo(
  nestIcon.children,
  { y: "+=50", opacity: 0 },
  {
    y: 0,
    opacity: 1,
    stagger: 0.2,
    duration: 1.5,
    ease: "easeInOut",
    scrollTrigger: {
      trigger: ".skills",
      start: "top 30%"
    },
  }
);

const postgreIcon = document.querySelector(".icon-postgre");

gsap.fromTo(
  postgreIcon.children,
  { y: "+=50", opacity: 0 },
  {
    y: 0,
    opacity: 1,
    stagger: 0.2,
    duration: 1.5,
    ease: "easeInOut",
    scrollTrigger: {
      trigger: ".skills",
      start: "top 30%"
    },
  }
);

const bootstrapIcon = document.querySelector(".icon-bootstrap");

gsap.fromTo(
  bootstrapIcon.children,
  { y: "+=50", opacity: 0 },
  {
    y: 0,
    opacity: 1,
    stagger: 0.2,
    duration: 1.5,
    ease: "easeInOut",
    scrollTrigger: {
      trigger: ".tools",
      start: "top 30%"
    },
  }
);

const gitIcon = document.querySelector(".icon-git");

gsap.fromTo(
  gitIcon.children,
  { y: "+=50", opacity: 0 },
  {
    y: 0,
    opacity: 1,
    stagger: 0.2,
    duration: 1.5,
    ease: "easeInOut",
    scrollTrigger: {
      trigger: ".tools",
      start: "top 30%"
    },
  }
);

const npmIcon = document.querySelector(".icon-npm");

gsap.fromTo(
  npmIcon.children,
  { y: "+=50", opacity: 0 },
  {
    y: 0,
    opacity: 1,
    stagger: 0.2,
    duration: 1.5,
    ease: "easeInOut",
    scrollTrigger: {
      trigger: ".tools",
      start: "top 30%"
    },
  }
);

const sassIcon = document.querySelector(".icon-sass");

gsap.fromTo(
  sassIcon.children,
  { y: "+=50", opacity: 0 },
  {
    y: 0,
    opacity: 1,
    stagger: 0.2,
    duration: 1.5,
    ease: "easeInOut",
    scrollTrigger: {
      trigger: ".tools",
      start: "top 30%"
    },
  }
);

const githubIcon = document.querySelector(".icon-github");

gsap.fromTo(
  githubIcon.children,
  { y: "+=50", opacity: 0 },
  {
    y: 0,
    opacity: 1,
    stagger: 0.2,
    duration: 1.5,
    ease: "easeInOut",
    scrollTrigger: {
      trigger: ".tools",
      start: "top 30%"
    },
  }
);

const figmaIcon = document.querySelector(".icon-figma");

gsap.fromTo(
  figmaIcon.children,
  { y: "+=50", opacity: 0 },
  {
    y: 0,
    opacity: 1,
    stagger: 0.2,
    duration: 1.5,
    ease: "easeInOut",
    scrollTrigger: {
      trigger: ".tools",
      start: "top 30%"
    },
  }
);

const form = document.querySelector("form");

gsap.fromTo(
  form.children,
  { y: "+=50", opacity: 0 },
  {
    y: 0,
    opacity: 1,
    stagger: 0.2,
    duration: .3,
    ease: "easeInOut",
    scrollTrigger: {
      trigger: "form",
      start: "top 65%"
    },
  }
);

const projectHeader = document.querySelector(".projects-header-text");

const addProjectHeaderActive = () => {
  projectHeader.classList.add("projects-header-text-active");
};

gsap.fromTo(
  projectHeader,
  {},
  {
    addProjectHeaderActive,
    scrollTrigger: {
      trigger: ".projects",
      start: "top 30%",
    },
  }
);