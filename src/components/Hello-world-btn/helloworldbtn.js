import './helloworldbtn.css'
import __ from 'lodash';

class Helloworldbtn {
    render(){

        //added for dependency bundle size will increase for loadash libraries
        const lowerCaseString = 'hello world';
        const upperCaseString = _.toUpper(lowerCaseString);
        const button = document.createElement('button')

        button.innerHTML= 'Hello world button'
        button.classList.add('hello-world-btn')
        button.onclick = () => {
            const helloWorld = document.createElement('div')
            helloWorld.innerHTML = 'Hello world'
            document.body.appendChild(helloWorld)
        }
        const body = document.querySelector('body')
        body.appendChild(button)
        console.log('Node',process.env.NODE_ENV)
    }
}

export default Helloworldbtn;