const form = document.querySelector("#note-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = document.querySelector("#title").value;
  const note = document.querySelector("#note").value;
  console.log(title, note);
  fillTemplate(title, note);
});

function fillTemplate(title, note) {
  const template = document.querySelector("#my-template");
  const newNode = document.importNode(template.content, true);
  newNode.querySelector("h1").textContent = title;
  newNode.querySelector("p").textContent = note;
  document.querySelector("#all-new-notes").appendChild(newNode);
}
