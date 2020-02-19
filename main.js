window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    console.log(123);
    document.getElementById('header').style.backgroundImage =
      'linear-gradient(76deg, #0099cc 0%, #66cc99 90%, #66cc99 100%)';
  } else {
    console.log(321);
    document.getElementById('header').style.backgroundImage = '';
  }
}
