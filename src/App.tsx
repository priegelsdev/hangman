import React, { useState, useEffect } from 'react';
import HangmanDrawing from './HangmanDrawing';
import HangmanWord from './HangmanWord';
import Keyboard from './Keyboard';

import words from './wordList.json';

export default function App() {
  // states for random word, guessedLetters

  const [word, setWord] = useState<string>(
    words[Math.floor(Math.random() * words.length)]
  );

  console.log(word);

  return (
    <main>
      <div className="result-text">You win! You lose! Try again</div>
      <HangmanDrawing />
      <HangmanWord />
      <Keyboard />
    </main>
  );
}
