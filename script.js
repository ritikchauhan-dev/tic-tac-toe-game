let boxes = document.querySelectorAll('.box');
let player1 = document.querySelector('.player1');
let player2 = document.querySelector('.player2');
let newGameButton = document.querySelector('.new-game');
let lastmssg = document.querySelector('.last-mssg');
let turnO = 1;
const New = new Audio('new.mp3'); // Replace with the path to your audio file
const Xsound = new Audio('Xsound.mp3');
const Osound = new Audio('Osound.mp3'); // Replace with the path to your audio file
const winnerSound = new Audio('congratssound.mp3'); // Replace with the path to your audio file
let main = document.querySelector('main');
newGameButton.addEventListener('click', () => {
    boxes.forEach((box) => {
        New.currentTime = 0;
        New.play();
        box.innerText = '';
        box.style.pointerEvents = "auto";
        player1.style.background = "linear-gradient(to top left, #ff89eb, #5ec0f8)";
        player2.style.background = "linear-gradient(to top left, #ff89eb, #5ec0f8)";
        main.style.display = "block";
        lastmssg.style.display = "none";
    });
});
const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach((box) => {
    box.addEventListener('click', () => {

        if (turnO === 1) {
            Xsound.currentTime = 0;
            Xsound.play(); // Play the sound on click
            box.innerText = "X";
            player1.style.background = "linear-gradient(to top left,rgba(252, 176, 208, 0.66),rgba(129, 209, 255, 0.55))";
            turnO = 0;
            player2.style.background = "linear-gradient(to top left,rgb(245, 84, 218),rgb(76, 186, 250))";
            // player2.style.boxShadow = '5px 5px 15px rgba(228, 0, 0, 0.5)';
            box.style.color = "white";
            box.style.pointerEvents = "none";

        } else {
            Osound.currentTime = 0;
            Osound.play(); // Play the sound on click
            box.innerText = "O";
            player2.style.background = "linear-gradient(to top left,rgba(252, 176, 208, 0.66),rgba(129, 209, 255, 0.55))";
            turnO = 1;
            player1.style.background = "linear-gradient(to top left,rgb(245, 84, 218),rgb(76, 186, 250))";
            // player1.style.boxShadow = '5px 5px 15px rgba(216, 11, 11, 0.5)';
            box.style.color = "black";
            box.style.pointerEvents = "none";
        }
        checkWinner();
    });
});

const checkWinner = () => {
    for (pattern of winPatterns) {
        let [a, b, c] = pattern;
        if (boxes[a].innerText === boxes[b].innerText && boxes[a].innerText === boxes[c].innerText && boxes[a].innerText !== '') {
            boxes.forEach((box) => {
                box.style.pointerEvents = "none";
            });
            winnerSound.currentTime = 0;
            winnerSound.play(); // Play the winner sound
            main.style.display = "none";
            lastmssg.style.display = "block";
            lastmssg.style.fontSize = "7rem";
            lastmssg.style.margin="16vw 0" ;
            lastmssg.innerText = `${boxes[a].innerText} is the winner !`;
            lastmssg.style.color = "white" ;
            return;
        }
    }
};