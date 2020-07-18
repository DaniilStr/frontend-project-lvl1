import getRandomInt from '../utils.js';
import engine from '../index.js';

const isEven = (x) => (x % 2 === 0);
const howToPlay = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameEven = () => {
  let num = getRandomInt(1, 10);
  const question = `${'Question: '}${num}`;
  const correctAnswer = isEven(num) ? 'yes' : 'no';

  engine(howToPlay, question, correctAnswer);
};

export default gameEven;
