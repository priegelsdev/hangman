// alphabet array for the keyboard component

const ALPHABET_ARRAY = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

type KeyboardProps = {
  word: string;
  guessedLetters: string[];
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  gameWon: boolean;
  gameLost: boolean;
};

export default function Keyboard({
  word,
  guessedLetters,
  onClick,
  gameWon,
  gameLost,
}: KeyboardProps) {
  /*   const disabled = guessedLetters.includes(char) ? true : false; */

  const keys = ALPHABET_ARRAY.map((char, index) => (
    <button
      disabled={
        guessedLetters.includes(char) ? true : false || gameWon || gameLost
      }
      className={`key ${guessedLetters.includes(char) ? 'guessed' : ''} ${
        word.split('').includes(char) && guessedLetters.includes(char)
          ? 'correct'
          : ''
      }`}
      key={index}
      onClick={onClick}
    >
      {char}
    </button>
  ));

  return <div className="keyboard-container">{keys}</div>;
}
