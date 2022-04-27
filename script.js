// Setting up the gameBoard module
let gameBoardModule = (function() {
    let gameBoard = [];
    return {};
})();

// Setting up the displayController module
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

// TODO: Create inputs for name, and assignedXO - asking them for their preference (maybe a pop up message box?)
// TODO: Do I need to assign player numbers?  Might be unneccesary.  Something to check later.

let Justin = createPlayer("Justin", 1, "X");
let James = createPlayer("James", 2, "O");