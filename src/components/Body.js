import RestaurantCards from "./RestaurantCards";
import resList from "../utils/mockswiggyData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  let [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setfiletredRestaurant] = useState([]);
  const [searchText, setsearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5090392&lng=88.33294269999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setListOfRestaurants(
      json?.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfiletredRestaurant(
      json?.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // if (listOfRestaurants.length === 0) {
  //   return <Shimmer></Shimmer>;
  // }

  // Conditional Rendering

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // Filter Logic
            const filteredList = listOfRestaurants.filter(
              (res) => res?.info.avgRating > 4.5
            );
            setListOfRestaurants(filteredList);
            console.log(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        <div className="search">
          <input
            className="search-box"
            type="text"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
              // console.log(searchText);
            }}
          ></input>
          <button
            onClick={() => {
              const filteredsearchRestuarant = listOfRestaurants.filter(
                (res) => {
                  return res.info?.name
                    ?.toLowerCase()
                    .includes(searchText.toLowerCase());
                }
              );
              setfiletredRestaurant(filteredsearchRestuarant);
              console.log(filteredsearchRestuarant);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="restaurant-container">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCards key={restaurant?.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
