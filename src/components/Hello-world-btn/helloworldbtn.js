import './helloworldbtn.css'

class Helloworldbtn {
    render(){
        const button = document.createElement('button')
        button.innerHTML= 'Hello world btn'
        button.classList.add('hello-world-btn')
        button.onclick = () => {
            const helloWorld = document.createElement('div')
            helloWorld.innerHTML = 'Hello world'
            document.body.appendChild(helloWorld)
        }
        const body = document.querySelector('body')
        body.appendChild(button)
    }
}