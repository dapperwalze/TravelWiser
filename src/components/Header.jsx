import { Button } from "./Button";
import { BrandLogo } from "./BrandLogo";
import Logo from "../images/logo.png";

export const Header = () => {
  return (
    <header className="header">
      <BrandLogo src={Logo} name="TravelWiser" />

      <nav className="header_nav">
        <ul>
          <li>
            <a href="/">Find destination</a>
          </li>
          <li>
            <a href="/">Plan your trip</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
          <li>
            <a href="/">Community </a>
          </li>
        </ul>
      </nav>
      <Button className="btn login_button" text="Login" href="/" />
      <Button className="btn sign_up_button" text="Sign up" href="/" />
    </header>
  );
};
