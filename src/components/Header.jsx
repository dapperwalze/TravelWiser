import { Button } from "./Button";
import { BrandLogo } from "./BrandLogo";
import Logo from "../images/logo.png";
import Menu from "../images/menu.svg";
import React, { useState } from "react";

export const Header = () => {
  const [mobileMenuState, setMobileMenuState] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuState(!mobileMenuState);
  };

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
      <img
        className="mobile_menu"
        alt="menu"
        src={Menu}
        onClick={toggleMobileMenu}
      ></img>
      <div
        className="mobile_menu_drop_down_block"
        style={{
          height: mobileMenuState ? "100vh" : "0vh",
        }}
      >
        <div className="inner_mobile_menu_container">
          <span onClick={toggleMobileMenu}>Close X</span>
          <a href="/">Find destination</a>
          <a href="/">Plan your trips</a>
          <a href="/">Blog</a>
          <a href="/">Community </a>
          <Button className="btn login_button" text="Login" href="/" />
          <Button
            className="btn sign_up_button mobile_sign_up_button"
            text="Sign up"
            href="/"
          />
        </div>
      </div>
    </header>
  );
};
