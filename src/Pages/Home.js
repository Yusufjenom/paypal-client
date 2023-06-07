import { AppContext } from "../App";
import { useContext } from "react";
import {PayPalScriptProvider,PayPalButtons} from '@paypal/react-paypal-js'
import PayPalPayment from "./PayPalPayment";


const Home = () => {
    
    const { globalText } = useContext(AppContext)
     
    const initialOptions = {
        "client-id": "AZtcPAQtwa6Yi3WJnDzMzHw--q93fy4Ge-MnK9wuz7PqYngYfMqRfA4Wz2TShcvFphTWftzWZ3W0Bl_K",
        currency: "USD",
        intent: "capture",
    };
    
    return ( 
        <PayPalScriptProvider options={initialOptions}>
        <div>
           <h2>Welcome to the Home Page</h2>
            <p>Stick around you will know more about us by ust hanging on</p>
            <p>Welcome onboard: {globalText}</p>
            {/* <p>{data?.fact}</p> */}
            <PayPalButtons/>
            <PayPalPayment/>
        </div>
        </PayPalScriptProvider>
     );
}
 
export default Home;