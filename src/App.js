import { Header } from "./components/Header";
import { Offer } from "./components/Offer";
import { FooterLinks } from "./components/FooterLinks";
import { Footer } from "./components/Footer";
import { Blog } from "./components/Blog";
import { Map } from "./components/Map";
import { Hero } from "./components/Hero";
import { Jumbotron } from "./components/Jumbotron";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Jumbotron />
      <Offer />
      <Map />
      <Blog />
      <FooterLinks />
      <Footer />
    </div>
  );
};

export default App;
