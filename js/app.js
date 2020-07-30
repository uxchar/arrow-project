
/*Hamburger Menu Animation*/

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});

var wrapperMenu = document.querySelector('.wrapper-menu');

wrapperMenu.addEventListener('click', function(){
  wrapperMenu.classList.toggle('open');  
});



/* Email validation*/

function checkEmail() {

  var email = document.getElementById('email');
  var emailTest = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (!emailTest.test(email.value)) {
  alert('Email address apears invalid, please provide your email address.');
  email.focus;
  return false;
}
}

