type HangmanWordProps = {
  word: string;
};

export default function HangmanWord({ word }: HangmanWordProps) {
  console.log(word);

  return <div>Hello</div>;
}
