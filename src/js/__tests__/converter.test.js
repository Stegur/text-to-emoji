import converter from '../converter';

describe('converter', () => {
  it('should return string 😠 Л ⚔40 🛡10 ❤50', () => {
    const hero = {
      name: 'Лучник',
      type: 'Bowman',
      health: 50,
      level: 1,
      attack: 40,
      defence: 10,
    };

    const expected = '😠 Л ⚔40 🛡10 ❤50';
    const result = converter(hero);

    expect(result).toBe(expected);
  });
  it('should return string 😡 В ⚔51 🛡3 ❤96', () => {
    const hero = {
      name: 'Воин',
      type: 'Swordsman',
      health: 96,
      level: 1,
      attack: 51,
      defence: 3,
    };

    const expected = '😡 В ⚔51 🛡3 ❤96';
    const result = converter(hero);

    expect(result).toBe(expected);
  });
  it('should return string 🧐 М ⚔48 🛡22 ❤78', () => {
    const hero = {
      name: 'Маг',
      type: 'Magician',
      health: 78,
      level: 1,
      attack: 48,
      defence: 22,
    };

    const expected = '🧐 М ⚔48 🛡22 ❤78';
    const result = converter(hero);

    expect(result).toBe(expected);
  });
  it('should return string 👿 Д ⚔15 🛡53 ❤121', () => {
    const hero = {
      name: 'Демон',
      type: 'Daemon',
      health: 121,
      level: 1,
      attack: 15,
      defence: 53,
    };

    const expected = '👿 Д ⚔15 🛡53 ❤121';
    const result = converter(hero);

    expect(result).toBe(expected);
  });
  it('should return string 💀 Н ⚔33 🛡17 ❤3', () => {
    const hero = {
      name: 'Нежить',
      type: 'Undead',
      health: 3,
      level: 1,
      attack: 33,
      defence: 17,
    };

    const expected = '💀 Н ⚔33 🛡17 ❤3';
    const result = converter(hero);

    expect(result).toBe(expected);
  });
  it('should return string 🧟 З ⚔26 🛡28 ❤28', () => {
    const hero = {
      name: 'Зомби',
      type: 'Zombie',
      health: 28,
      level: 1,
      attack: 26,
      defence: 28,
    };

    const expected = '🧟 З ⚔26 🛡28 ❤28';
    const result = converter(hero);

    expect(result).toBe(expected);
  });
  it('should return string ⚔26 🛡28 ❤28 without avatar', () => {
    const hero = {
      name: 'Зомби',
      type: 'Zomie',
      health: 28,
      level: 1,
      attack: 26,
      defence: 28,
    };

    const expected = ' ⚔26 🛡28 ❤28';
    const result = converter(hero);

    expect(result).toBe(expected);
  });
  it('should return false', () => {
    const hero = {
      id: 7,
    };

    const result = converter(hero);

    expect(result).toBeFalsy();
  });
});
