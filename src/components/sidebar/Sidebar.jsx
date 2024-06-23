import { useEffect, useState } from "react";
import "./sidebar.css"
import axios from "axios";
import { Link } from "react-router-dom";
export default function Sidebar() {
  const [cats,setCats]=useState([]);
  useEffect(()=>{
    
    const getCats=async()=>{
      const res=await axios.get("/api/categories")
      setCats(res.data)
    }
    getCats();
  },[])
  return (
    <div className='sidebar'>
      <div className="sidebarItem">
            <span className="sidebarTitle">About Me</span>
        <img  src="data:image/jpeg;base64,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" alt=""/>
      <p> A web developer is a programmer who develops World Wide Web applications using a client–server model.</p>
      </div>
      <div className="sidebarItem">
      <span className="sidebarTitle">Categories</span>
      <ul className="sidebarList">
        {cats.map((c,index)=>(
          <Link to={`/?cat=${c.name}`}style={{textDecoration:"none",color:"inherit"}} key={index}>
      <li className="sidebarListItem">{c.name}</li>
      </Link>
      ))}
      {/* <li className="sidebarListItem">Music</li>
      <li className="sidebarListItem">Style</li>
      <li className="sidebarListItem">Sport</li>
      <li className="sidebarListItem">Tech</li>
      <li className="sidebarListItem">Cinema</li> */}
      </ul>
      </div>
      <div className="sidebarItem">
      <span className="sidebarTitle">Follow us</span>
      <div className="sidebarSocial">
             <i className=" sidebarIcon fa-brands fa-facebook"></i>
             <i className=" sidebarIcon fa-brands fa-twitter"></i>
             <i className=" sidebarIcon fa-brands fa-pinterest"></i>
             <i className=" sidebarIcon fa-brands fa-square-instagram"></i>
        </div> 
      </div>
    </div>
  );
}
