import "./index.css";

import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";

function Amenities({
  pool,
  gym,
  breakfast,
  wifi,
  parking,
  pets,
  airplane,
  concierge,
  service,
  child,
}) {
  return (
    <Box className={"details__container"} shadow>
      <Heading border>Amenities</Heading>

      <List
        pool={pool}
        gym={gym}
        breakfast={breakfast}
        wifi={wifi}
        parking={parking}
        pets={pets}
        airplane={airplane}
        concierge={concierge}
        service={service}
        child={child}
      />
    </Box>
  );
}

function List({
  pool,
  gym,
  breakfast,
  wifi,
  parking,
  pets,
  airplane,
  concierge,
  service,
  child,
}) {
  return (
    <ul className="details__services">
      {pool && <ListItem imageSrc="/svg/pool.svg">Pool</ListItem>}
      {gym && <ListItem imageSrc="/svg/gym.svg">Has gym</ListItem>}
      {breakfast && (
        <ListItem imageSrc="/svg/breakfast.svg">Free breakfast</ListItem>
      )}
      {wifi && <ListItem imageSrc="/svg/wifi.svg">Free wifi</ListItem>}
      {parking && <ListItem imageSrc="/svg/parking.svg">Free parking</ListItem>}
      {pets && <ListItem imageSrc="/svg/pets.svg">Pets allowed</ListItem>}
      {airplane && (
        <ListItem imageSrc="/svg/airplane.svg">
          Has free airport shuttle
        </ListItem>
      )}
      {concierge && (
        <ListItem imageSrc="/svg/concierge.svg">Support concierge</ListItem>
      )}
      {service && (
        <ListItem imageSrc="/svg/service.svg">Free room service</ListItem>
      )}
      {child && <ListItem imageSrc="/svg/child.svg">Childs</ListItem>}
    </ul>
  );
}

export default Amenities;
