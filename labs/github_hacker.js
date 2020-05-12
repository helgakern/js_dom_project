// [Lab] Github Hacker
// Go to the Johnny Five Javascript library's Githup repo.

// Change the text color of all file name and directory name links to red.
// Delete all file and directory icons from the file explorer (the big box below the Clone or download button).
// Clone the johnny five logo (the big yellow square with a robot inside) and use it to replace the Github logo at the very top left of the page. Also, resize the cloned johnny five logo to be about the same size as the replaced Github logo.
// Replace all topic tags (e.g. javascript, arduino, chip. etc) with the first tags, javascript

// 1) Change the text color of all file name and directory name links to red.
const links = document.querySelectorAll('tr.js-navigation-item')
links.forEach(node => {
    console.log(node.querySelector('.content'))
    node.querySelector('.content > span > a').style.color = 'red'
})

// 2) // Delete all file and directory icons from the file explorer (the big box below the Clone or download button).

links.forEach(node => {
    node.querySelector('.icon').remove()
})

// 3) // Clone the johnny five logo (the big yellow square with a robot inside) and use it to replace the Github logo at the very top left of the page. Also, resize the cloned johnny five logo to be about the same size as the replaced Github logo.

const githubLogo = document.querySelector('.Header-link')
// grab the REAL/Computed width and height of the github logo
const w = getComputedStyle(githubLogo).width
const h = getComputedStyle(githubLogo).height

// grab the johnny-5 logo
const readme = document.getElementById('readme')
const j5logo = readme.querySelector('img')

// clone the j5 logo
const j5logoClone = j5logo.cloneNode()
// changing the width and height to match the github logo
j5logoClone.style.width = w
j5logoClone.style.height = h

// grab the container of the github logo
const logoContainer = document.querySelector('.Header-item')

// remove the github logo
githubLogo.remove()
// append the j5logo clone to the logo container
logoContainer.append(j5logoClone)

// 4) 

const topicsContainer = document.querySelector('.list-topics-container.f6') // grab the topics container div
const javascriptTopic = topicsContainer.firstElementChild // grab the first topic
// const numberOfTopics = topicsContainer.children.length // save the number of topics

// topicsContainer.innerHTML = '' // delete all the topics
// for (let i = 0; i < numberOfTopics; i++) { // iterate number of topics times
//   topicsContainer.appendChild(javascriptTopic.cloneNode(true)) // append a clone of the first topic
// }

// 4) another solution

for (const node of topicsContainer.children) {
    topicsContainer.replaceChild(javascriptTopic.cloneNode(true), node)
}