type HangmanWordProps = {
  word: string;
  guessedLetters: string[];
  gameLost: boolean;
};

export default function HangmanWord({
  word,
  guessedLetters,
  gameLost,
}: HangmanWordProps) {
  const letters = word.split('').map((letter, index) => (
    <span key={index} className="letter-blank">
      <span
        key={index}
        className={`letter ${
          guessedLetters.includes(letter) && gameLost ? 'wrong' : ''
        } `}
        style={{
          visibility:
            guessedLetters.includes(letter) || gameLost ? 'visible' : 'hidden',
        }}
      >
        {letter}
      </span>
    </span>
  ));

  return <div className="word">{letters}</div>;
}
