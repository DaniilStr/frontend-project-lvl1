import readlineSync from 'readline-sync';

const getRandomInt = (min, max) => {
  // eslint-disable-next-line no-param-reassign
  min = Math.ceil(min);
  // eslint-disable-next-line no-param-reassign
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

const howToPlay = 'What number is missing in the progression?';

let scale = null;
let step = null;

function makeScale() {
  scale = [getRandomInt(11, 19)];
  step = getRandomInt(2, 7);
  for (let i = 1; i < 10; i += 1) {
    scale.push(scale[i - 1] + step);
  }
}

function question() {
  makeScale();
  scale[getRandomInt(1, 9)] = '..';
  console.log(`Question: ${scale}`);
}

function correctAnswer() {
  let answer = null;
  for (let i = 0; i < scale.length - 1; i += 1) {
    if (scale[i] === '..') {
      answer = scale[i - 1] + step;
    }
  }
  return answer;
}

function userAnswer() {
  const answer = readlineSync.question('Your answer: ');
  return +answer;
}

export {
  howToPlay, question, correctAnswer, userAnswer,
};
