const prompt = require("prompt-sync")();
/**
 * @function menu
 * @returns {string}
 */
function menu() {

    while (true) {
        console.log("");
        console.log("                       THE CARD GAME                         ");
        console.log();
        console.log("              ---------------------------------                ");
        console.log("");
        console.log("                        1 - PLAY                             ");
        console.log("                        2 - HOW TO PLAY                      ");
        console.log("                        3 - EXIT                             ");
        console.log("");
        console.log("              ---------------------------------                ");
        console.log("");
        let answer = +prompt("Welcome, so what you wanna do? Chose 1 or 2 or 3: ");
        console.log('');
        if (answer == 1) {
            return play();
        }
        else if (answer == 2) {
            console.log("This game is the same as rock papper and scisors, but instead of these you use elements: \n water(1), fire(2) and plant(3); and so water beats fire, fire beats plant and plant beats water. You got 3 rounds to beat us and so, good luck");
        }
        else if (answer == 3) {
            break;
        }
        else {
            break;
        }
    }

}

/**
 * @function play
 * @returns {string}
 */

function play() {
    const water = 1;
    const fire = 2;
    const plant = 3;
    let playerOne = 0;
    let bot = 0;
    let botChoice = [1, 2, 3]
    let hisChoice = (botChoice[Math.floor(Math.random() * 3)]);
    console.log('Type 1 for water, 2 for fire and 3 for plant');
    console.log('');
    for (let i = 0; i <= 3; i++) {
        let myChoice = +prompt("Choose an element: ");
        if (myChoice == 1 && hisChoice == 2 || myChoice == 2 && hisChoice == 3 || myChoice == 3 && hisChoice == 1) {
            playerOne++;
            console.log(hisChoice);
            console.log('You won the round');
            console.log('');
        }
        else if (hisChoice == 1 && myChoice == 2 || hisChoice == 2 && myChoice == 3 || hisChoice == 3 && myChoice == 1) {
            bot++;
            console.log(hisChoice);
            console.log('I won the round');
            console.log('');
        }
        else if (myChoice == hisChoice) {
            console.log(hisChoice);
            console.log("That's a draw, none of us won");
            console.log('');
        }
        if (i == 2) {
            console.log("Your score: " +playerOne);
            console.log("My score: " +bot);
            if (playerOne > bot) {
                console.log('Congrats you won, not bad for a human, but next time is my time, i will beat you');
                console.log('');
            }
            else if (playerOne < bot) {
                console.log('Hehe, i won. Better luck next time');
                console.log('');
            }
            else if (playerOne == bot) {
                let demand = prompt("DRAWWW! Man, That's a tie, do you wanna play again(yes/no): ");
                if(demand === "yes"){
                    console.log('');
                    play();
                }
                else if(demand === "no"){
                    console.log("Okay, well played champion, see ya next time");
                    console.log('');
                    break;
                }
                console.log('');
            }
            break;
        }

    }
}

menu();