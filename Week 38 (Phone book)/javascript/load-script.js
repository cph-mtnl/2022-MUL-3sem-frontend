window.addEventListener("load", async () => {
  // Get data from backend
  const data = await getData();
  // Display each of the data elements.
  data.forEach((contact) => {
    const newNode = fillContactTemplate(contact);
    displayNewNode(newNode);
  });
});
