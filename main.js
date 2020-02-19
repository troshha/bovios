window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById('header').style.backgroundImage =
      'linear-gradient(76deg, #0099cc 0%, #66cc99 90%, #66cc99 100%)';
  } else {
    document.getElementById('header').style.backgroundImage = '';
  }
}

function showpopup(e) {
  e.preventDefault();
  const form = document.querySelector('#contactForm');
  form.addEventListener('submit', () => {
    document.querySelector('.popup').style.display = 'block';
  });
  setTimeout(() => {
    document.querySelector('.popup').style.display = 'none';
  }, 5000);
}

function mobilemenu() {
  var x = document.getElementById('myLinks');
  if (x.style.display === 'block') {
    x.style.display = 'none';
  } else {
    x.style.display = 'block';
  }
}
