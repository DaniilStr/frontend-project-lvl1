import readlineSync from 'readline-sync';

export const userName = () => {
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}`);
};

const getRandomInt = (min, max) => {
  // eslint-disable-next-line no-param-reassign
  min = Math.ceil(min);
  // eslint-disable-next-line no-param-reassign
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

export const question = () => {
  const num = getRandomInt(1, 20);
  // let correct = 0;
  const q = readlineSync.keyInYN(`${'Question: '}${num}`);
  console.log(`${'Your answer: '}${q}`);
};


export default userName;
