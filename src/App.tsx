import React, { useState, useEffect } from 'react';
import HangmanDrawing from './HangmanDrawing';
import HangmanWord from './HangmanWord';
import Keyboard from './Keyboard';

import words from './wordList.json';

export default function App() {
  // states for random word, guessedLetters, the number of guesses and game status

  const [word, setWord] = useState<string>(
    words[Math.floor(Math.random() * words.length)]
  );
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [wrongGuesses, setWrongGuesses] = useState<number>(0);

  // booleans to determine if game is won or lost and then affect displayed text on top of page
  const gameWon: boolean = word
    .split('')
    .every((char) => guessedLetters.includes(char));
  const gameLost: boolean = wrongGuesses === 6;

  // function to add guessed letter on btn click

  function addGuessedLetter(e: React.MouseEvent<HTMLButtonElement>) {
    const target = e.target as HTMLElement;
    const selectedLetter = target.innerText.toLowerCase();

    // if letter has not been guessed yet, add it to array
    if (!guessedLetters.includes(selectedLetter)) {
      setGuessedLetters((prevLetters) => [...prevLetters, selectedLetter]);
    }

    // if letter is not in word to guess, increase wrongGuess count
    if (!word.split('').includes(selectedLetter)) {
      setWrongGuesses((prevGuesses) => (prevGuesses += 1));
    }
  }

  return (
    <main>
      <div className="result-text">
        {gameWon ? `You win! Refresh to play again.` : ''}
        {gameLost ? 'You lose! Refresh to try again.' : ''}
      </div>
      <HangmanDrawing wrongGuesses={wrongGuesses} />
      <HangmanWord
        word={word}
        guessedLetters={guessedLetters}
        gameLost={gameLost}
      />
      <Keyboard
        word={word}
        guessedLetters={guessedLetters}
        onClick={addGuessedLetter}
        gameWon={gameWon}
        gameLost={gameLost}
      />
    </main>
  );
}
