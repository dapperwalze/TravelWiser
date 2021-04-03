import { OfferItem } from "./OfferItem";

export const Offer = () => {
  return (
    <div className="offer_container">
      <h2 className="offer_header">What we can offer you</h2>
      <div className="offer_items_block">
        <OfferItem
          offerItemHeader="Inspiration"
          offerItemContent="We want to inspire people to travel more and explore the beauty of the Earth! "
        />
        <OfferItem
          offerItemHeader="Shared experiences"
          offerItemContent="We are building a community where you can share your exploration. "
        />
        <OfferItem
          offerItemHeader="Tailored travels"
          offerItemContent="Everybody have their ideas of perfect travels and we help them happen! "
        />
      </div>
    </div>
  );
};
