function beginNewPipProcess() {
  openPipModal();
}

/**
 * @savePip this function takes values from the input fields and posts them to the backend
 */
async function savePip() {
  // Get user values
  const pip = document.querySelector("#pip_textarea").value;
  const username = document.querySelector("#username_input").value;
  // Save pip
  const result = await postPip({ text: pip, username });
  if (result.status === 201) {
    const json = await result.json();
    resetModal();
    closePipModal();
    renderNewPip(json);
  }
}

function renderNewPip(pipAsJson) {
  const id = pipAsJson.id ?? pipAsJson.idpip

  const pipElement = createPip(
    pipAsJson.username,
    pipAsJson.text,
    id
  );

  document.querySelector("#pips_placeholder").append(pipElement);
}
