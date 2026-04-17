
  const btnVolverArriba = document.getElementById('btnVolverArriba');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 2600) {
      btnVolverArriba.classList.add('show');
    } else {
      btnVolverArriba.classList.remove('show');
    }
  });

  btnVolverArriba.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });