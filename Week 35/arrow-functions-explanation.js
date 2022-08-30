// Hvad er arrow functions ?
function siteLoaded() {
  console.log("hello my site loaded");
}
// Den måde vi er vant til
window.addEventListener("load", siteLoaded);

// Definere funktion direkte i event listener
window.addEventListener("load", function loaded() {
  console.log("my new function");
});

// Definere funktion direkte i event listener som anonym funktion
window.addEventListener("load", function () {
  console.log("my new function");
});

// Definere funktion direkte i event listener som anonym arrow funktion
window.addEventListener("", () => {
  console.log("my new function");
});
