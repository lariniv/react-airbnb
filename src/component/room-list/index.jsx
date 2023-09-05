import "./index.css";
import React from "react";
import Heading from "../heading";
import Box from "../box";

function RoomList({ list }) {
  return (
    <div className="room-list">
      <Heading>Room types</Heading>
      <div className="room-list__content">
        {list.map((item) => (
          <React.Fragment key={item.id}>
            <CardItem
              title={item.type}
              text={`Guest number: ${item.capacity}`}
              price={`${item.pricePerNight}${item.currency}`}
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

function CardItem({ title, text, price }) {
  return (
    <Box className={"card"}>
      <div className="card__title">{title}</div>
      <div className="card__text">{text}</div>
      <div className="card__price">{price}</div>
    </Box>
  );
}
export default RoomList;
