import { Button } from "./Button";
import Samantha from "../images/samantha-texas.png";
import Tom from "../images/tom-chile.png";
import WangWei from "../images/wang-wei-china.png";
import Sam from "../images/sam-france.png";
import May from "../images/may-australia.png";
import Callout from "../images/callout.png";

export const Map = () => {
  return (
    <div className="map_container">
      <div className="map_header">
        <h2>Join our wordwide community of travelers</h2>
        <Button
          href="/"
          className="btn travel_wiser_community_sign_up"
          text="Sign up"
        />
      </div>
      <div className="map">
        <img
          className="north_american_member"
          alt="Samantha from Texas"
          src={Samantha}
        ></img>

        <img
          className="north_american_member_callout"
          alt="callout"
          src={Callout}
        ></img>

        <img
          className="south_american_member"
          alt="Tom from Chile"
          src={Tom}
        ></img>
        <img
          className="south_american_member_callout"
          alt="callout"
          src={Callout}
        ></img>

        <img className="european_member" alt="Sam from France" src={Sam}></img>
        <img
          className="european_member_callout"
          alt="callout"
          src={Callout}
        ></img>
        <img
          className="asian_member"
          alt="Wang Wei from China"
          src={WangWei}
        ></img>
        <img className="asian_member_callout" alt="callout" src={Callout}></img>
        <img
          className="oceania_member"
          alt="May from Australia"
          src={May}
        ></img>
        <img
          className="oceania_member_callout"
          alt="callout"
          src={Callout}
        ></img>
      </div>
    </div>
  );
};
