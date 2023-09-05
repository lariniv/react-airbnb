import "./index.css";

function Title({ title, rating, review, city, country, superhost }) {
  return (
    <div className="title">
      <h1 className="tittle__name">{title}</h1>
      <div className="title__block">
        <div className="title__block-value">{rating} rating</div>
        <div className="title__block-value">{review} reviews</div>
        <div className="title__block-value">
          {city}, {country}
        </div>
        {superhost ? (
          <div className="title__block-value">Super-host</div>
        ) : null}
      </div>
    </div>
  );
}

export default Title;
