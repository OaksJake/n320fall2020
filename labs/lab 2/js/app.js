//base Instrument class that all family's extend
class Instrument {
    //constructor for instrument family, verbage used for playing and loudness of the playing
    constructor(family,verb,loudness) {
        this.family = family;
        this.verb = verb;
        this.loudness = loudness;
    }

    //encapsulated function to display the instruments in the console when they are called to play
    play() {
        console.log(this.family + " " + this.verb + " at a " + this.loudness + " volume.");
    }
}

//all three classes share the same idea of passing up a family name, a verb and asking the user for an input when they define the new instrument
class Woodwind extends Instrument {
    constructor(loudness) {
        super("Woodwind instrument","plays",loudness);
    }
}

class Percussion extends Instrument {
    constructor(loudness) {
        super("Percussion instrument","smashes",loudness);
    }
}

class String extends Instrument {
    constructor(loudness) {
        super("String instrument","strums",loudness);
    }
}

//array with three new instruments with one from each family for demonstration
var instruments = [new Woodwind("medium"), new Percussion("loud"), new String("quiet")];

//for loop to play all the instruments
for(var i = 0; i < instruments.length; i++) {
    instruments[i].play();
}