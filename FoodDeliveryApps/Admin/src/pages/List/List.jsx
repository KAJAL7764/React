


import React, { useEffect, useState } from 'react';
import './List.css';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function List({url}) {
  
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`);
      // console.log(response.data);
      if (response.data.success) {
        setList(response.data.data);
      } else {
        toast.error('Failed to fetch data.');
      }
    } catch (error) {
      console.error('Fetch error:', error);
      toast.error('Server error!');
    }
  };

  const removeFood = async(foodId) => {
 const response = await axios.post(`${url}/api/food/remove`, {id:foodId});
 await fetchList();
 if(response.data.success) {
  toast.success(response.data.message);
 }
 else{
  toast.error("Error");
 }

  }

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className='list add flex-col'>
      <p>All Foods List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>

        {list.map((item, index) => (
          <div key={index} className='list-table-format'>
            <img src={`${url}/images/` + item.image} />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>₹{item.price}</p>
            <p style={{ color: "red", cursor: "pointer" }} onClick={() => removeFood(item._id)}>X</p>
          </div>
        ))}
      </div>
    </div>
  );
}
