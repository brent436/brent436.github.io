const lightColor = '#D0EDF1';
const darkColor = '#406D73';

const textColor = document.getElementsByClassName('nav-button');
const backgroundColor = document.getElementsByClassName('nav-bg');

function mouseOver() {
  for (let i = 0; i < textColor.length; i++) {
    textColor[i].style.color = darkColor;
  }

  for (let i = 0; i < backgroundColor.length; i++) {
    backgroundColor[i].style.backgroundColor = lightColor;
  }
}

function mouseOut() {
  for (let i = 0; i < textColor.length; i++) {
    textColor[i].style.color = lightColor;
  }

  for (let i = 0; i < backgroundColor.length; i++) {
    backgroundColor[i].style.backgroundColor = darkColor;
  }
}

textColor.addEventListener('mouseover', mouseOver);
backgroundColor.addEventListener('mouseover', mouseOver);

textColor.addEventListener('mouseout', mouseOut);
backgroundColor.addEventListener('mouseout', mouseOut);