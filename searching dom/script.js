console.log(document.getElementsByClassName("card-title"))
console.log(document.getElementsByTagName("a"))
let ctitle = document.getElementById("firstcardtitle")
ctitle.style.color = "red"
let ctitles = document.querySelectorAll(".card-title")
ctitles[0].style.color = "blue"
ctitles[1].style.color = "red"
ctitles[2].style.color = "green"
console.log(ctitles)

document.querySelector(".this").style.color = "black"
document.querySelector(".this").style.background = "red"

console.log(document.getElementsByTagName("a"))
console.log(document.querySelector(".card"))
