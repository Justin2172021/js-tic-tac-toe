// Setting up the player factory function
let createPlayer = () => {

    // Loop through two times to capture the players first name, and auto assign their player number and marker letter
    for (let i = 0; i < 4; i++) {
        
        if (gameBoardModule.playerArray.length >= 6) {
            gameBoardModule.makePlayerMove();
            break;

        } else if (gameBoardModule.playerArray.length == 0 ) {
            let playerName = prompt("What is your first name?");
            
            if (playerName == "" || playerName == null) {
                alert("Sorry, name cannot be blank!");
                continue;
            }

            let playerNumber = 1;
            let assignedXO = "X";
            alert("You are player 1, and your assigned letter is X!");
            gameBoardModule.playerArray.push(playerName, playerNumber, assignedXO);
            console.log("Show me the contents of the playerArray....", gameBoardModule.playerArray);
            // return {playerName, playerNumber, assignedXO};

        } else if (gameBoardModule.playerArray.length !== 0) {
            let playerName = prompt("What is your first name, sir?");
            
            if (playerName == "" || playerName == null) {
                alert("Sorry, name cannot be blank!");
                continue;
            }

            let playerNumber = 2;
            let assignedXO = "O";
            alert("You are player 2, and your assigned letter is O!");
            gameBoardModule.playerArray.push(playerName, playerNumber, assignedXO);
            console.log("Show me the contents of the playerArray....", gameBoardModule.playerArray);
            // return {playerName, playerNumber, assignedXO};
        }
    }

    // let getPlayerName = () => { playerName;
    // console.log("This is the name of player " + playerNumber + "....." + playerName); }
    // return {getPlayerName, playerName, playerNumber, assignedXO};
};

// Setting up the gameBoard module
let gameBoardModule = (function() {
    let gameBoard = [];
    let playerArray = [];

    // Publicly exposed function to envoke next player move
    let makePlayerMove = () => {

        // Checks for two player submission and gameBoard array doesn't spill over gridboxes
        if (playerArray.length == 6 && gameBoard.length < 9) {
            
            // Controls for player moves
            if (gameBoard.length == 0) {
                alert("Player 1, please make your move!");
                gameBoard.push(playerArray[2]);
                console.log("Show me the current gameBoard Array...", gameBoard);
                
            } else if (gameBoard[gameBoard.length - 1] == "X") {
                alert("Player 2, please make your move!");
                gameBoard.push(playerArray[5]);
                console.log("Show me the current gameBoard Array...", gameBoard);
                
            } else if (gameBoard[gameBoard.length -1] == "O") {
                alert("Player 1, please make your move!");
                gameBoard.push(playerArray[2]);
                console.log("Show me the current gameBoard Array...", gameBoard);
            }
        };
    }
    return {gameBoard, playerArray, makePlayerMove};
})();

// Setting up the displayController module to render array to DOM
let displayControllerModule = (function() {
    const makeMove = document.querySelectorAll(".game-board-button");

    // Start indexing and looping through each button node 
    let index = 0;
    makeMove.forEach(makeMoves => {
        makeMoves.dataset.linkedButton = index;
        makeMoves.addEventListener("click", renderArrayToScreen);

        function renderArrayToScreen() {
            const gridBoxes = document.querySelectorAll(".grid-box");
            
            // Start indexing and looping through each grid box node
            let index = 0;
            gridBoxes.forEach(gridBox => {
                gridBox.dataset.linkedButton = index;

                // Render clicked play on the correct grid box and display on DOM
                if (gridBox.getAttribute("data-linked-button") == makeMoves.getAttribute("data-linked-button")) {
                    gridBox.textContent = gameBoardModule.gameBoard[gameBoardModule.gameBoard.length - 1];
                    console.log("show me my makeMoves linked button value...", makeMoves.dataset.linkedButton);
                    console.log("show me my gridBox linked button value...", gridBox.dataset.linkedButton);
                }

            index++;
            })

        gameBoardModule.makePlayerMove();           
        }

    index++;
    })

    // Listen for click to start the game
    const startGameButton = document.querySelector(".start-game-button");
    startGameButton.addEventListener("click", createPlayer);
    
    // // Test private function **remove if not needed later**
    // let testF = () => {console.log("testing private function call inside of a module object.....")};
    return {};
})();