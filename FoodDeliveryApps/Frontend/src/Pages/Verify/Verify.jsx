
import { useNavigate, useSearchParams } from 'react-router-dom'
import './verify.css'
import { useContext, useEffect} from 'react';
import { StoreContext } from '../../Context/StoreContext';
import axios from 'axios';


export default function Verify() {


    const [searchParams, setSeachParams] = useSearchParams();
    const success = searchParams.get("success");
    const orderId = searchParams.get("orderId");
    const {url} = useContext(StoreContext);
    const navigate = useNavigate();


    const verifyPayment = async () => {
        try {
            const response = await axios.post(url + "/api/order/verify", { success, orderId });
            console.log("Verify Response:", response.data); // <== Add this line
            if (response.data.success) {
                navigate('/myorders');
            } else {
                navigate("/");
            }
        } catch (error) {
            console.error("Verification Error:", error);
            navigate("/");
        }
    };
    useEffect(() => {
        console.log("Calling verifyPayment");
        verifyPayment();
      }, []);
      

  return (
    <div className='verify'>
    <div className="spinner"></div>
      
    </div>
  )
}