import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {restaurantlist } from "../config"
import RestaurantCard from "./Restaurant";
import Shimmer from "./Shimmer";

function filterData(searchText, restaurants) {
      const filterData = restaurants.filter((restaurant) =>
      restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
     );
    
      return filterData;
    }
    

  const Body = function(){
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const[allRestaurants, setAllRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    //console.log(restaurants)
    useEffect(()=>{
        //API call
        getRestaurants();
    },[]);

    async function getRestaurants(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9801436&lng=77.5685724&page_type=DESKTOP_WEB_LISTING");
        //console.log(data)
        const json = await data.json();
        console.log(json);
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }
    if(!allRestaurants) return null;

    // if(filteredRestaurants?.length === 0)
    // return <h1>No Restraunt match your Filter!!</h1>;

    return allRestaurants?.length === 0 ? (
       < Shimmer/>
        ) :(
        <>
        <div>
            <input type="text" placeholder="Search Names" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
            <button
         className="search-btn"
        onClick={() => {
          //need to filter the data
           const data = filterData(searchText, allRestaurants);
           // update the state - restaurants
          setFilteredRestaurants(data);        }}
      >
        Search
      </button>
        </div>
         <div className='restaurant-list'>
            {
            filteredRestaurants.map((restaurant) =>{
              return(
                <Link to={"/restaurant/" + restaurant.data.id} key={restaurant.data.id}>
                  <RestaurantCard{...restaurant.data} />
                  </Link>
                ) 
              })
            }
        </div>
        </>
    )
    }

   

    export default Body;