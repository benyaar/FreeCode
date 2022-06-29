//1
function testSize(num) {
    // Only change code below this line

    if (num < 5) return "Tiny";

    else if (num < 10) return "Small";

    else if (num < 15) return "Medium";

    else if (num < 20) return "Large";

    else return "Huge";

    // Only change code above this line
}

// Change this value to test
testSize(7);
//2
function golfScore(par, strokes) {
    // Only change code below this line

    if (strokes === 1) return "Hole-in-one!";

    else if ((strokes - par) <= -2) return 'Eagle';

    else if ((strokes - par) === -1) return 'Birdie';

    else if (strokes === par) return 'Par';

    else if ((strokes - par) === 1) return 'Bogey';

    else if ((strokes - par) === 2) return 'Double Bogey';

    else return 'Go Home!';
    // Only change code above this line
}

// Change these values to test
golfScore(5, 1);
//3
function caseInSwitch(val) {
    var answer = "";
    // Only change code below this line

    switch (val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
    }


    // Only change code above this line
    return answer;
}

// Change this value to test
caseInSwitch(1);