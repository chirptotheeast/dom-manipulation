// const body = document.body
// body.append("Hello World") 

//appendchild you can only append html element like divs, tags, or anchor elements

//body.append('Hello world'), append allows you to append strings but not html elements
//with append()  can also pass in multiple strings ('Hello World', 'Bye')

// How to create an element 
// const div = document.createElement('div')
// const strong = document.createElement('strong')
// strong.innerText = "Hello World 2"
// div.append(strong)

//one way to set text = .innerText
// div.innerText = "Hello World ";

//another way to set text is 
// div.textContent = "Hello World 2 "


// div.innerHTML="<strong>Hello World 2</strong> "
//security concerrns using innerHTML anyone can maliciously add code with this method
//this is only way in JS to add html from a string into a JS obj

//need to append element to our body to actually have on page
// body.append(div) 

// const div = document.querySelector('div')
// console.log(div.textContent)
//text contnent will print out the exact text context/all spacing/ inside of div 
// console.log(div.innerText)
//inner text just displays text exactly as you see it inside of html

const body = document.body
const div = document.querySelector('div')
const spanHi = document.querySelector('#hi')
const spanBye = document.querySelector('#bye')

// console.log(spanHi.getAttribute('id'))
// console.log(spanHi.getAttribute('title'))
console.log(spanHi.id)
console.log(spanHi.getAttribute('name'))
// console.log(spanHi.setAttribute('id', "ssodfpis"))

// console.log(spanHi.id = 'rookyoo')
// spanHi.removeAttribute("title")
// console.log(spanHi.dataset)
// console.log(spanHi.dataset.test)
// console.log(spanHi.dataset.longerName)

spanHi.dataset.newName = 'aselfdams'

// spanHi.classList.add("new-class")
// spanHi.classList.remove("h1")
spanHi.classList.toggle('h2')
//toggle will remove h2 if it exists or add it if it doesn't exist 

spanHi.style.backgroundColor = "red"