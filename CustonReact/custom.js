function customRender(reactElement, container)
{
   const domElement = document.createElement(reactElement.type)
  /*  domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)
    container.appendChild(domElement)*/
    domElement.innerHTML = reactElement.children
  
    for (const prop in reactElement.object) {
        if(prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.object[prop])
    }
    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    object: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'

};
const mainContainer = document.querySelector('#root');

customRender(reactElement, mainContainer);