import RestaurantCard from "./RestaurantCard";
import { cards } from "../utils/data.json";
import { useState } from "react";

var resData = cards;

const Body = () => {
    const [restaurantList, setRestaurantList] = useState(cards);

    const topRatingRestaurant = () => {
        const top = [...resData];
        console.log(top.cards)
        const store = restaurantList.filter(a => {
            return a.card.info.avgRating > 4.2;   
        });
        // resData = store
        setRestaurantList(store)
        console.log(store)
    }
    return (
      <div className="body">
        <button className="top" onClick={topRatingRestaurant}>Top Rated Restaurant</button>
        <div className="res-container">
          {
          restaurantList.map((card) => (
              // console.log(card.card.info.id)
            <RestaurantCard key={card.card.info.id} restaurant={card} />
          ))
          }
        </div>
      </div>
    );
  };

export default Body;