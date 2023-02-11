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

export default function Keyboard() {
  const keys = ALPHABET_ARRAY.map((char, index) => (
    <button className="key" key={index}>
      {char}
    </button>
  ));

  console.log(keys);

  return <div className="keyboard-container">{keys}</div>;
}
