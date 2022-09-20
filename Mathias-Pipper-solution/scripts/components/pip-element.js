const createPip = (username, text, id) => {
  const outerDiv = document.createElement("div");
  outerDiv.classList.add("pip-card");
  outerDiv.id = id;

  // Setup img element
  const img = document.createElement("img");
  img.classList.add("pip-avatar");
  img.src = `https://avatars.dicebear.com/api/adventurer/98uhjkp${username}.svg`;

  // Setup pip content div
  const innerDiv = document.createElement("div");
  innerDiv.classList.add("pip-content");

  const h4 = document.createElement("h4");
  h4.textContent = username;

  const p = document.createElement("p");
  p.textContent = text;

  // Put everything together
  innerDiv.append(h4);
  innerDiv.append(p);
  outerDiv.append(img);
  outerDiv.append(innerDiv);
  return outerDiv;
};

const createPipWithString = (username, text, id) => {
  return `<div class="pip-card" id=${id}>
  <img
    class="pip-avatar"
    src="https://avatars.dicebear.com/api/adventurer/98uhjkp${username}.svg"
  />
  <div class="pip-content">
    <h4>${username}</h4>
    <p>
      ${text}
    </p>
  </div>
</div>`;
}