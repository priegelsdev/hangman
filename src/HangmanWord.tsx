type HangmanWordProps = {
  word: string;
  guessedLetters: string[];
};

export default function HangmanWord({
  word,
  guessedLetters,
}: HangmanWordProps) {
  const wordSplit = word.split('');

  const letters = word.split('').map((letter, index) => (
    <span className="letter-blank">
      <span
        key={index}
        style={{
          visibility: guessedLetters.includes(letter) ? 'visible' : 'hidden',
        }}
        className="letter"
      >
        {letter}
      </span>
    </span>
  ));

  /*   wordSplit.forEach(letter => )  */

  return <div className="word">{letters}</div>;
}
