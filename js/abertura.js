window.addEventListener('scroll', function () {
  const nav = document.getElementById('nav');
  if (window.scrollY > 50) {
    nav.classList.add('rolagem');
  } else {
    nav.classList.remove('rolagem');
  }
});


window.onload = function () {
  setTimeout(() => {
    document.getElementById("curtainLeft").style.transform = "translateX(-100%)";
    document.getElementById("curtainRight").style.transform = "translateX(100%)";
  }, 500);

  setTimeout(() => {
    document.getElementById("content").style.opacity = "1";
  }, 2000);
};


class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li",
);
mobileNavbar.init();


window.sr = ScrollReveal({ reset: true });

sr.reveal('.cntxt', {
  duration: 3000,
  distance: '50px'
})

sr.reveal('.txtesq', {
  duration: 3500,
})

sr.reveal('.selectdir', {
  duration: 3500,
})

sr.reveal('.caixas1', {
  duration: 3500,
})

sr.reveal('.caixas2', {
  duration: 3500,
})