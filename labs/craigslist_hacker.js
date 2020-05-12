// Go to Vancouver's Craiglist page and hack away with JavaScript:

// Get the href attribute of the first link on the page.
// Get the number of links on this page.
// Change the text for all links to be your name.
// Make Craigslist's logo link to http://www.google.com
// Make of all the text use the Papyrus font.

// 1) 
const firstLink = document.querySelector('a')
firstLink.getAttribute('href')
firstLink.href

// 2) // Get the number of links on this page.
const links = document.querySelectorAll('a')
const linkcount = links.length

// 3) // Change the text for all links to be your name.
links.forEach(node => {
    node.innerText = 'Helga'
})

// 4) // Make Craigslist's logo link to http://www.google.com

// 5) select the logo
const logoATag = document.querySelector('#logo > a')
logoATag.href = 'https://www.google.ca'

const logoDiv = document.querySelector('#logo')
logoDiv.querySelector('a').href = 'https://www.google.ca'

// 6)
const allNodes = document.querySelectorAll('*')
allNodes.forEach(node => {
    node.style.fontFamily = 'Papyrus'
})

document.querySelector('body').style.fontFamily = 'Papyrus'

// grab all the tds
const tds = document.querySelectorAll('td')
tds.forEach((node, i) => {
    if (i % 2 === 0) {
        node.style.backgroundColor = 'palegreen'
    } else {
        node.style.backgroundColor = 'salmon'
    }
})


// Remove all p and a nodes that contain the substring "es"
const aTagsAndPTags = document.querySelectorAll('a, p')
aTagsAndPTags.forEach(node => {
    if (node.innerText.includes('es')) {

        // node.parentElement.remove() <--- looks like p tags and a tags are children of li tags. So if we remove only the a or p tag we're left with an empty li tag. We can do this to remove the li tag along with the p or a tag.
        node.remove()
    }
})