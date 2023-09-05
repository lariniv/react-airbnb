import "./index.css";

function Contacts({ name, image, responseRate, responseTime, info, phone }) {
  return (
    <div className="contacts">
      <div className="contacts__header">
        <img src={image} alt="" className="contacts__avatar" />
        <div className="contacts__wrapper">
          <div className="contacts__name">Owner - {name}</div>
          <div className="contacts__credentials">
            <div className="contacts__credentials-item">{phone}</div>
            <div className="contacts__credentials-item">{responseTime}</div>
            <div className="contacts__credentials-item">
              {responseRate}% response speed
            </div>
          </div>
        </div>
      </div>
      <div className="contacs__content">{info}</div>
    </div>
  );
}

export default Contacts;
