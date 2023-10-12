export default class Character {

    static characters = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

    constructor(name, type) {
        if (typeof name === 'string' && name.length >= 2 && name.length <= 10) {
            this.name = name;
        } else {
            throw new Error('Имя должно содержать от 2 до 10 символов!');
        }

        if(Character.characters.includes(type)) {
            this.type = type;
        } else {
            throw new Error('Персонаж должен соответствовать одному из следующих: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
        }

        this.health = 100;
        this.level = 1;
    }

    levelUp() {
        if(this.health > 0) {
            this.level++;
            this.attack *= 1.2;
            this.defence *= 1.2;
            this.health = 100;
        } else {
            throw new Error('Нельзя повысить уровень мертвого персонажа!')
        }
    }

    damage(points) {
        if(this.health > 0) {
            this.health -= points * (1 - this.defence / 100);
            if(this.health <= 0) {
                throw new Error('Персонаж мертв!');
            }
        } else {
            throw new Error('Персонаж мертв!');
        }
    }
}


export class Bowerman extends Character {
    constructor(name, type = 'Bowman') {
        super(name, type);
        this.attack = 25;
        this.defence = 25;
    }
}


export class Swordsman extends Character {
    constructor(name, type = 'Swordsman') {
        super(name, type);
        this.attack = 40;
        this.defence = 10;
    }
}


export class Magician extends Character {
    constructor(name, type = 'Magician') {
        super(name, type);
        this.attack = 10;
        this.defence = 40;
    }
}


export class Daemon extends Character {
    constructor(name, type = 'Daemon') {
        super(name, type);
        this.attack = 10;
        this.defence = 40;
    }
}


export class Undead extends Character {
    constructor(name, type = 'Undead') {
        super(name, type);
        this.attack = 25;
        this.defence = 25;
    }
}


export class Zombie extends Character {
    constructor(name, type = 'Zombie') {
        super(name, type);
        this.attack = 40;
        this.defence = 10;
    }
}