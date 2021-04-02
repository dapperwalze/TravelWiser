import { ActionButton } from "./components/ActionButton";
import { Header } from "./components/Header";
import { Offer } from "./components/Offer";
import Jumbotron from "./images/jumbotron-image-1.png";
import WaterFall from "./images/water-fall.png";
import Samantha from "./images/samantha-texas.png";
import Tom from "./images/tom-chile.png";
import WangWei from "./images/wang-wei-china.png";
import Sam from "./images/sam-france.png";
import May from "./images/may-australia.png";
import Callout from "./images/callout.png";
import MountainsOfBabylon from "./images/mountain-of-babylon.png";
import NorwayHiking from "./images/norway-hiking.png";
import Copenhagen from "./images/denmark-copenhagen.png";
import BackPacking from "./images/back-packing-guide.png";
import { MainArticle } from "./components/MainArticle";
import { SideArticle } from "./components/SideArticle";
import { FooterLinks } from "./components/FooterLinks";
import { Footer } from "./components/Footer";

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="jumbotron">
        <div className="jumbotron-left">
          <div className="jumbotron-left-content">
            <h1 className="jumbotron-left-header">
              Travel planner in your pocket
            </h1>
            <h2 className="jumbotron-left-tagline">
              TravelWiser is a new platform connecting the travel community &
              has all the functions you need from a travel app.
            </h2>
            <ActionButton
              href="/"
              className="find-a-destination"
              text="Find a destination"
            />
            <ActionButton
              href="/"
              className="plan-your-trip"
              text="Plan your trip"
            />
          </div>
        </div>
        <div className="jumbotron-right">
          <div className="top-ellipse"></div>
          <img
            className="jumbotron-right-image"
            alt="A mini yellow bus on a road trip"
            src={Jumbotron}
          ></img>
        </div>
      </div>

      <div className="jumbotron-2">
        <div className="jumbotron-2-left">
          <img
            className="jumbotron-2-left-image"
            alt="Mountain top view of a water fall"
            src={WaterFall}
          ></img>
        </div>

        <div className="jumbotron-2-right">
          <div className="jumbotron-2-right-content">
            <h2 className="jumbotron-2-right-header">Everything in one app </h2>
            <h3 className="jumbotron-2-right-tagline">
              Including finding inspiration for next adventures, we help with
              planning and booking. After learning your travel interests and
              hobbies, our large data bank and clever AI is putting together the
              perfect trip.
            </h3>
          </div>
        </div>
        <div className="center-ellipse"></div>
        <div className="right-ellipse"></div>
      </div>
      <div className="offer-row">
        <h2>What we can offer you</h2>
        <div className="offers-container">
          <Offer
            offerHeader="Inspiration"
            offerContent="We want to inspire people to travel more and explore the beauty of the Earth! "
          />
          <Offer
            offerHeader="Shared experiences"
            offerContent="We are building a community where you can share your exploration. "
          />
          <Offer
            offerHeader="Tailored travels"
            offerContent="Everybody have their ideas of perfect travels and we help them happen! "
          />
        </div>
      </div>
      <div className="community-row">
        <div className="community-header">
          <h2>Join our wordwide community of travelers</h2>
          <ActionButton href="/" className="community-sign-up" text="Sign up" />
        </div>
        <div className="map">
          <img
            className="community-member-1"
            alt="Samantha from Texas"
            src={Samantha}
          ></img>

          <img className="callout-1" alt="callout" src={Callout}></img>

          <img
            className="community-member-2"
            alt="Tom from Chile"
            src={Tom}
          ></img>
          <img className="callout-2" alt="callout" src={Callout}></img>

          <img
            className="community-member-3"
            alt="Sam from France"
            src={Sam}
          ></img>
          <img className="callout-3" alt="callout" src={Callout}></img>
          <img
            className="community-member-4"
            alt="Wang Wei from China"
            src={WangWei}
          ></img>
          <img className="callout-4" alt="callout" src={Callout}></img>
          <img
            className="community-member-5"
            alt="May from Australia"
            src={May}
          ></img>
          <img className="callout-5" alt="callout" src={Callout}></img>
        </div>
      </div>

      <div className="blog-row">
        <h2>Our blog</h2>
        <h3 className="blog-tagline">
          Stories and tips written by us and our group of ambassadors from all
          over the world
        </h3>

        <div className="articles">
          <MainArticle
            src={MountainsOfBabylon}
            alt="Mountains of Babylon"
            title="Mountains of Babylon!"
            description="The hills are large and wide. Some even reach up to 4km. from the ground level."
            url="/"
            author="May.Smith"
          />
          <div className="side-articles">
            <SideArticle
              alt="Norway Hiking"
              src={NorwayHiking}
              url="/"
              title="Norway hiking – dangerous & difficult but
extremely amusing"
              author="Egle.Leino"
            />
            <SideArticle
              alt="Norway Hiking"
              src={Copenhagen}
              url="/"
              title="New Year’s Eve in Denmark | Evening full of surprises"
              author="Toomas.Laigu"
            />
            <SideArticle
              alt="Norway Hiking"
              src={BackPacking}
              url="/"
              title="Ultimate backpacking travel guide
for men"
              author="Toomas.Laigu"
            />
          </div>
        </div>
      </div>
      <FooterLinks />
      <Footer />
    </div>
  );
};

export default App;
