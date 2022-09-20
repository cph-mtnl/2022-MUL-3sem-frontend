const getPips = async () => {
  const pips = await fetch("http://localhost:8000/pip");
  return pips.json();
};

function postPip(pip) {
  return fetch("http://localhost:8000/pip", {
    method: "POST",
    body: JSON.stringify(pip),
  });
};
