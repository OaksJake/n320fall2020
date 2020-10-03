var wallet = parseFloat(45.00).toFixed(2);
var vend = true;

class vendingMachine {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;  
    }
        
    render() {
        return `
              <div style="border: solid 1px black; width: 275px;">Item: ${this.name} | Amount: ${this.quantity} | Price: $${parseFloat(this.price).toFixed(2)}</div>
        `;  
        }
        
    vend() {
        if(this.quantity > 0) {
            this.quantity--;
            stockDiv.innerHTML = "";
            vend = true;
        }
        else {
            stockDiv.innerHTML = "Out of stock!";
            vend = false;
        }
    }
}

var machine = [new vendingMachine("KitKat", 1.50, 10), new vendingMachine("Smarties", 1.75, 7), new vendingMachine("Dorito's", 2.00, 9)];
var machineDiv = document.getElementById("vendingDiv");
var walletDiv = document.getElementById("wallet");
let stockDiv = document.getElementById("OOS");
for(var i = 0; i < machine.length; i++) {
    vendingDiv.innerHTML = vendingDiv.innerHTML + machine[i].render();
}

function press(num) {
    if(parseFloat(machine[num].price).toFixed(2) <= parseFloat(wallet).toFixed(2)) {
        machine[num].vend();
        if(vend == true) {
            wallet = parseFloat(wallet).toFixed(2) - parseFloat(machine[num].price).toFixed(2);
        }
        walletDiv.innerHTML = "Wallet: $" + parseFloat(wallet).toFixed(2);
        vendingDiv.innerHTML = "";
        for(var j = 0; j < machine.length; j++) {
            vendingDiv.innerHTML = vendingDiv.innerHTML + machine[j].render();
        }
    }
    else {
        walletDiv.innerHTML =  "Wallet: $" + parseFloat(wallet).toFixed(2) + " You need more money!";
    }
}