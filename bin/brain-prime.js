#!/usr/bin/env node
import engine from '../src/index.js';
import {
  howToPlay, question, correctAnswer, userAnswer,
} from '../src/games/game5.js';

engine(howToPlay, question, userAnswer, correctAnswer);
