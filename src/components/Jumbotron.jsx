import WaterFall from "../images/water-fall.png";
import { Ellipse } from "./Ellipse";

export const Jumbotron = () => {
  return (
    <div className="jumbotron">
      <div className="jumbotron_left_block">
        <img
          className="jumbotron_left_block_image"
          alt="Mountain top view of a water fall"
          src={WaterFall}
        ></img>
      </div>

      <div className="jumbotron_right_block">
        <div className="jumbotron_right_block_content">
          <h1 className="jumbotron_right_block_header">
            Everything in one app{" "}
          </h1>
          <h2 className="jumbotron_right_block_tagline">
            Including finding inspiration for next adventures, we help with
            planning and booking. After learning your travel interests and
            hobbies, our large data bank and clever AI is putting together the
            perfect trip.
          </h2>
        </div>
      </div>

      <Ellipse className="center_ellipse" />
      <Ellipse className="right_ellipse" />
    </div>
  );
};
