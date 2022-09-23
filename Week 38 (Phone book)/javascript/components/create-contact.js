/**
 * Takes a clone of the template, and fills the information from the Contact object,
 * into the template.
 * @param {object} contact
 * @returns {HTMLElement} Template with contact information
 */
function createContactElement(contact) {
  // Get the template
  const template = document.querySelector("#contact-card");
  // Clone template
  const clone = document.importNode(template.content, true);
  // Fill information into the cloned templated
  clone.querySelector("#temp").id = contact.id;
  clone.querySelector("#name").textContent = contact.name;
  clone.querySelector("#surname").textContent = contact.surname;
  clone.querySelector("#company").textContent = contact.company;
  clone.querySelector("#phone").textContent = contact.phone;
  clone.querySelector("#email").textContent = contact.email;
  // Return the filled node
  return clone;
}
