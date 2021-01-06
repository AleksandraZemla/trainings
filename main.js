
const hamburger = document.querySelector('.hamburger');
const navContainer = document.querySelector('.mobile-nav');
console.log("run");

const handleClick = () => {
  hamburger.classList.toggle('hamburger-active');
  navContainer.classList.toggle('mobile-nav-active');
}

const hideNavContainer = (e) => {
  console.log("run function hideContainer");
  const item = e.target;

  if (item.classList[0] === "links") {
    console.log("i got you my nav__link!");
    navContainer.classList.remove('mobile-nav-active');
    hamburger.classList.remove('hamburger-active');
  }
}

hamburger.addEventListener('click', handleClick);
navContainer.addEventListener('click', hideNavContainer);
