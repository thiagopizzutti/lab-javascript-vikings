// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength

    }

    attack() {
        return this.strength;
    }
    receiveDamage(damage) {
        this.health = this.health - damage
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name



    }

    attack() {
        return strength
    }



}

let viking = new Viking("Thiago", 150, 20)

vikink.attack()



// if ("still alive"

//     battleCry() {
//         this.damage.health;

//     }




// Saxon
class Saxon extends Soldier {
    receiveDamage() {
        this.health = this.health - damage
    }
}

// War
class War {}


function attack() {
    return typeof soldier.attack
}