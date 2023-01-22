import { CDN_IMG } from "../config";
const RestaurantCard = function({
    name,
    cuisines,
    cloudinaryImageId,
    lastMileTravel
  }){
      return(
          <div className="card">
              {/* <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+
              restaurantlist[2].data?.cloudinaryImageId}/>
              <h2>{restaurantlist[2].data?.name}</h2>
              <h3>{restaurantlist[2].data?.cuisines.join(",")}</h3>
              <h4>{restaurantlist[2].data.lastMileTravel}minutes</h4> */}
  
              <img src={CDN_IMG+cloudinaryImageId}/>
              <h2>{name}</h2>
              <p>{cuisines.join(",")}</p>
              <h4>{lastMileTravel}minutes</h4>
          </div>
      )
  }

  export default RestaurantCard;