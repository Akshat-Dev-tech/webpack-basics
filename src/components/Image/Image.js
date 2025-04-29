import imag from '../../image.jpg';
import './Image.css';

class Image{
    render(){
        const img = document.createElement('img')
        img.src = imag
        img.alt = 'Image'
        img.classList.add('comp-image')
        const body = document.querySelector('body')
        body.appendChild(img)
    }
}
export default Image;