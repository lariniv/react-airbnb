import "./index.css";

import Heading from "../heading";
import Box from "../box";
import ListItem from "../list-item";

function AdditionalProperties({
  rules,
  cancellation,
  transport,
  languages,
  offers,
  checkInPolicy,
}) {
  return (
    <Box className="additional" shadow>
      <Heading border>Additional info</Heading>

      <List
        rules={rules}
        cancellation={cancellation}
        transport={transport}
        languages={languages}
        offers={offers}
        checkInPolicy={checkInPolicy}
      ></List>
    </Box>
  );
}

function List({
  rules,
  cancellation,
  transport,
  languages,
  offers,
  checkInPolicy,
}) {
  return (
    <ul className="details__services">
      <ListItem title={"House rules"}>{rules}</ListItem>

      <ListItem title={"Cancellation policy"}>{cancellation}</ListItem>

      <ListItem title={"Local transport"}>{transport}</ListItem>

      <ListItem title={"Host languages"}>
        {languages.map((item) => {
          if (item !== languages[languages.length - 1]) {
            return <span>{item},</span>;
          } else {
            return <span>{item}</span>;
          }
        })}
      </ListItem>

      <ListItem title={"Special offers"}>{offers}</ListItem>

      <ListItem title={"Check in instuctions"}>{checkInPolicy}</ListItem>
    </ul>
  );
}
export default AdditionalProperties;
