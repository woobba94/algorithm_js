// 혼자 작성한 코드..
// class Wizard {
//     health = 0;
//     mana = 0;
//     armor = 0;
//     Wizard(health, mana, armor) {
//         this.health = 1;
//     }

//     attack() {
//         console.log("파이어볼");
//     }

//     setHealth(x) {
//         this.health = x;
//     }
// }

// 모르겠어서 답안 봤음
// 클래스 선언은 외워야겠다..
const Wizard = class Wizard {
    constructor(health, mana, armor) {
        this.health = health;
        this.mana = mana;
        this.armor = armor;
    }
    attack() {
        console.log("파이어볼");
    }
};

const x = new Wizard(545, 210, 10);
console.log(x.health, x.mana, x.armor);
x.attack();
x.setHealth(2);
