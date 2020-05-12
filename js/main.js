// Selected the div with the id of "larry-the-lion"

// document is the root node (the upper most node in the DOM tree)
// a Node is a JavaScript object that represents an HTML element

// <node>.querySelector('<css-selector>') a method provided to us that allows us to select an individual Node within the DOM. Will only return the first node that matches the selector

const larryTheLion = document.querySelector("#larry-the-lion")
const teamSalmon = document.querySelector(".team.salmon")
// all DOM Nodes will have hte .querySelector method available so you can select sub nodes

// <node>.querySelectorAll('<css-selector>')
const teams = document.querySelectorAll('.team') // Returns a NodeList
// querySelectorAll will return to you all nodes that match the selector in an Array-like structure. Note: this is NOT an Array but does have some built in methods that mimic an array and can be iterated over using `for..of` or the `.forEach()`

if (false) {
    for (const node of teams) {
        console.log(node)
    }

    teams.forEach(node => console.log(node))
}

// alternative selectors
const toxicTim = document.getElementById('toxic-tim')

const teams2 = document.getElementsByClassName('team')
// getElementsByClassName is like querySelectorAll but instead of returning a NodeList it returns a HTMLCollection

// Exercises

const moneyBagsMichaelAndLarryTheLion = document.querySelectorAll('#larry-the-lion, #moneybags-michael')

const allTeamTealButFirst = document.querySelectorAll('.team.teal .doggo:not(:first-child)')

const secondDogs = document.querySelectorAll('.team .doggo:nth-child(2)')

// Select Surrounding Nodes/Navigating nodes

const inbreadDog = document.querySelector('#inbread-dog')

inbreadDog.previousElementSibling // returns the previous sibling to inbreadDog
inbreadDog.nextElementSibling // returns the next sibling to inbreadDog
inbreadDog.nextElementSibling.nextElementSibling // returns MoneybagsMichael (2 siblings over)
inbreadDog.parentElement // returns the parent node of inbreadDog

// <node>.matches()
// checks if a node matches a css selector... will return to you true or false
console.log(inbreadDog.matches('.doggo')) // true

// Manipulating nodes

inbreadDog.style // give us access to all the in-line(hardcoded -> written in the div itself) styles for a particular node
getComputedStyle(inbreadDog) // will return the computed/real style of the node

// Changing contents of a node

// <node>.innerHTML property allows us to get/set the HTML within the selectedNode
// <node>.outerHTML property allows us to get/set the Whole node

larryTheLion.outerHTML = "<div id='larry-the-lion' class='doggo fighter' style='color: red'><h2>Lettuce The Lion</h2></div>"

// <node>.innerText is a setter/getter for the text within a node