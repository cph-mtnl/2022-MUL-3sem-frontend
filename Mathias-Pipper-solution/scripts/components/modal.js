/* 
  Functions related to the Modal
*/

const escapeListener = (event) => {
  if (event.key === "Escape") {
    closePipModal();
  }
};

function openPipModal() {
  document.querySelector("html").style.overflow = "hidden";
  document.querySelector("#pip_modal").style.display = "block";
  document.addEventListener("keyup", escapeListener);
}

function closePipModal() {
  // Hide the modal
  document.querySelector("html").style.overflow = "auto";
  document.querySelector("#pip_modal").style.display = "none";
  document.removeEventListener("keyup", escapeListener);
  resetModal();
}

/*
 Functions related to input fields in Modal
*/

window.addEventListener("load", () => {
  setupPipCounter();
  setupAvatarGenerator();
});

function setupPipCounter () {
  const textarea = document.querySelector("#pip_textarea");

  textarea.addEventListener("input", (event) => {
    const pipLength = event.target.value.length;
    const amountSpan = document.querySelector("#current_amount");
    amountSpan.textContent = pipLength;
  });

};

const setupAvatarGenerator = () => {
  const usernameInput = document.querySelector("#username_input");
  usernameInput.addEventListener("blur", (event) => {
    const username = event.target.value;
    const imageHtml = `<img class="avatar-icon" src="https://avatars.dicebear.com/api/adventurer/98uhjkp${username}.svg" />`;
    document.querySelector("#avatar-span").innerHTML = imageHtml;
  });
};

/*
 Functions related to reset input fields in Modal
*/

const resetAvatar = () => {
  const defaultAvatar = '<i data-feather="user" class="unknown-icon"></i>';
  document.querySelector("#avatar-span").innerHTML = defaultAvatar;
  feather.replace();
};

const resetUsernameInput = () => {
  const usernameInput = document.querySelector("#username_input");
  usernameInput.value = "";
};

const resetPipTextarea = () => {
  const textarea = document.querySelector("#pip_textarea");
  textarea.value = "";
  const amountSpan = document.querySelector("#current_amount");
  amountSpan.textContent = 0;
};

const resetModal = () => {
  resetUsernameInput();
  resetAvatar();
  resetPipTextarea();
};
