import imag from '../../image.jpg';
import './Image.css';
import __ from 'lodash';

class Image{
    render(){
        //added for dependency bundle size will increase for loadash libraries
        const lowerCaseString = 'hello world';
        const upperCaseString = _.toUpper(lowerCaseString);
        console.log(upperCaseString); // Output: HELLO WORLD

        const img = document.createElement('img')
        img.src = imag
        img.alt = 'Image'
        img.classList.add('comp-image')
        const body = document.querySelector('body')
        body.appendChild(img)
    }
}
export default Image;