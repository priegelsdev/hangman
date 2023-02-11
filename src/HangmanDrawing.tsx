// BODY PARTS to be drawn when letter is guessed incorrectly

const HEAD = <div className="head"></div>;
const BODY = <div className="body"></div>;
const LEFT_ARM = <div className="arm-left"></div>;
const RIGHT_ARM = <div className="arm-right"></div>;
const LEFT_LEG = <div className="leg-left"></div>;
const RIGHT_LEG = <div className="leg-right"></div>;

const BODY_PARTS = [HEAD, BODY, LEFT_ARM, RIGHT_ARM, LEFT_LEG, RIGHT_LEG];

type HangmanDrawingProps = {
  wrongGuesses: number;
};

export default function HangmanDrawing({ wrongGuesses }: HangmanDrawingProps) {
  return (
    <div className="drawing-container">
      <div className="scaffold-beam-hor"></div>
      <div className="scaffold-beam-vert"></div>
      <div className="scaffold-beam-vert small"></div>
      <div className="scaffold-bottom"></div>

      {/* shows body parts if wrongGuesses increases*/}
      {BODY_PARTS.slice(0, wrongGuesses).map((part) => part)}
    </div>
  );
}
