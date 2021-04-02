import { BrandLogo } from "./BrandLogo";
import FacebookIcon from "../images/facebook-icon.png";
import TwitterIcon from "../images/twitter-icon.png";
import InstagramIcon from "../images/instagram-icon.png";
import GooglePlusIcon from "../images/google-plus-icon.png";
import Logo from "../images/logo.png";

export const FooterLinks = () => {
  return (
    <footer className="footer-links">
      <div className="footer-logo">
        <BrandLogo src={Logo} />
      </div>
      <div className="site-navigation">
        <li>
          <a href="/">Home</a>
        </li>
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
      </div>

      <div className="site-navigation">
        <li>
          <a href="/">About Us</a>
        </li>
        <li>
          <a href="/">Privacy Policy</a>
        </li>
        <li>
          <a href="/">Careers</a>
        </li>
      </div>
      <div className="social-media">
        <a href="/">
          {" "}
          <img alt="Facebook Icon" src={FacebookIcon}></img>
        </a>
        <a href="/">
          {" "}
          <img alt="Twitter Icon" src={TwitterIcon}></img>
        </a>
        <a href="/">
          {" "}
          <img alt="Instagram Icon" src={InstagramIcon}></img>
          <a href="/">
            {" "}
            <img alt="Google plus Icon" src={GooglePlusIcon}></img>
          </a>
        </a>
      </div>
    </footer>
  );
};
