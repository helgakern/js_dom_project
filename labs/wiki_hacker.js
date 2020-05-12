// Go to the Wikipedia page on Pugs. Open up a console, and hack away with JavaScript:

// Change the title of the article to your name.
// Hide the body of the article
// Replace the Wikipedia logo with another picture
// Don't forget to save your code. You might get picked for the stage!

// Stretch
// Replace the word "pug" in every p tag with "spud".

// Change title of article to your name
const h1 = document.querySelector('#firstHeading')
h1.innerText = "Helga"

// Hide the body of the article
const wbody = document.getElementById('bodyContent')
wbody.style.visibily = 'hidden'

// Replace the Wikipedia logo with another picture
const wlogo = document.getElementsByClassName('mw-wiki-logo')
wlogo[0].style.backgroundImage = 'url(https://cdn.freebiesupply.com/logos/large/2x/pug-logo-png-transparent.png)'

// Stretch

// 1) get all the p tags
const ptags = document.querySelectorAll('p')

// 2) loop over all the ptags
ptags.forEach(node => {
	const txt = node.innerText;
	const newText = txt.replace('pug', 'spud')
	node.innerText = newText
})

let paragraphs = document.getElementsByTagName('p');
// or
// let paragraphs = document.querySelectorAll('p');
for (let p of paragraphs) {
	const pText = p.innerText;
	const newText = pText
		.split(' ')
		.map(word => {
			if (word === 'pug') {
				return 'spud';
			} else {
				return word;
			}
		})
		.join(' ');
	p.innerText = newText;
}
// or
for (let p of paragraphs) {
	const pText = p.innerText;
	const newText = pText
		.split('pug')
		.join('spud');
	p.innerText = newText;
}