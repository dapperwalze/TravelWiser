import { ActionButton } from "./ActionButton";
import { BrandLogo } from "./BrandLogo";
import Logo from "../images/logo.png";

export const Header = () => {
  return (
    <header className="header">
      <BrandLogo src={Logo} />

      <nav id="top-nav">
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
      <ActionButton className="login-button" text="Login" href="/" />
      <ActionButton className="sign-up-button" text="Sign up" href="/" />
    </header>
  );
};
