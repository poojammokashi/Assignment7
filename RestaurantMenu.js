import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CDN_IMG } from "../config";
import Shimmer from "./Shimmer";

const RestaurantMenu = function(){
    const params = useParams();
    const [restaurnat , setRestaurant] = useState(null)
    
    const {id} = params;
    console.log(params);


    useEffect(()=>{
        getRestaurantInfo();
    },[])

    async function getRestaurantInfo(){
        const data = await fetch(" https://www.swiggy.com/dapi/menu/v4/full?lat=12.9801436&lng=77.5685724&menuId=" + id);
        const json = await data.json();
        console.log(json.data);
        setRestaurant(json.data);
    }
    
    // if(!restaurnat){
    //     return <Shimmer/>
    // }
    return !restaurnat ? (<Shimmer/>) : (
        <div className="menu">
            <div>
                <h1>Restaurant id: {id}</h1>
                <h2>{restaurnat?.name}</h2>
                <img src={CDN_IMG + restaurnat?.cloudinaryImageId}/>
                <h3>{restaurnat?.area}</h3>
                <h4>{restaurnat?.city}</h4>
                <h3>{restaurnat?.avgRating} stars</h3>
                <h4>{restaurnat?.costForTwoMsg}</h4>
            </div>
            <div>
                <h1>Menu</h1>
                <ul>
                    {
                        Object.values(restaurnat?.menu?.items).map((item)=>(
                            <li key={item.id}>{item.name}</li>
                        ))
                    }
                    

                </ul>

{/* <ul>
        {Object.values(restaurant?.menu?.items).map((item) => (
           <li key={item.id}>{item.name}</li>
          ))}
        </ul> */}
            </div>
        </div>
    )
}

export default RestaurantMenu;