// Get the Form element from our the DOM.
const form = document.querySelector("#note-form");

// Add an event listener on the form, listening for the "submit" event
form.addEventListener("submit", (event) => {
  // We prevent the default behaviour of the form, so it doesnt reload the page.
  event.preventDefault();

  // Get the user input value from the title input
  const title = document.querySelector("#title").value;

  // Get the user input value from the note textarea
  const note = document.querySelector("#note").value;

  // Call our fillTemplate function, which accepts title and note as parameters.
  // And then this method handles the template and adding it to the DOM.
  fillTemplate(title, note);
});

// A seperate function, taking title and note as input parameter.
// This function will handle the template and adding it to the DOM.
function fillTemplate(title, note) {
  // Get our Template from the DOM
  const template = document.querySelector("#my-template");

  // We take a copy of the Template
  const newNode = document.importNode(template.content, true);

  // We change the placeholder value in the template, to the actual value the user typed in earlier.
  // We do this for both the h1 title element, and p note element.
  newNode.querySelector("h1").textContent = title;
  newNode.querySelector("p").textContent = note;

  // Once the template placeholder values has been overwritten, and it has all the user values it needs.

  // We get the div with the id="all-new-notes" and adds the template copy to the the DOM the user can see.
  document.querySelector("#all-new-notes").appendChild(newNode);

  // We have now filled the Template with user information, and added it to the DOM, and hereby showing it to the user.
}
