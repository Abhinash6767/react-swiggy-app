import RestaurantCard from "./RestaurantCard";
import { cards } from "../utils/data.json";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

var resData = cards;

const Body = () => {
    const [restaurantList, setRestaurantList] = useState([]);
    const [filterRestaurant, setFilterRestaurant] = useState([]); 
    const [searchRes, setSearchRes] = useState('');

    useEffect(() => {
      fetchData();
    },[])

    const fetchData = async () => {
      const data = await cards;
      setRestaurantList(data);
      setFilterRestaurant(data);
    }

    
    const getSearchValue = (e) => {
      setSearchRes(e.target.value)
    }

    const topRatingRestaurant = () => {
        const store = restaurantList.filter(a => {
            return a.card.info.avgRating > 4.2;   
        });
        // resData = store
        setRestaurantList(store)
        console.log(store)
    }
    return (
      <div className="body">
        <div className="filter">
        <div className="search">
        <input type="text" className="search-box" placeholder="Search here..." value={searchRes} onChange={getSearchValue} />
        <button onClick={() => {
          // console.log(restaurantList)
          const filterRes = restaurantList.filter(a => a.card.info.name.toLowerCase().includes(searchRes.toLowerCase()))
          setFilterRestaurant(filterRes)
          // console.log(filterRes)
        }}>Search</button>
        </div>
        <button className="top" onClick={topRatingRestaurant}>Top Rated Restaurant</button>
        </div>
        <div className="res-container">
          {
          filterRestaurant.map((card) => (
            <Link
            className="resCardLink"
            key={card.card.info.id}
            to={'/restaurants/'+ card.card.info.id}>
            <RestaurantCard restaurant={card} />
            </Link>
          ))
          }
        </div>
      </div>
    );
  };

export default Body;