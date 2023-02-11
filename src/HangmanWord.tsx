type HangmanWordProps = {
  word: string;
};

export default function HangmanWord({ word }: HangmanWordProps) {
  console.log(word);
  const wordSplit = word.split('');
  console.log(wordSplit);
  const letters = word.split('').map((letter, index) => (
    <span className="letter-blank">
      <span key={index} className="letter">
        {letter}
      </span>
    </span>
  ));

  return <div className="word">{letters}</div>;
}
