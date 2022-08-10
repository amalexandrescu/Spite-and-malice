
const playerCardElements = document.getElementsByClassName(
  "cards-available-player"
)[0].children;

const opponentCardElements = document.getElementsByClassName(
  "cards-available-opponent"
)[0].children;

function highlight(event) {
  console.log(event);
  const el = event.target;

  // TODO: If card already selected, deselect it.
  // TODO: If another card is already selected, deselect it and select the new one.

  el.classList.add("glow-style");
}

function unhighlight(event) {
  const el = event.target;
  el.classList.remove("glow-style");
}

for (let el of playerCardElements) {
  el.addEventListener("click", highlight);
}

