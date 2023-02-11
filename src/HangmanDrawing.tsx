const HEAD = <div className="head"></div>;
const BODY = <div className="body"></div>;
const LEFT_ARM = <div className="arm-left"></div>;
const RIGHT_ARM = <div className="arm-right"></div>;
const LEFT_LEG = <div className="leg-left"></div>;
const RIGHT_LEG = <div className="leg-right"></div>;

const BODY_PARTS = [HEAD, BODY, LEFT_ARM, RIGHT_ARM, LEFT_LEG, RIGHT_LEG];

export default function HangmanDrawing() {
  return (
    <div className="drawing-container">
      <div className="scaffold-beam-hor"></div>
      <div className="scaffold-beam-vert"></div>
      <div className="scaffold-beam-vert small"></div>
      <div className="scaffold-bottom"></div>

      {BODY_PARTS}
    </div>
  );
}
