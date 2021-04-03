import { Button } from "./Button";
import Jumbotron from "../images/hero-image-1.png";
import { Ellipse } from "./Ellipse";

export const Hero = () => {
  return (
    <div className="hero">
      <div className="hero_left_block">
        <div className="hero_left_block_content">
          <h1 className="hero_header">Travel planner in your pocket</h1>
          <h2 className="hero_tagline">
            TravelWiser is a new platform connecting the travel community & has
            all the functions you need from a travel app.
          </h2>
          <Button
            href="/"
            className="btn find_a_destination"
            text="Find a destination"
          />
          <Button
            href="/"
            className="btn plan_your_trip"
            text="Plan your trip"
          />
        </div>
      </div>
      <div className="hero_right_block">
        <Ellipse className="top_ellipse" />
        <img
          className="hero_right_block_image"
          alt="A mini yellow bus on a road trip"
          src={Jumbotron}
        ></img>
      </div>
    </div>
  );
};
