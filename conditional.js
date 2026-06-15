// if else condition

var light = "green"


if (light == "green") {
    console.log("Go!");
}
else if (light == "Yellow") {
    console.log("Wait");
}
else if (light == "Red") {
    console.log("stop");
}
else {
    console.log("Invalid light color");
}
console.log("outside If");

//switch codition

var signal = "white"

switch(signal) {
    case "green":
        console.log("Go!")
        break;
    case "yellow":
        console.log("Wait!")
        break;
    case "red":
        console.log("Stop!")
        break;
    default:
        console.log("Invalid signal color")
}
