import { useEffect, useState } from "react";
import { cards } from "../utils/data.json";
import { useParams } from "react-router-dom";
import { IMAGE_URL } from "../utils/constant";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const params = useParams();
  console.log(cards);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const resData = await cards;
    setResInfo(resData);
  };

  return (
    <div className="restaurantMenu">
      <div>
        {resInfo?.length > 0
          ? resInfo.map(
              (item) =>
                item.card.info.id === params.resId && (
                  <div key={item.card.info.id}>
                    <h1>{item.card.info.name}</h1>
                    <img
                    height='300px'
                    width='400px'
                    alt=''
                    src={IMAGE_URL + item.card.info.cloudinaryImageId}
                    />
                    <h3>Menu</h3>
                    {item.card.info.cuisines.map((cuisine) => (
                      <li>{cuisine}</li>
                    ))}
                    <h3>Address</h3>
                    <p>{item.card.info.locality}</p>
                    <div>
                      <h3>Offer</h3>
                      <p>{item.card.info.costForTwoMessage}</p>
                    </div>
                  </div>
                )
            )
          : null}
      </div>
    </div>
  );
};

export default RestaurantMenu;
