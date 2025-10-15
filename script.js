//targeter blokken for å gjøre ting med den
const block = document.querySelector(".block");

//lager en variabel med verdien 5 som bestemmer hvor mange px blokken skal flytte seg per tastetrykk
let modifier = 5;

//eventlistener for å lytte etter knappene of få noe til å skje
document.addEventListener("keydown", (event) => {
  if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.key)) {
    event.preventDefault(); //bruker prefentdefault for å forhindre at piltastene scroller siden
  }
  const cs = getComputedStyle(block); //henter de faktiske CSS verdiene til blokken for å bruke det til å endre på posisjonen
  const { style } = block;
  //  trekker fra og legger til 5px på left og top verdiene fra css'en for å flytte den med piltastene
  switch (event.key) {
    case "ArrowUp":
      style.top = `${parseInt(cs.top) - modifier}px`;
      break;
    case "ArrowDown":
      style.top = `${parseInt(cs.top) + modifier}px`;
      break;
    case "ArrowLeft":
      style.left = `${parseInt(cs.left) - modifier}px`;
      break;
    case "ArrowRight":
      style.left = `${parseInt(cs.left) + modifier}px`;
      break;
  }
});

//event listener for museklikk for å få blokken til å flytte seg der man klikker
document.addEventListener("click", (event) => {
	//henter blokken sin bredde og høyde
	const blockRect = block.getBoundingClientRect();

//henter X og Y posisjonene til museklikket, og lager det i en variabel (minus halve størrelsen på blokken sånn at den lander midt under der man klikker)
	const newLeft = event.clientX - blockRect.width / 2;
	const newTop = event.clientY - blockRect.height / 2;

//modifiserer posisjonene fra CSS'en med de nye verdiene fra museklikket 
	block.style.left = `${newLeft}px`; 
	block.style.top = `${newTop}px`;
});