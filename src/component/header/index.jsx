import "./index.css";

import Logo from "./airbnb.svg";

function Header() {
  return (
    <header className="header">
      <img src={Logo} alt="Logo" height={32} />
    </header>
  );
}

export default Header;
