function Tamagochi (name) {
    var random = function () {
        return Math.floor((Math.random() * 10) + 1);
    };

        this.hunger = random();
        this.happiness = random();
        this.health = random();
        this.dirtiness = random();
        this.thirst = random();

    this.name = name || 'Kesha',


    this.sleep = function () {
        this.health--;
        this.happiness = random();
        this.hunger++;
        this.check();
        return this.status();
    };

    this.walk = function () {
        this.health--;
        this.hunger++;
        this.dirtiness++;
        this.happiness++;
        this.check();
        return this.status();
    };

    this.heal = function () {
        this.health += 10;
        this.happiness--;
        return this.status();
    };

    this.eat = function () {
        this.hunger = 0;
        this.thirst++;
        this.check();
        return this.status();
    };

    this.drink = function () {
        this.hunger++;
        this.thirst = 0;
        this.check();
        return this.status();
    };

    this.shower = function () {
        this.dirtiness = 0;
        this.check();
        return this.status();
    };

    this.play = function () {
        this.happiness++;
        this.check();
        return this.status();
    };

    this.check = function() {
        if (this.health <= 0)
            console.log(this.name + ' has died. What have you done?');
        else if (this.health <= 1)
            console.log(this.name + ' is almost dead. Heal him fast!');
        else if (this.happiness <= 0)
            console.log(this.name + ' is sad. Make him happy! ');
        else if (this.hunger >= 10)
            console.log(this.name + ' is hungry!');
        else if (this.thirst >= 10)
            console.log(this.name + ' is thirsty!');
        else if (this.dirtiness >= 10)
            console.log(this.name + ' is dirty!');
    };

    this.status = function () {
        console.log('Pet name: ' + this.name);
        console.log('Happiness: ' + this.happiness);
        console.log('Hunger: ' + this.hunger);
        console.log('Thirst: ' + this.thirst);
        console.log('Dirtiness: ' + this.dirtiness);
        console.log('Health: ' + this.health);
    }
    console.log('Functions to play with:\nplay, drink, shower, eat, heal, walk, sleep\n\nStart with pet.*');
};

var pet = new Tamagochi(prompt('Enter pet name'));