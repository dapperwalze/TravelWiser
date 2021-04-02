export const Offer = (props) => {
  return (
    <div className="offer">
      <h3 className="offer-header">{props.offerHeader}</h3>
      <h4 className="offer-content">{props.offerContent}</h4>
    </div>
  );
};
