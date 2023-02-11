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
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  console.log(word);

  function addGuessedLetter(e: Event) {
    setGuessedLetters((prevLetters) => [
      ...prevLetters,
      e.target.innerText.toLowerCase(),
    ]);
  }

  return (
    <main>
      <div className="result-text">You win! You lose! Try again</div>
      <HangmanDrawing />
      <HangmanWord word={word} guessedLetters={guessedLetters} />
      <Keyboard onClick={addGuessedLetter} />
    </main>
  );
}
