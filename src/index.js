/* eslint-disable max-len */
import readlineSync from 'readline-sync';

const userName = () => {
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}`);
  return name;
};

const getRandomInt = (min, max) => {
  // eslint-disable-next-line no-param-reassign
  min = Math.ceil(min);
  // eslint-disable-next-line no-param-reassign
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};


// const question = (num) => {
//   const answerBool = readlineSync.keyInYN(`${'Question: '}${num}`);
//   return answerBool;
// };

// const check = (num, answerBool, name, answerYN) => {
//   const even = num % 2 === 0;
//   if (answerBool === even) {
//     console.log('Correct!');
//   } else {
//     switch (answerBool) {
//       case true:
//         console.log(`${"'yes' is wrong answer ;(. Correct answer was 'no'.\n Let's try again,"}${name}`);
//         break;
//       case false:
//         console.log(`${"'no' is wrong answer ;(. Correct answer was 'yes'.\n Let's try again,"}${name}`);
//         break;
//       default:
//         console.log(`${"'"}${answerBool}${"'"}${'is wrong answer ;(. Correct answer was '}${"'"}${answerYN}${"'.\n Let's try again, "}${name}`);
//         break;
//     }
//   }
// };

const game = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const name = userName();
  let current = 0;
  for (let i = 0; i < 3; i += 1) {
    const num = getRandomInt(1, 20);
    const correctAnswer = (num % 2 === 0) ? 'yes' : 'no';
    const answerBool = readlineSync.keyInYN(`${'Question: '}${num}`, { guide: false });
    let answerYN = null;
    switch (answerBool) {
      case true:
        answerYN = 'yes';
        break;
      case false:
        answerYN = 'no';
        break;
      default:
        answerYN = 'incorrect input';
        break;
    }
    console.log(`${'Your answer: '}${answerYN}`);
    if (answerBool === (num % 2 === 0)) {
      console.log('Correct!');
      current += 1;
    } else if (answerBool === '') {
      console.log(`${"'"}${answerYN}${"'"}${'is wrong answer ;(. Correct answer was '}${"'"}${correctAnswer}${"'.\n Let's try again, "}${name}`);
      break;
    } else if (answerBool !== (num % 2 === 0)) {
      console.log(`${"'"}${answerYN}${"'"}${'is wrong answer ;(. Correct answer was '}${"'"}${correctAnswer}${"'.\n Let's try again, "}${name}`);
      break;
    }
  }
  if (current === 3) {
    console.log(`${'Congratulations, '}${name}${'!'}`);
  }
};

export default game;
