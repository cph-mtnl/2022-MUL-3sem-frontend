const updateForm = document.querySelector("#update-contact-form");

updateForm.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Hej fra update form");

  const contact = {
    name: document.querySelector("#update-name").value,
    surname: document.querySelector("#update-surname").value,
    company: document.querySelector("#update-company").value,
    phone: document.querySelector("#update-phone").value,
    email: document.querySelector("#update-email").value,
  };

  const id = document.querySelector("#id-temp").innerHTML;
  const response = putData(id, contact);
  if (response.status === 200) {
    const newNode = createContactElement(contact);
    const oldNode = document.querySelector("#" + id).node;
    oldNode.parentNode.replaceChild(newNode, oldNode);
  }
});
