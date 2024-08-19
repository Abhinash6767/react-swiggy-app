import React from "react";
import ReactDOM from "react-dom/client";
import { cards } from "./data.json";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://marketplace.canva.com/EAFzZd9frfk/1/0/1600w/canva-colorful-illustrative-restaurant-master-chef-logo-4rQv_oY-CF8.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const resData = cards;

const RestaurantCard = (props) => {
  const {name, cuisines, costForTwoMessage, avgRatingString, totalRatingsString, sla, cloudinaryImageId} = props.restaurant.card.info;
//   console.log(resData);
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt=""
        src={`https://media-assets.swiggy.com/swiggy/image/upload/`+cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(',')}</h4>
      <h4>{costForTwoMessage}</h4>
      <h4>Rating: {avgRatingString} ({totalRatingsString} ratings)</h4>
      <h4>Delivery Time: {sla.slaString}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {
        resData.map((card) => (
            // console.log(card.card.info.id)
          <RestaurantCard key={card.card.info.id} restaurant={card} />
        ))
        }
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
