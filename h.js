// function H(tagName) {
//   return document.createElement(tagName)
// }

// document.createElement('p') // same thing as the H function we just created
// H('p') // same thing

// function H(tagName, attributes) {
//   const node = document.createElement(tagName)
//   for (let key in attributes) {
//     node.setAttribute(key, attributes[key])
//   }
//   return node
// }

function H(tagName, attributes, text, styles) {
    const node = document.createElement(tagName)
    for (let key in attributes) {
        node.setAttribute(key, attributes[key])
    }
    for (let key in styles) {
        node.style[key] = styles[key]
    }
    node.innerText = text
    return node
}