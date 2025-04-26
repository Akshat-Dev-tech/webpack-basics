import './heading.css'

class Heading {
    render(){
        const h1 = document.createElement('h1')
        h1.innerHTML= 'Hello world btn'
        // button.classList.add('hello-world-btn')
        // button.onclick = () => {
        //     const helloWorld = document.createElement('div')
        //     helloWorld.innerHTML = 'Hello world'
        //     document.body.appendChild(helloWorld)
        // }
        const body = document.querySelector('body')
        body.appendChild(h1)
    }
}

export default Heading;