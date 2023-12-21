console.log("hello");
let eventListener;

function openPipModal() {
  console.log("Creating new pip...");
  document.querySelector("html").style.overflow = "hidden";
  document.querySelector("#pip_modal").style.display = "block";
  document.addEventListener("keyup", escapeListener);
}

function closePipModal() {
  document.querySelector("html").style.overflow = "auto";
  document.querySelector("#pip_modal").style.display = "none";
  document.removeEventListener("keyup", escapeListener);
}

function toggleKeyEvent() {}

const escapeListener = (event) => {
  if (event.key === "Escape") {
    closePipModal();
  }
};

window.addEventListener("load", () => {
  document.querySelector("#pip_textarea").addEventListener("input", (event) => {
    const pipLength = event.target.value.length;
    document.querySelector("#current_amount").textContent = pipLength;
  });
});

function savePip() {
  console.log("saving new pip");
}
