// Setting up the gameBoard module
let gameBoardModule = (function() {
    let gameBoard = ["X"];
    return {gameBoard};
})();

// Setting up the displayController module to control who's turn it is
let displayControllerModule = (function() {
    let testF = () => {console.log("testing private function call inside of a module object.....")};
    return {testF};
})();

// Setting up the player factory function
let createPlayer = (playerName, playerNumber, assignedXO) => {
    let getPlayerName = () => { playerName;
    console.log("This is the name of player " + playerNumber + "....." + playerName); }
    return {getPlayerName, playerName, playerNumber, assignedXO};
};

// Setting up the render module for array display to gameboard
let renderArrayToScreenModule = (function() {
    
    // TODO: Refactor this (dont need to query select a gridbox - target from click will take care of that) once I have the click event module setup 
    const gridBoxes = document.querySelectorAll(".grid-box");
    gridBoxes[0].textContent = gameBoardModule.gameBoard;
    console.log("show me the array as seen inside of renderArrayToScreenModule...", gameBoardModule.gameBoard)
    console.log("show me the node list of the gridBoxes as seen inside of renderArrayToScreenModule...", gridBoxes);
    return {};
})();

// TODO: Create inputs for name, and assignedXO - asking them for their preference (maybe a pop up message box?)
// TODO: Do I need to assign player numbers?  Might be unneccesary.  Something to check later.

let Justin = createPlayer("Justin", 1, "X");
let James = createPlayer("James", 2, "O");
renderArrayToScreenModule;