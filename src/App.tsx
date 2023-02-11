import React, { useState, useEffect } from 'react';
import HangmanDrawing from './HangmanDrawing';
import HangmanWord from './HangmanWord';
import Keyboard from './Keyboard';

export default function App() {
  return (
    <main>
      <div className="result-text">You win! You lose! Try again</div>
      <HangmanDrawing />
      <HangmanWord />
      <Keyboard />
    </main>
  );
}
