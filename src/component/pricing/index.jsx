import "./index.css";

import Box from "../box";
import ListItem from "../list-item";

function Pricing({ price, discount, currency, ...rest }) {
  return (
    <Box className={"pricing__container"}>
      <div className="pricing__value">
        {discount ? (
          <>
            <span className="pricing__cost--discounted">
              {currency}
              {price}
            </span>
            <span className="pricing__cost">
              {currency}
              {discount}
            </span>
          </>
        ) : (
          <span className="pricing__cost">
            {currency}
            {price}
          </span>
        )}
      </div>

      <List {...rest} currency={currency} />
    </Box>
  );
}

function List({
  currency = "$",
  cleaning = 0,
  service = 0,
  checkIn,
  checkOut,
}) {
  return (
    <ul className="pricing__services">
      <ListItem>
        <span>Cleaning price:</span>
        <span>
          {currency}
          {cleaning}
        </span>
      </ListItem>

      <ListItem>
        <span>Service price:</span>
        <span>
          {currency}
          {service}
        </span>
      </ListItem>

      <ListItem>
        <span>Check in date:</span> <span>{checkIn}</span>
      </ListItem>

      <ListItem>
        <span>Check out date:</span> <span>{checkOut}</span>
      </ListItem>
    </ul>
  );
}

export default Pricing;
