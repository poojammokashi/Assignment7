import { useState } from "react";
import {Link} from 'react-router-dom';

const loggedInUser = () => {
 // API call to check authentication
 return false;
};

const Title = function(){
    return (
        <>
        <img className="logo" alt="logo" src="https://i.pinimg.com/originals/e6/17/f1/e617f1bfb9af4d9cf132cd3dec0da072.jpg"/>
    </>
    );
};

const HeaderComponent = function(){
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <Link to='/'>
                        <li>Home</li>
                    </Link>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <li>Cart</li>
                </ul>
            </div>
            {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
     ) : (
      <button onClick={() => setIsLoggedIn(true)}>Login</button>
    )}
        </div>
    )
}

export default HeaderComponent;
  
  //actual how our data is present in object
  
  /*const burgerking = {
      name: "Burger King",
      image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/lhup2ew1evf3espl5fgs",
      cusines: ["Burgers" ,"America"], //this will be in the form of array
      rating:"4.2"
  }*/
  
  
  
  
  
  