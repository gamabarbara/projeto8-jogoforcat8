import forca from "./assets/forca0.png";
export default function App(props) {
  return (
    <>
      <div className="content">
        <div className="content-image">
          <img src={forca} />
        </div>
        <div className="content-button">
          <button className="content-button-button">Escolher Palavra</button>
        </div>
      </div>
      <div className="letters">
        <Letter name={props.name} />
      </div>
      <div className="input">
        <p className="text">Já sei a palavra!</p>
        <input></input>
        <button>Chutar</button>
      </div>
    </>
  );
}

function Letter() {
  const letter = [
    { name: "A" },
    { name: "B" },
    { name: "C" },
    { name: "D" },
    { name: "E" },
    { name: "F" },
    { name: "G" },
    { name: "H" },
    { name: "I" },
    { name: "J" },
    { name: "K" },
    { name: "L" },
    { name: "M" },
    { name: "N" },
    { name: "O" },
    { name: "P" },
    { name: "Q" },
    { name: "R" },
    { name: "S" },
    { name: "T" },
    { name: "U" },
    { name: "V" },
    { name: "X" },
    { name: "Y" },
    { name: "W" },
    { name: "Z" },
  ];

  return (
    <div className="letters-container">
      {letter.map((s) => (
        <div className="letter-button">
          <p>{s.name}</p>
        </div>
      ))}
    </div>
  );
}
