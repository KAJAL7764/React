
import "./Add.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function Add({url}) {
  

  const [image, setImage] = useState(false);
  const fileInputRef = useRef();

  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image);

    try {
      const response = await axios.post(`${url}/api/food/add`, formData);
      if (response.data.success) {
        setData({
          name: "",
          description: "",
          price: "",
          category: "Salad",
        });
        setImage(false);
        fileInputRef.current.value = ""; 
        toast.success(response.data.message)
      }
      else {
        toast.error(response.data.message)
      }
    } catch (err) {
      console.error("Axios Error:", err.response?.data || err.message);

    }
  };

  return (
    <div>
      <div className="add">
        <form className="flex-col" onSubmit={onSubmitHandler}>
          {/* Image Upload */}
          <div className="add-img-upload flex-col">
            <p>Upload Image</p>
            <label htmlFor="image">
              {image ? (
                <img
                  src={URL.createObjectURL(image)}
                  alt="Preview"
                  className="upload-preview"
                />
              ) : (
                <FontAwesomeIcon icon={faCloudArrowUp} />
              )}
            </label>
            <input
              ref={fileInputRef}
              onChange={(e) => setImage(e.target.files[0])}
              type="file"
              name="image"
              id="image"
              required
            />
          </div>

          {/* Product Name */}
          <div className="add-product-name flex-col">
            <p>Product Name</p>
            <input
              onChange={onChangeHandler}
              value={data.name}
              type="text"
              name="name"
              placeholder="Type here"
              required
            />
          </div>

          {/* Description */}
          <div className="add-product-description flex-col">
            <p>Product Description</p>
            <textarea
              onChange={onChangeHandler}
              value={data.description}
              name="description"
              rows="6"
              placeholder="Write content here"
              required
            ></textarea>
          </div>

          {/* Category & Price */}
          <div className="add-category-price">
            <div className="add-category flex-col">
              <p>Product Category</p>
              <select
                onChange={onChangeHandler}
                value={data.category}
                name="category"
              >
                <option value="Salad">Salad</option>
                <option value="Rolls">Rolls</option>
                <option value="Desert">Desert</option>
                <option value="Sandwich">Sandwich</option>
                <option value="Cack">Cack</option>
                <option value="Pure Veg">Pure Veg</option>
                <option value="Pasta">Pasta</option>
                <option value="Noodles">Noodles</option>
              </select>
            </div>

            <div className="add-price flex-col">
              <p>Product Price</p>
              <input
                onChange={onChangeHandler}
                value={data.price}
                type="number"
                name="price"
                placeholder="$30"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="add-btn">
            ADD
          </button>
        </form>
      </div>
    </div>
  );
}
