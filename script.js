window.addEventListener('scroll', function() {
    let elements = document.querySelectorAll('.element');
    elements.forEach(element => {
      let elementPosition = element.getBoundingClientRect().top;
      let screenPosition = window.innerHeight / 1.3;
      if (elementPosition < screenPosition) {
        element.classList.add('visible');
      }
    });
  });