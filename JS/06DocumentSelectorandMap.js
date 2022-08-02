console.log("Day 6 it Dcoment")

// console.log(document)

// myh1 = document.getElementsByTagName("h1")
// console.log(myh1)
// myh1[1].innerText = "updated by JS"
// console.log(myh1[1].innerText)
// myh1[0].innerHTML = "<span>new thing in H1</span>"

idP = document.getElementById("p")
idP.innerText = "New update"
console.log(idP)
cls = document.getElementsByClassName("para")
console.log(cls)



query  = document.querySelector("h1")
query = document.querySelectorAll(".para")
console.log(query)


a = document.querySelectorAll("h1")





function addSpl(){
    text = "Now having spl class"
    a[1].classList.add("spl")
    text = text+ "NEW addderd"
    a[1].innerText = text
}

function removeSpl(){
    a[1].classList.remove("spl")
    a[1].innerText = "removed spl class"
}

lis = document.getElementById("mylist")
function addtext(){
     // create a new div element
  const newDiv = document.createElement("li");

  // and give it some content
  namem = prompt("enter you name")
  const newContent = document.createTextNode(namem);

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("mylist");
  document.body.insertBefore(newDiv, currentDiv);

}