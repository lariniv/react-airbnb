import "./index.css";

import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";

function Details({ guests, bedrooms, beds, bathrooms }) {
  return (
    <Box className={"details__container"} shadow>
      <Heading border>Details</Heading>

      <List
        guests={guests}
        bedrooms={bedrooms}
        beds={beds}
        bathrooms={bathrooms}
      />
    </Box>
  );
}

function List({ guests, bedrooms, beds, bathrooms }) {
  return (
    <ul className="details__services">
      <ListItem imageSrc="/svg/guests.svg">
        <span>{guests} guests</span>
      </ListItem>

      <ListItem imageSrc="/svg/bedrooms.svg">
        <span>{bedrooms} bedrooms</span>
      </ListItem>

      <ListItem imageSrc="/svg/beds.svg">
        <span>{beds} beds</span>
      </ListItem>

      <ListItem imageSrc="/svg/bathrooms.svg">
        <span>{bathrooms} bathrooms</span>
      </ListItem>
    </ul>
  );
}

export default Details;
