// arr[0] --> Number of the question
// arr[1] --> Answer of the User
var i = 0;
var f = 0;
var a = 0;
var l = 0;

function israeliMove() {
    var israeliElem = document.getElementById("israeliBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= i*20) {
            clearInterval(id);
        } else {
            width++;
            israeliElem.style.width = width + '%';
        }
    }
}

function frenchMove() {
    var frenchElem = document.getElementById("frenchBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= f*20) {
            clearInterval(id);
        } else {
            width++;
            frenchElem.style.width = width + '%';
        }
    }
}

function americanMove() {
    var americanElem = document.getElementById("americanBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= a*20) {
            clearInterval(id);
        } else {
            width++;
            americanElem.style.width = width + '%';
        }
    }
}

function latinoMove() {
    var latinoElem = document.getElementById("latinoBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= a*20) {
            clearInterval(id);
        } else {
            width++;
            latinoElem.style.width = width + '%';
        }
    }
}


function Q(arr) {
    console.log("answer question " + arr[0] + " : " + arr[1]);
    console.log(typeof (arr[0]));
    document.getElementById("Q" + arr[0]).style.display = "none"; //none
    document.getElementById("Q" + ++arr[0]).style.display = "block";
    switch (arr[1]) {
        case 'i':
            i++
            break;
        case 'f':
            f++
            break;
        case 'a':
            a++
            break;
        case 'l':
            l++
            break;
        default:
            break;
    }
    console.log("Points i : " + i);

    if (document.getElementById("Q6").style.display == "block") {
        var answer = "";
        if ((i == 3) || (i == 4)) {
            console.log("You have Israeli vibes");
            answer = "You have Israeli vibes";

        } else if (i == 5) {
            console.log("You're 100% Israeli");
            answer = "You're 100% Israeli";

        } else if ((f == 3) || (f == 4)) {
            console.log("You have French vibes");
            answer = "You have French vibes";

        } else if (f == 5) {
            console.log("You're 100% French");
            answer = "You're 100% French";

        } else if ((a == 3) || (a == 4)) {
            console.log("You have American vibes");
            answer = "You have American vibes";

        } else if (a == 5) {
            console.log("You're 100% American");
            answer = "You're 100% American";

        } else if ((l == 3) || (l == 4)) {
            console.log("You have Latino vibes");
            answer = "You have Latino vibes";

        } else if (l == 5) {
            console.log("You're 100% Latino");
            answer = "You're 100% Latino";

        } else {
            console.log("You're a wonderful mix of nationalities");
            answer = "You're a wonderful mix of nationalities";
        }
        document.getElementById("text-result").innerHTML = answer + " !";

        israeliMove();
        frenchMove();
        americanMove();
        latinoMove();

    }
}


