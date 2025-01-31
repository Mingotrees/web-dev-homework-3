const header = document.querySelector('.header');

function headerOpacity() {
  header.style.opacity = window.scrollY > 0 ? '0.85' : '1';
}

document.addEventListener('scroll', headerOpacity);
