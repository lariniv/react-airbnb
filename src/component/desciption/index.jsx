import "./index.css";

import Heading from "../heading";

function Description({ children, title }) {
  return (
    <div className="description">
      <Heading>{title}</Heading>
      <p className="description__text">{children}</p>
    </div>
  );
}

export default Description;
