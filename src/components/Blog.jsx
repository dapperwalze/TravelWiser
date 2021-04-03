import MountainsOfBabylon from "../images/mountain-of-babylon.png";
import NorwayHiking from "../images/norway-hiking.png";
import Copenhagen from "../images/denmark-copenhagen.png";
import BackPacking from "../images/back-packing-guide.png";
import { MainArticle } from "../components/MainArticle";
import { SideArticle } from "../components/SideArticle";
export const Blog = () => {
  return (
    <div className="blog_container">
      <h2 className="blog_header">Our blog</h2>
      <h3 className="blog_tagline">
        Stories and tips written by us and our group of ambassadors from all
        over the world
      </h3>

      <div className="blog_articles">
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
  );
};
