// Navagation Bar

const button = document.getElementsByClassName('nav-button');

const backGround = document.getElementsByClassName('nav-bg');

const colorMouseOver = () => {
  button.forEach(element => {
    element.style.color = '#406D73';
  });
  backGround.forEach(element => {
    element.style.backgroundColor = '#D0EDF1';
  });
};

const colorMouseOut = () => {
  button.forEach(element => {
    element.style.color = '#D0EDF1';
  });
  backGround.forEach(element => {
    element.style.backgroundColor = '#406D73';
  });
};

button.addEventListener('mouseover', colorMouseOver());
backGround.addEventListener('mouseover', colorMouseOver());

button.addEventListener('mouseout', colorMouseOut());
backGround.addEventListener('mouseout', colorMouseOut());

/* const colorMouseOver = () => {
  for (i = 0; i < 4; i++) {
    button[i].style.color = '#406D73'
    backGround[i].style.backgroundColor = '#D0EDF1'
  }
}

button.addEventListener('mouseover', colorMouseOver())
backGround.addEventListener('mouseover', colorMouseOver())

const colorMouseOut = () => {
  for (i = 0; i < 4; i++) {
    button[i].style.color = '#D0EDF1'
    backGround[i].style.backgroundColor = '#406D73'
  }
}

button.addEventListener('mouseout', colorMouseOut())
backGround.addEventListener('mouseout', colorMouseOut()) */