import getRandomInt from '../utils.js';
import run from '../index.js';

const isEven = (x) => (x % 2 === 0);
const howToPlay = 'Answer "yes" if the number is even, otherwise answer "no".';

const dataGen = () => {
  const num = getRandomInt(1, 10);
  const question = `${'Question '}${num}`;
  const answer = isEven(num) ? 'yes' : 'no';
  return [question, answer];
};

const runGameEven = () => run(howToPlay, dataGen);
export default runGameEven;
