import React from 'react';
import './Exploremenu.css';
import { menu_list } from '../../assets/assets';

const Exploremenu = ({category, setCategory}) => {
  return (
    <div className='exploreMenu' id='exploreMenu'>
    <h1>Explore Menu</h1>
    <p className='exploreMenuText'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci ab et facilis a modi corporis consectetur possimus voluptate! Ab sapiente consequuntur accusantium libero omnis iure qui nostrum deleniti incidunt corrupti!</p>
    <div className="exploreMenuList">
        {menu_list.map((item, index) =>{
            return (
                <div onClick={() => setCategory(prev=> prev === item.menu_name? "all": item.menu_name)} key={index} className="exploreMenuListItem">
                    <img className={category === item.menu_name?"active":""} src={item.menu_image} alt={item.menu_name} />
                    <h3>{item.menu_name}</h3>
                </div>
            )
        })}
    </div>
<hr />
      
    </div>

)}

export default Exploremenu
