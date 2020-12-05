//variable to store the divs on the html page for the color div and the rgb string
var colorDiv = document.getElementById("color");
var rgbString = document.getElementById("rgbDisplay");

//sets variables and event listeners to all 9 buttons
var rVal = 0;
var r = document.getElementsByClassName("r");

for(var i = 0; i < r.length; i++) {
    r[i].addEventListener("click", onClick);
}

var gVal = 0;
var g = document.getElementsByClassName("g");

for(var j = 0; j < g.length; j++) {
    g[j].addEventListener("click", onClick);
}

var bVal = 0;
var b = document.getElementsByClassName("b");

for(var k = 0; k < b.length; k++) {
    b[k].addEventListener("click", onClick);
}

//click function that pulls the number stored in the data of the button
function onClick(event) {
        //sets a variable named num to the value stored in button
        var num = parseInt(event.target.getAttribute("data-color-num"), 10);
        //long if statements to check if the button pressed matches a r, g, or b array value
        if((event.target == r[0] || event.target == r[1] || event.target == r[2]) && rVal < 255) {
                //if statement to check and make sure the value is not going over 255
                if(rVal > 245 && num == 10) {
                        num = 255 - rVal;
                }
                //same check but for the buttons with 5 stored as their data values
                else if(rVal > 250 && num == 5) {
                        num = 255 - rVal;
                }
                //otherwise add the number tot he value
                rVal += num;
        }
        else if((event.target == g[0] || event.target == g[1] || event.target == g[2]) && gVal < 255) {
                if(gVal > 245 && num == 10) {
                        num = 255 - gVal;
                }
                else if(gVal > 250 && num == 5) {
                        num = 255 - gVal;
                }
                gVal += num;
        }
        else if((event.target == b[0] || event.target == b[1] || event.target == b[2]) && bVal < 255) {
                if(bVal > 245 && num == 10) {
                        num = 255 - bVal;
                }
                else if(bVal > 250 && num == 5) {
                        num = 255 - bVal;
                }
                bVal += num;
        }

        //changes the color div to display the updated rgb value
        colorDiv.style.backgroundColor = "rgb(" + rVal + "," + gVal + "," + bVal + ")";
        //changes the string under the div to display the new rgb value
        rgbString.innerHTML = "Current Color: rgb(" + rVal + ", " + gVal + ", " + bVal + ")";
}

//just a reset function instead of reloading the page... thought I'd add this
function reset() {
        rVal = 0;
        gVal = 0;
        bVal = 0;

        colorDiv.style.backgroundColor = "rgb(" + rVal + "," + gVal + "," + bVal + ")";
        rgbString.innerHTML = "Current Color: rgb(" + rVal + ", " + gVal + ", " + bVal + ")";
}