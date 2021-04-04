import { BrandLogo } from "./BrandLogo";
import FacebookIcon from "../images/facebook-icon.png";
import TwitterIcon from "../images/twitter-icon.png";
import InstagramIcon from "../images/instagram-icon.png";
import GooglePlusIcon from "../images/google-plus-icon.png";
import Logo from "../images/logo.png";

export const FooterLinks = () => {
  return (
    <footer className="footer_links_container">
      <div className="footer_logo">
        <BrandLogo src={Logo} name="TravelWiser" />
      </div>
      <div className="footer_site_navigation">
        <li>
          <a className="footer_site_navigation_link" href="/">
            Home
          </a>
        </li>
        <li>
          <a className="footer_site_navigation_link" href="/">
            Find destination
          </a>
        </li>
        <li>
          <a className="footer_site_navigation_link" href="/">
            Plan your trip
          </a>
        </li>
        <li>
          <a className="footer_site_navigation_link" href="/">
            Blog
          </a>
        </li>
        <li>
          <a className="footer_site_navigation_link" href="/">
            Community{" "}
          </a>
        </li>
      </div>

      <div className="footer_site_navigation">
        <li>
          <a className="footer_site_navigation_link" href="/">
            About Us
          </a>
        </li>
        <li>
          <a className="footer_site_navigation_link" href="/">
            Privacy Policy
          </a>
        </li>
        <li>
          <a className="footer_site_navigation_link" href="/">
            Careers
          </a>
        </li>
      </div>
      <div className="social_media_links_block">
        <div className="social_media_icon_container">
          <a className="social_media_link" href="/">
            {" "}
            <img
              className="facebook_icon"
              alt="Facebook Icon"
              src={FacebookIcon}
            ></img>
          </a>
          <a className="social_media_link" href="/">
            {" "}
            <img
              className="twitter_icon"
              alt="Twitter Icon"
              src={TwitterIcon}
            ></img>
          </a>
          <a className="social_media_link" href="/">
            {" "}
            <img
              className="instagram_icon"
              alt="Instagram Icon"
              src={InstagramIcon}
            ></img>
          </a>
          <a className="social_media_link" href="/">
            {" "}
            <img
              className="google_plus_icon"
              alt="Google plus Icon"
              src={GooglePlusIcon}
            ></img>
          </a>
        </div>
      </div>
    </footer>
  );
};
