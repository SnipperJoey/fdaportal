import React from "react";
import {Link} from "react-router-dom"
import './style.css'
import Button from "./Components/Button";

function Home(){
    return(
        <div>
                       
            <div id="home_profile">    
                <h2>Adya Aggarwal</h2>
                <Link id="edit_det_btn" to='/profile_edit'>Edit my details</Link>
                <h4>UserID:</h4><p>adya123</p>
                <h4>Email:</h4><p>adya.aggarwal@fdm.com</p>
                <h4>Phone Number:</h4><p>9283529873</p>
                <h4>Address:</h4><p>Flat 6, ABC Street <br></br>XYZ Road <br></br>London</p>       

                <Link id="edit_det_btn" to= '/Resetpass'>Reset Password</Link>           
            </div>

            <Link class = 'links' id = 'link_dashboard' to = "/dashboard"><h2>Dashboard</h2>Click here to view updates</Link>

            <Link class = 'links' id = 'link_chatbot' to = "/chatbot">
                <h2>Ask New Query</h2>  
                <Button text = 'General Query'></Button>
                <Button text = 'Technical Query'></Button>
            </Link>

            <Link class = 'links' id = 'link_prev_queries' to = "/prev_queries"><h2>Previous Queries</h2>Click here to view previous queries</Link>

            <Link class = 'links' id = 'link_request_leave' to = "/request_leave"><h2>Request Leave</h2>Click here to request a leave</Link>
            

            
            
        </div>
    )
}

export default Home;
