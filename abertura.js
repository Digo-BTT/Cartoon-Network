window.addEventListener('scroll', function() {
  const nav = document.getElementById('nav');
  if (window.scrollY > 50) {
      nav.classList.add('rolagem');
  } else {
      nav.classList.remove('rolagem');
  }
});


  window.onload = function() {
    setTimeout(() => {
      document.getElementById("curtainLeft").style.transform = "translateX(-100%)";
      document.getElementById("curtainRight").style.transform = "translateX(100%)";
    }, 500);

    setTimeout(() => {
      document.getElementById("content").style.opacity = "1";
    }, 2000);
  };