export const BrandLogo = (props) => {
  return (
    <a className="logo_link" href="/">
      <div className="logo_container">
        <img
          className="logo_image"
          alt="TravelWiser Brand Logo"
          src={props.src}
        ></img>
        <span>{props.name}</span>
      </div>
    </a>
  );
};
