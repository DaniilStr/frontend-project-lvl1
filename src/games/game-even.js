import getRandomInt from '../utils.js';
import run from '../index.js';

const isEven = (x) => (x % 2 === 0);
const howToPlay = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateData = () => {
  const num = getRandomInt(1, 10);
  const question = String(num);
  const answer = isEven(num) ? 'yes' : 'no';
  return [question, answer];
};

const runGameEven = () => run(howToPlay, generateData);
export default runGameEven;
