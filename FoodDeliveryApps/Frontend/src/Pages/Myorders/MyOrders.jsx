import { useContext, useEffect, useState } from "react";
import "./MyOrder.css";
import { StoreContext } from "../../Context/StoreContext";
import axios from "axios";
import { BiPackage } from "react-icons/bi";

export default function MyOrders() {
  const { url, token } = useContext(StoreContext);
  const [data, setData] = useState([]);

  const fetchOrders = async () => {
    const response = await axios.post(
      url + "/api/order/userorders",
      {},
      { headers: { token } }
    );
    setData(response.data.data);
    console.log(response.data.data);
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  return (
    <div className="my-orders">
      <h2>My Orders</h2>
      <div className="container">
        {data.map((order, index) => {
          return (
            <div key={index} className="my-orders-order">
              <div>
                <h2>
                  <BiPackage size={30} color="red" /> My Orders
                </h2>
                <p>
                  {order.items.map((item, index) => {
                    if (index === order.items.length - 1) {
                      return item.name + " X " + item.quantity;
                    } else {
                      return item.name + " X " + item.quantity + ", ";
                    }
                  })}
                </p>
              </div>
              <div>${order.amount}.00</div>
              <div className="items">Items: {order.items.length}</div>
              <div className="status">
                <span>&#9679;</span> <b>{order.status}</b>
              </div>
              <div>
                <button>Track Order</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
