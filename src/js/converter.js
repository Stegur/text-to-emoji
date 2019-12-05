export default function converter(hero) {
  let str = '';

  if (!hero.type || !hero.attack || !hero.defence || !hero.health) {
    return false;
  }

  switch (hero.type) {
    case 'Bowman':
      str += '\uD83D\uDE20 Л';
      break;
    case 'Swordsman':
      str += '\uD83D\uDE21 В';
      break;
    case 'Magician':
      str += '\uD83E\uDDD0 М';
      break;
    case 'Daemon':
      str += '\uD83D\uDC7F Д';
      break;
    case 'Undead':
      str += '\uD83D\uDC80 Н';
      break;
    case 'Zombie':
      str += '\uD83E\uDDDF З';
      break;
    default:
      str += '';
  }

  str += ` \u2694${hero.attack} \uD83D\uDEE1${hero.defence} \u2764${hero.health}`;

  return str;
}
