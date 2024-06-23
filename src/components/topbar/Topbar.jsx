import { Link } from "react-router-dom";
import "./topbar.css"
import { useContext } from "react";
import { Context } from "../../context/Context";
import { IoInformationCircleOutline } from "react-icons/io5";

export default function Topbar(){

    const {user,dispatch}=useContext(Context);
    const PF=`${process.env.REACT_APP_API}/images/`
    const handlelogout=()=>{
        dispatch({type:"LOGOUT"})
    }
    
    return(
        <div className="top">
             <div className="topLeft">
             <i className=" topIcon fa-brands fa-facebook"></i>
             <i className=" topIcon fa-brands fa-twitter"></i>
             <i className=" topIcon fa-brands fa-pinterest"></i>
             <i className=" topIcon fa-brands fa-square-instagram"></i>   
             </div>  
             <div className="topCenter">
                <ul className="topList">
                <li className="topListItem"><Link to="/" style={{textDecoration:"none",color:"inherit"}} >Home</Link></li>
                <li className="topListItem"><Link to="/aboutUs"style={{textDecoration:"none",color:"inherit"}}>About</Link></li>
                <li className="topListItem"><Link to="/contactUs"style={{textDecoration:"none",color:"inherit"}}>Contact</Link></li>
                <li className="topListItem"><Link to="/write"style={{textDecoration:"none",color:"inherit"}}>Write</Link></li>
                <li className="topListItem"><Link to="/admin"style={{textDecoration:"none",color:"inherit"}}>Admin</Link></li>
                <li className="topListItem" onClick={handlelogout}>{ user&&"Logout"}</li>
                </ul>
                </div>  
                
            <div className="topRight">
                {
                    user?(<Link className="link" to="/settings"><img
                        className="topImg"
                        src={PF+user.profilePic}alt=""/>
                        </Link>):(
                   <ul className="topList"> 
                   <li className="topListItem"><Link to="/login" style={{textDecoration:"none",color:"inherit"}}>Login</Link></li>
                    <li className="topListItem"><Link to="/register" style={{textDecoration:"none",color:"inherit"}}>Register</Link></li>
                    </ul>
                )}

            <i className="topSearch fa-solid fa-magnifying-glass"></i>
            <IoInformationCircleOutline className="topSearch"/>
                
                </div> 
                 
               
        </div>
    );
}
