var turn = 1;
var arr = [["","",""],["","",""],["","",""]];
var timer = 0;
var gameover = false;
var prompter = document.getElementById("prompt");
prompter.innerHTML = "It is O's turn";

class ecks {
    constructor(x, y, id) {
        this.x = x;
        this.y = y;
        this.id = id;
    }

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

class ooo {
    constructor(x, y, id) {
        this.x = x;
        this.y = y;
        this.id = id;
    }

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

function overseer(x, y, position1, position2, id) {
    if(turn % 2 == 0 && gameover == false) {
        prompter.innerHTML = "It is O's turn";
        var x = new ecks(x, y, id);
        arr[position1][position2] = "X";
        x.render();
        var svg = document.getElementById("playboard");
        var line = document.createElementNS("http://www.w3.org/2000/svg","line");
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
                }
            }
        }
        svg.appendChild(line);
    }
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
                }
            }
        }
        svg.appendChild(line);
    }
    turn++;
    if(turn >= 10) {
        prompter.innerHTML = "DRAW";
        gameover == true;
    }
}