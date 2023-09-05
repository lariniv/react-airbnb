import "./index.css";

function Image({ src, name }) {
  return <img className="img" src={src} alt={name} />;
}

export default Image;
