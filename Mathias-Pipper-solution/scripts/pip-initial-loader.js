window.addEventListener("load", () => {
  const pips = await getPips();
  
  pips.sort((a, b) => {
    return b.idpip - a.idpip
  }).forEach((element) => {
    const pipElement = createPip(element.username, element.text, element.idpip);
    document.querySelector("#pips_placeholder").appendChild(pipElement);
  });
});
