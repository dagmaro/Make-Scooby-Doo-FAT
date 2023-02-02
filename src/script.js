const canvas = document.querySelector("#canvas-screen");
const kickOffBtnDOM = document.querySelector("#start-game");
const portadaDOM = document.querySelector("#portada-de-inicio");
const gameOverScreenDOM = document.querySelector("#game-over");
const restartBtnDOM = document.querySelector("#restart-game");
const ctx = canvas.getContext("2d");
let game;

const startGame = () => {
  portadaDOM.style.display = "none";
  canvas.style.display = "block";
  game = new Game();
  game.gameLoop()
};
const endGame = () => {
  gameOverScreenDOM.style.display = "none";
  portadaDOM.style.display = "block";
};
const moverDwayneDer = (event) => {
  if (event.code === "ArrowRight") game.dwayne.movimientoDerecha();
};
const moveDwayneIzq = (event) => {
  if (event.code === "ArrowLeft") game.dwayne.movimientoIzquierda();
};
const bajarPollito = (event) => {
  if (event.code === "KeyS") {
    game.dwayne.bajarPollito();
  }
};
const subePollito = (event) => {
  if (event.code === "ArrowUp") {
    game.dwayne.jumpPollito();
  }
};
const originalPollito = (event) => {
  if (event.code === "Space") {
    game.dwayne.subirPollito();
  }
};
const movimientoAbajoDwayne = (event) => {
  if (event.code === "ArrowDown") {
    game.dwayne.movimientoAbajo();
  }
};

// ADD EVENT LISTENERS

kickOffBtnDOM.addEventListener("click", startGame);
window.addEventListener("keydown", moverDwayneDer);
window.addEventListener("keydown", moveDwayneIzq);
window.addEventListener("keydown", subePollito);
window.addEventListener("keydown", bajarPollito);
window.addEventListener("keydown", originalPollito);
window.addEventListener("keydown", movimientoAbajoDwayne);
restartBtnDOM.addEventListener("click", endGame);
