type HangmanWordProps = {
  word: string;
};

export default function HangmanWord({ word }: HangmanWordProps) {
  const wordSplit = word.split('');

  const letters = word.split('').map((letter, index) => (
    <span className="letter-blank">
      <span key={index} className="letter">
        {letter}
      </span>
    </span>
  ));

  return <div className="word">{letters}</div>;
}
