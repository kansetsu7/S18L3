class BaseCharacter {
  constructor(name, hp, ap) {
    this.name = name;
    this.hp = hp;
    this.maxHp = hp;
    this.ap = ap;
    this.alive = true;
  }

  attack(character, damage) {
    if (this.alive == false) {
      return;
    }
    character.getHurt(damage);
  }

  getHurt(damage) { 
    this.hp -= damage;
    if (this.hp <= 0) { 
      this.die();
    }
  }

  die() {
    this.alive = false;
  }
}

class Hero extends BaseCharacter {
  constructor(name, hp, ap) {
    super(name, hp, ap);
    console.log("召喚英雄 " + this.name + "！");
  }

  attack(character) {
    var damage = (Math.random() + 1) * this.ap/2;
    super.attack(character, Math.floor(damage));
  }
  
}

class Monster extends BaseCharacter {
  constructor(name, hp, ap) {
    super(name, hp, ap);
    console.log("遇到怪獸 " + this.name + "惹！");
  }

  attack(character) {
    var damage = (Math.random() + 1) * this.ap/2;
    super.attack(character, Math.floor(damage));
  }

}

var hero = new Hero("Bernard", 130, 30);
var monster = new Monster("Skeleton", 130, 10);