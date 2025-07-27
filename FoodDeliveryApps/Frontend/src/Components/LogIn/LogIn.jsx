import  {  useContext, useState } from "react";
import "./LogIn.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../Context/StoreContext";
import axios from 'axios';

const LogIn = ({ setShowLogin }) => {
const {url, setToken} = useContext(StoreContext)


  const [currState, setCurrtState] = useState("Login");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHander = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };


  const onLogin = async (e) => {
e.preventDefault();
let newUrl = url;
if(currState === "Login") {
    newUrl += "/api/user/login"
}
else{
    newUrl += "/api/user/register"
}
const response = await axios.post(newUrl, data);
if (response.data.success) {
    console.log("🔁 Server response:", response.data);

    setToken(response.data.token)
    localStorage.setItem("token", response.data.token);
    setShowLogin(false);
}
else{
    alert(response.data.message)
}
  }


  return (
    <div className="login-page">
      <form onSubmit={onLogin} className="login-page-container">
        <div className="login-page-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-page-inputs">
          {currState === "Login" ? (
            <></>
          ) : (
            <input
              name="name"
              onChange={onChangeHander}
              value={data.name}
              type="text"
              placeholder="Enter your name"
              required
            />
          )}
          <input
            name="email"
            onChange={onChangeHander}
            value={data.email}
            type="email"
            placeholder="Enter your email"
            required
          />
          <input
            name="password"
            onChange={onChangeHander}
            value={data.password}
            type="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit">{currState === "Sign Up" ? "Create account" : "Login"}</button>
        <div className="login-page-condition">
          <input type="checkbox" required />
          <p>By continuing, i agree to the terms opf use and privacy policy</p>
        </div>
        {currState === "login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => setCurrtState("Sign Up")}>Click here </span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrtState("login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LogIn;
