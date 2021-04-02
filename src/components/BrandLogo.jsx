export const BrandLogo = (props) => {
  return (
    <a className="brand-name" href="/">
      <div className="brand-logo-container">
        <img
          className="brand-logo"
          alt="TravelWiser Brand Logo"
          src={props.src}
        ></img>
        <span>TravelWiser</span>
      </div>
    </a>
  );
};
