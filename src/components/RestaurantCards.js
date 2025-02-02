import { CDN_URL } from "../utils/constants";

const RestaurantCards = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId, sla } =
    resData.card.card.info;
  return (
    <div className="restaurant-cards">
      <img
        alt="res-logo"
        className="logo-img"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{resData.card.card.info.sla.deliveryTime} Minutes</h4>
    </div>
  );
};

export default RestaurantCards;
