//general variables to keep track of the turn, empty array for storing piece placments, if the game has ended, indentifying the prompt div, and updating the prompt div
var turn = 1;
var arr = [["","",""],["","",""],["","",""]];
var gameover = false;
var win = false;
var prompter = document.getElementById("prompt");
prompter.innerHTML = "It is O's turn";

//first class for the X's player, it takes the x and y values stored from the rectangle the player clicks on and adds an X to that area on the board while removing the rectangle
//this in turn makes it so the players cannot use this space again
class ecks {
    constructor(x, y, id) {
        this.x = x;
        this.y = y;
        this.id = id;
    }

    //render function to draw the X shape on the board, this creates a parent of the svg element by using its ID and then appends a new child element styled to look like an X
    render() {
       var svg = document.getElementById("playboard");

       var rectangle = document.getElementById(this.id);
       var parent = rectangle.parentNode;
       parent.removeChild(rectangle);

       var line = document.createElementNS("http://www.w3.org/2000/svg","line");
       line.setAttribute("x1", this.x + 25); 
       line.setAttribute("y1", this.y + 25);
       line.setAttribute("x2", this.x - 25);
       line.setAttribute("y2", this.y - 25);
       line.setAttribute("stroke", "#8afffb");
       line.setAttribute("stroke-weight", 2);
       svg.appendChild(line);
       var line2 = document.createElementNS("http://www.w3.org/2000/svg","line");
       line2.setAttribute("x1", this.x - 25); 
       line2.setAttribute("y1", this.y + 25);
       line2.setAttribute("x2", this.x + 25);
       line2.setAttribute("y2", this.y - 25);
       line2.setAttribute("stroke", "#8afffb");
       line2.setAttribute("stroke-weight", 2);
       line.setAttribute("class", "fade");
       line2.setAttribute("class", "fade");
       svg.appendChild(line2);
    }
}

//Similar to class X, this class is a class for the O player which stores and creates an O where the player clicks
class ooo {
    constructor(x, y, id) {
        this.x = x;
        this.y = y;
        this.id = id;
    }

    //this render does the same as the X render except it creates a circle for the child element
    render() {
        var svg = document.getElementById("playboard");

        var rectangle = document.getElementById(this.id);
        var parent = rectangle.parentNode;
        parent.removeChild(rectangle);

        var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("cx", this.x);
        circle.setAttribute("cy", this.y);
        circle.setAttribute("r", 25);
        circle.setAttribute("fill", "transparent");
        circle.setAttribute("stroke", "#ffcb52");
        circle.setAttribute("stroke-weight", 2);
        circle.setAttribute("class", "fade");
        svg.appendChild(circle);
    }
}

//this function is the entirety of how the game functions and becomes a game, it requires a x, y and id to feed to the ecks or ooo class as well as positions 1 and 2 for
//proper placement within the array used to keep track of where each piece is
function overseer(x, y, position1, position2, id) {
    console.log(arr);
    //if the turn is an even number than X goes as long as the game has not already ended
    if(turn % 2 == 0 && gameover == false) {
        //this changes the prompter to the opposite players turn as this all happens simulataniously so it shows up after the player has alrwady clicked
        prompter.innerHTML = "It is O's turn";
        //creates a new X piece in the rectangle that the player has clicked
        var x = new ecks(x, y, id);
        //adds a "X" to the array in the position that aligns with the board
        arr[position1][position2] = "X";
        //runs the render of the ecks class
        x.render();
        //another setup for appending a child to the parent svg so it may draw a line through the winning 3 in a row
        var svg = document.getElementById("playboard");
        var line = document.createElementNS("http://www.w3.org/2000/svg","line");

        //there is probably a better way of doing this that doesnt require so many lines but I couldn't come up with it. Instead this checks every possibilty for a winning condition for X

        if(arr[0][0] == "X") {
            if(arr[0][1] == "X") {
                if(arr[0][2] == "X") {
                    line.setAttribute("x1", 25); 
                    line.setAttribute("y1", 50);
                    line.setAttribute("x2", 275);
                    line.setAttribute("y2", 50);
                    line.setAttribute("stroke", "#8afffb");
                    line.setAttribute("stroke-weight", 5);
                    line.setAttribute("class", "fade");
                    prompter.innerHTML = "X WINS!";
                    prompter.style.color = "#8afffb";
                    gameover = true;
                    win = true;
                }
            }
        }
        if(arr[1][0] == "X") {
            if(arr[1][1] == "X") {
                if(arr[1][2] == "X") {
                    line.setAttribute("x1", 25); 
                    line.setAttribute("y1", 150);
                    line.setAttribute("x2", 275);
                    line.setAttribute("y2", 150);
                    line.setAttribute("stroke", "#8afffb");
                    line.setAttribute("stroke-weight", 5);
                    line.setAttribute("class", "fade");
                    prompter.innerHTML = "X WINS!";
                    prompter.style.color = "#8afffb";
                    gameover = true;
                    win = true;
                }
            }
        }
        if(arr[2][0] == "X") {
            if(arr[2][1] == "X") {
                if(arr[2][2] == "X") {
                    line.setAttribute("x1", 25); 
                    line.setAttribute("y1", 250);
                    line.setAttribute("x2", 275);
                    line.setAttribute("y2", 250);
                    line.setAttribute("stroke", "#8afffb");
                    line.setAttribute("stroke-weight", 5);
                    line.setAttribute("class", "fade");
                    prompter.innerHTML = "X WINS!";
                    prompter.style.color = "#8afffb";
                    gameover = true;
                    win = true;
                }
            }
        }
        if(arr[0][0] == "X") {
            if(arr[1][0] == "X") {
                if(arr[2][0] == "X") {
                    line.setAttribute("x1", 50); 
                    line.setAttribute("y1", 25);
                    line.setAttribute("x2", 50);
                    line.setAttribute("y2", 275);
                    line.setAttribute("stroke", "#8afffb");
                    line.setAttribute("stroke-weight", 5);
                    line.setAttribute("class", "fade");
                    prompter.innerHTML = "X WINS!";
                    prompter.style.color = "#8afffb";
                    gameover = true;
                    win = true;
                }
            }
        }
        if(arr[0][1] == "X") {
            if(arr[1][1] == "X") {
                if(arr[2][1] == "X") {
                    line.setAttribute("x1", 150); 
                    line.setAttribute("y1", 25);
                    line.setAttribute("x2", 150);
                    line.setAttribute("y2", 275);
                    line.setAttribute("stroke", "#8afffb");
                    line.setAttribute("stroke-weight", 5);
                    line.setAttribute("class", "fade");
                    prompter.innerHTML = "X WINS!";
                    prompter.style.color = "#8afffb";
                    gameover = true;
                    win = true;
                }
            }
        }
        if(arr[0][2] == "X") {
            if(arr[1][2] == "X") {
                if(arr[2][2] == "X") {
                    line.setAttribute("x1", 250); 
                    line.setAttribute("y1", 25);
                    line.setAttribute("x2", 250);
                    line.setAttribute("y2", 275);
                    line.setAttribute("stroke", "#8afffb");
                    line.setAttribute("stroke-weight", 5);
                    line.setAttribute("class", "fade");
                    prompter.innerHTML = "X WINS!";
                    prompter.style.color = "#8afffb";
                    gameover = true;
                    win = true;
                }
            }
        }
        if(arr[0][0] == "X") {
            if(arr[1][1] == "X") {
                if(arr[2][2] == "X") {
                    line.setAttribute("x1", 25); 
                    line.setAttribute("y1", 25);
                    line.setAttribute("x2", 275);
                    line.setAttribute("y2", 275);
                    line.setAttribute("stroke", "#8afffb");
                    line.setAttribute("stroke-weight", 5);
                    line.setAttribute("class", "fade");
                    prompter.innerHTML = "X WINS!";
                    prompter.style.color = "#8afffb";
                    gameover = true;
                    win = true;
                }
            }
        }
        if(arr[2][0] == "X") {
            if(arr[1][1] == "X") {
                if(arr[0][2] == "X") {
                    line.setAttribute("x1", 275); 
                    line.setAttribute("y1", 25);
                    line.setAttribute("x2", 25);
                    line.setAttribute("y2", 275);
                    line.setAttribute("stroke", "#8afffb");
                    line.setAttribute("stroke-weight", 5);
                    line.setAttribute("class", "fade");
                    prompter.innerHTML = "X WINS!";
                    prompter.style.color = "#8afffb";
                    gameover = true;
                    win = true;
                }
            }
        }
        svg.appendChild(line);
    }

    //If the turn is odd then O goes, everything here is the same as X except for O
    else if(turn % 2 != 0 && gameover == false) {
        prompter.innerHTML = "It is X's turn";
        var o = new ooo(x, y, id);
        arr[position1][position2] = "O";
        o.render();
        var svg = document.getElementById("playboard");
        var line = document.createElementNS("http://www.w3.org/2000/svg","line");
        if(arr[0][0] == "O") {
            if(arr[0][1] == "O") {
                if(arr[0][2] == "O") {
                    line.setAttribute("x1", 25); 
                    line.setAttribute("y1", 50);
                    line.setAttribute("x2", 275);
                    line.setAttribute("y2", 50);
                    line.setAttribute("stroke", "#ffcb52");
                    line.setAttribute("stroke-weight", 5);
                    line.setAttribute("class", "fade");
                    prompter.innerHTML = "O WINS!";
                    prompter.style.color = "#ffcb52";
                    gameover = true;
                    win = true;
                }
            }
        }
        if(arr[1][0] == "O") {
            if(arr[1][1] == "O") {
                if(arr[1][2] == "O") {
                    line.setAttribute("x1", 25); 
                    line.setAttribute("y1", 150);
                    line.setAttribute("x2", 275);
                    line.setAttribute("y2", 150);
                    line.setAttribute("stroke", "#ffcb52");
                    line.setAttribute("stroke-weight", 5);
                    line.setAttribute("class", "fade");
                    prompter.innerHTML = "O WINS!";
                    prompter.style.color = "#ffcb52";
                    gameover = true;
                    win = true;
                }
            }
        }
        if(arr[2][0] == "O") {
            if(arr[2][1] == "O") {
                if(arr[2][2] == "O") {
                    line.setAttribute("x1", 25); 
                    line.setAttribute("y1", 250);
                    line.setAttribute("x2", 275);
                    line.setAttribute("y2", 250);
                    line.setAttribute("stroke", "#ffcb52");
                    line.setAttribute("stroke-weight", 5);
                    line.setAttribute("class", "fade");
                    prompter.innerHTML = "O WINS!";
                    prompter.style.color = "#ffcb52";
                    gameover = true;
                    win = true;
                }
            }
        }
        if(arr[0][0] == "O") {
            if(arr[1][0] == "O") {
                if(arr[2][0] == "O") {
                    line.setAttribute("x1", 50); 
                    line.setAttribute("y1", 25);
                    line.setAttribute("x2", 50);
                    line.setAttribute("y2", 275);
                    line.setAttribute("stroke", "#ffcb52");
                    line.setAttribute("stroke-weight", 5);
                    line.setAttribute("class", "fade");
                    prompter.innerHTML = "O WINS!";
                    prompter.style.color = "#ffcb52";
                    gameover = true;
                    win = true;
                }
            }
        }
        if(arr[0][1] == "O") {
            if(arr[1][1] == "O") {
                if(arr[2][1] == "O") {
                    line.setAttribute("x1", 150); 
                    line.setAttribute("y1", 25);
                    line.setAttribute("x2", 150);
                    line.setAttribute("y2", 275);
                    line.setAttribute("stroke", "#ffcb52");
                    line.setAttribute("stroke-weight", 5);
                    line.setAttribute("class", "fade");
                    prompter.innerHTML = "O WINS!";
                    prompter.style.color = "#ffcb52";
                    gameover = true;
                    win = true;
                }
            }
        }
        if(arr[0][2] == "O") {
            if(arr[1][2] == "O") {
                if(arr[2][2] == "O") {
                    line.setAttribute("x1", 250); 
                    line.setAttribute("y1", 25);
                    line.setAttribute("x2", 250);
                    line.setAttribute("y2", 275);
                    line.setAttribute("stroke", "#ffcb52");
                    line.setAttribute("stroke-weight", 5);
                    line.setAttribute("class", "fade");
                    prompter.innerHTML = "O WINS!";
                    prompter.style.color = "#ffcb52";
                    gameover = true;
                    win = true;
                }
            }
        }
        if(arr[0][0] == "O") {
            if(arr[1][1] == "O") {
                if(arr[2][2] == "O") {
                    line.setAttribute("x1", 25); 
                    line.setAttribute("y1", 25);
                    line.setAttribute("x2", 275);
                    line.setAttribute("y2", 275);
                    line.setAttribute("stroke", "#ffcb52");
                    line.setAttribute("stroke-weight", 5);
                    line.setAttribute("class", "fade");
                    prompter.innerHTML = "O WINS!";
                    prompter.style.color = "#ffcb52";
                    gameover = true;
                    win = true;
                }
            }
        }
        if(arr[2][0] == "O") {
            if(arr[1][1] == "O") {
                if(arr[0][2] == "O") {
                    line.setAttribute("x1", 275); 
                    line.setAttribute("y1", 25);
                    line.setAttribute("x2", 25);
                    line.setAttribute("y2", 275);
                    line.setAttribute("stroke", "#ffcb52");
                    line.setAttribute("stroke-weight", 5);
                    line.setAttribute("class", "fade");
                    prompter.innerHTML = "O WINS!";
                    prompter.style.color = "#ffcb52";
                    gameover = true;
                    win = true;
                }
            }
        }
        svg.appendChild(line);
    }
    //adds one to the turn counter
    turn++;
    //if the turn counter reaches 10 then there are no more spaces and the game is over
    if(turn >= 10 && win == false) {
        prompter.innerHTML = "DRAW";
        gameover = true;
    }

    if(gameover == true) {
        var body = document.getElementById("body");
        var button = document.createElement("button");
        button.innerHTML = "Reset"
        button.setAttribute("onClick", "window.location.reload()");
        button.style.fontSize = "24px";
        button.style.display = "block";
        button.style.margin = "auto";
        body.appendChild(button);
    }
}