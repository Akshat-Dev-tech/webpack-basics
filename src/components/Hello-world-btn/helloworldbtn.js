import './helloworldbtn.css'

class Helloworldbtn {
    render(){
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
        console.log('Node', process.env.NODE_ENV)
    }
}

export default Helloworldbtn;