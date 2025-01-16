
import { useState } from "react";
export default function LikeButton() {
 let [isLiked, setIsLiked] = useState(false); //initialization state
 let [clicks, setClicks] = useState(0);
    let toggleLike = () => {
     setIsLiked(!isLiked);
     setClicks(clicks+1);
    };

    let style = {
        color: "red"
      };
    
  return (
    <div>
    <p>Clicks : {clicks}</p>
  
      <h1 onClick={toggleLike }>
      {isLiked ? (
        <i  className="fa-solid fa-heart" style = {style}></i>
      ) :  (
        <i className="fa-regular fa-heart"></i>
      )}
      </h1>
    </div>
  )
}
