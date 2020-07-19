import getRandomInt from '../utils.js';
import engine from '../index.js';

const operators = ['+', '-', '*', '/'];

function getOperator() {
  const randomInt = getRandomInt(0, 3);
  return operators[randomInt];
}

const gameCalc = () => {
  const data = {
    howToPlay: 'What is the result of the expression?',
    lOperand: null,
    rOperand: null,
    operator: null,
    getQuestion() {
      console.log(`Question: ${this.lOperand}${this.operator}${this.rOperand}?`);
    },
    getCorrectAnswer() {
      let answer = null;
      if (this.operator === '+') {
        answer = this.lOperand + this.rOperand;
        return String(answer);
      }
      if (this.operator === '-') {
        answer = this.lOperand - this.rOperand;
        return String(answer);
      }
      if (this.operator === '*') {
        answer = this.lOperand * this.rOperand;
        return String(answer);
      }
      answer = this.lOperand / this.rOperand;
      return String(answer);
    },
    getNewData() {
      this.lOperand = getRandomInt(1, 10);
      this.rOperand = getRandomInt(1, 10);
      this.operator = getOperator();
    },
  };
  engine(data);
};

export default gameCalc;
