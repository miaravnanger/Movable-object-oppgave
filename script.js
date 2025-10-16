//targeter blokken for å gjøre ting med den
const block = document.querySelector(".block");

//lager en variabel med verdien 5 som bestemmer hvor mange px blokken skal flytte seg per tastetrykk
let modifier = 5;

//eventlistener for å lytte etter knappene of få noe til å skje
document.addEventListener("keydown", (event) => {
  if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.key)) {
    event.preventDefault(); //bruker prefentdefault for å forhindre at piltastene scroller siden
  }
  const cs = getComputedStyle(block); //henter de beregnede CSS verdiene til blokken for å bruke det til å endre på posisjonen
  const { style } = block;
  // hent blokkstørrelse og vindusstørrelse
  const blockWidth = parseInt(cs.width);
  const blockHeight = parseInt(cs.height);
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  let top = parseInt(cs.top);
  let left = parseInt(cs.left);

  //  trekker fra og legger til 5px på left og top for å flytte den med piltastene
  switch (event.key) {
    case "ArrowUp":
      top -= modifier;
      break;
    case "ArrowDown":
      top += modifier;
      break;
    case "ArrowLeft":
      left -= modifier;
      break;
    case "ArrowRight":
      left += modifier;
      break;
  }
  //sørger for at blokken holder seg innenfor vinduet
  top = Math.max(0, Math.min(top, windowHeight - blockHeight));
  left = Math.max(0, Math.min(left, windowWidth - blockWidth));

  style.top = `${top}px`;
  style.left = `${left}px`;
});

//event listener for museklikk for å få blokken til å flytte seg der man klikker
document.addEventListener("click", (event) => {
  //henter blokken sin bredde og høyde
  const blockRect = block.getBoundingClientRect();

  //henter X og Y posisjonene til museklikket, og lager det i en variabel (minus halve størrelsen på blokken sånn at den lander midt under der man klikker)
  const newLeft = event.clientX - blockRect.width / 2;
  const newTop = event.clientY - blockRect.height / 2;

  //henter vindustørrelse
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  //sørger for at blokken holder seg innenfor vinduet
  const clampedLeft = Math.max(
    0,
    Math.min(newLeft, windowWidth - blockRect.width)
  );
  const clampedTop = Math.max(
    0,
    Math.min(newTop, windowHeight - blockRect.height)
  );
  //modifiserer posisjonene med de nye verdiene fra museklikket
  block.style.left = `${clampedLeft}px`;
  block.style.top = `${clampedTop}px`;
});
