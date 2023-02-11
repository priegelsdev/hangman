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
  onClick: (e: Event) => void;
};

export default function Keyboard({ onClick }: KeyboardProps) {
  const keys = ALPHABET_ARRAY.map((char, index) => (
    <button className="key" key={index} onClick={onClick}>
      {char}
    </button>
  ));

  return <div className="keyboard-container">{keys}</div>;
}
