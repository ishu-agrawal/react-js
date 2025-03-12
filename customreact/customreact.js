function customRender(reactElement, container) {
    // -----------------  version 1  -----------------
    // const domEle = document.createElement(reactElement.type)
    // domEle.innerHTML = reactElement.children
    // domEle.setAttribute('href', reactElement.props.href)
    // domEle.setAttribute('target', reactElement.props.target)

    // container.appendChild(domEle)

    // -----------------  version 2  -----------------
    const domEle = document.createElement(reactElement.type)
    domEle.innerHTML = reactElement.children

    for(const prop in reactElement.props){
        if(prop === 'children') continue;
        domEle.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domEle)
}

const reactEle = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank'
    },
    children: 'Click me to visit Google'
}

const mainContainer = document.querySelector('#root')

customRender(reactEle, mainContainer)