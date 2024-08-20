import { IMAGE_URL } from "../utils/constant";

const RestaurantCard = (props) => {
    const {name, cuisines, costForTwoMessage, avgRatingString, totalRatingsString, sla, cloudinaryImageId} = props.restaurant.card.info;
  //   console.log(resData);
    return (
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        <img
          className="res-logo"
          alt=""
          src={IMAGE_URL+cloudinaryImageId}
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(',')}</h4>
        <h4>{costForTwoMessage}</h4>
        <h4>Rating: {avgRatingString} ({totalRatingsString} ratings)</h4>
        <h4>Delivery Time: {sla.slaString}</h4>
      </div>
    );
  };

export default RestaurantCard;