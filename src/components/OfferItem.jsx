export const OfferItem = (props) => {
  return (
    <div className="offer_card">
      <h3 className="offer_item_header">{props.offerItemHeader}</h3>
      <h4 className="offer_item_content">{props.offerItemContent}</h4>
    </div>
  );
};
