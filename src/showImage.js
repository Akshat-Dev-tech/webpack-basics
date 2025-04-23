import logo from './image.jpg';
import alttext from './altText.txt'

export default function showImage() {
  const img = document.createElement('img');
  img.src = logo;
  const body = document.querySelector('body');
  console.log('body',body)
  body.appendChild(img);
}
