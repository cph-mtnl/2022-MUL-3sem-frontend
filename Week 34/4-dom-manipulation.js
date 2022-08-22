/* *******************************************************************************************
                                      OBS!

Denne fil kan ikke køres direkte vha. "Run Code"/"Code Runner" extensionen.

Da denne fil referer til bla. document objectet, 
som kun er tilgængeligt når filen kører igennem en browser.

********************************************************************************************/

// document.getElementById
// Hiver fat i værdier fra html
// document er din html

// hiver fat i dit html element med id = "id"
document.getElementById("id")

// tager imod en CSS Selector

// Hiver vi fat i alle elementer med classen .my-button
const myButton = document.querySelector(".my-button")
// Altså rette på teksten på knappen
myButton.textContent = "New button text"

// Altså rette på html'en inde i knappen
myButton.innerHTML = "<p>New button text</p>"

myButton.style.color = "green"
myButton.style.display = "hidden"

myButton.classList.add(".my-button")
myButton.classList.toggle(".my-button")
myButton.classList.remove(".my-button")

// Hiver vi fat i elementet med id = "id"
document.querySelector("#id")

