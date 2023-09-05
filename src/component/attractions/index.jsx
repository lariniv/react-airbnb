import "./index.css";
import React from "react";

import Box from "../box";
import Heading from "../heading";

function Attractions({ list }) {
  return (
    <Box className={"attractions__container"} shadow>
      <Heading border>Nearby attractions</Heading>
      <div className="attractions__list">
        {list.map((item) => (
          <React.Fragment key={item.id}>
            <div className="attractions__item">
              <a href={item.link}>{item.name}</a>
            </div>
          </React.Fragment>
        ))}
      </div>
    </Box>
  );
}

export default Attractions;
