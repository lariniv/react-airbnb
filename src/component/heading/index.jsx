import "./index.css";

function Heading({ children, border }) {
  return (
    <div className={`heading ${border ? "heading--border" : ""}`}>
      {children}
    </div>
  );
}

export default Heading;
