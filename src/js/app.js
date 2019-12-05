import converter from './converter';

const hero1 = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10,
};

const hero2 = {
  name: 'Воин',
  type: 'Swordsman',
  health: 96,
  level: 1,
  attack: 51,
  defence: 3,
};

const hero3 = {
  name: 'Маг',
  type: 'Magician',
  health: 78,
  level: 1,
  attack: 48,
  defence: 22,
};

const hero4 = {
  name: 'Демон',
  type: 'Daemon',
  health: 121,
  level: 1,
  attack: 15,
  defence: 53,
};

const hero5 = {
  name: 'Нежить',
  type: 'Undead',
  health: 3,
  level: 1,
  attack: 33,
  defence: 17,
};

const hero6 = {
  name: 'Зомби',
  type: 'Zombie',
  health: 28,
  level: 1,
  attack: 26,
  defence: 28,
};

const hero7 = {
  name: 'Зомби',
  type: 'Zomie',
  health: 28,
  level: 1,
  attack: 26,
  defence: 28,
};

const hero8 = {
  id: 99,
};

console.log(converter(hero1));
console.log(converter(hero2));
console.log(converter(hero3));
console.log(converter(hero4));
console.log(converter(hero5));
console.log(converter(hero6));
console.log(converter(hero7));
console.log(converter(hero8));
