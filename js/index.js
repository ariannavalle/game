const gameBoard = document.getElementById("canvas")
const gameIntro = document.getElementById("game-intro")
const doodlerPlayer = document.getElementById("doodler")
const ronaPlayer = document.getElementById("rona")
const nyanPlayer = document.getElementById("nyan")
const playAgain = document.getElementById("play-again")
playAgain.style.display="none";

doodlerPlayer.addEventListener("click", (event) => {
    gameIntro.style.display = "none";
    gameBoard.style.display = "inline-block";
    document.body.style.backgroundImage = "url('./images/planet.jpg')";
    document.body.style.backgroundColor = "#14132e"
    const game = new Game();
    currentPlayer = "doodler"
    player = doodler[0]
    playerRight = doodler[0]
    playerLeft = doodler[1]
    game.init();
});

ronaPlayer.addEventListener("click", (event) => {
    gameIntro.style.display = "none";
    gameBoard.style.display = "inline-block";
    document.body.style.backgroundImage = "url('./images/city.jpg')";
    document.body.style.backgroundColor = "#234859"
    const game = new Game();
    currentPlayer = "rona"
    player = rona[0]
    playerRight = rona[0]
    playerLeft = rona[0]
    game.init();
});

nyanPlayer.addEventListener("click", (event) => {
    gameIntro.style.display = "none";
    gameBoard.style.display = "inline-block";
    document.body.style.backgroundImage = "url('./images/outer-space.jpg')";
    document.body.style.backgroundColor = "#110628"
    const game = new Game();
    currentPlayer = "nyan"
    player = nyan[0]
    playerRight = nyan[0]
    playerLeft = nyan[0]
    game.init();
});

playAgain.addEventListener("click", (event) => {
    location.reload(true)
});