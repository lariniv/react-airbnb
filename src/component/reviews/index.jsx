import "./index.css";
import React from "react";
import Heading from "../heading";
import Box from "../box";

function Reviews({ list }) {
  return (
    <div className="review-list">
      <Heading>Guests review</Heading>
      <div className="review-list__content">
        {list.map((item) => (
          <React.Fragment key={item.id}>
            <CardItem
              title={item.guestName}
              text={item.review}
              rating={`Rating: ${item.rating}`}
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

function CardItem({ title, text, rating }) {
  return (
    <Box className={"card"}>
      <div className="card__header">
        <div className="card__title">{title}</div>
        <p>{rating}</p>
      </div>
      <div className="card__text">{text}</div>
    </Box>
  );
}
export default Reviews;
