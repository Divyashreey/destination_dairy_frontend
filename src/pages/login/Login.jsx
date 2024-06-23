import { useRef,useContext } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import axios from "axios";
export default function Login() {
const userRef=useRef();
const passwordRef=useRef();
const {user,dispatch,isFetching}=useContext(Context);
  const handleSubmit= async (e)=>{
  e.preventDefault();
  dispatch({type:"LOGIN_START"});
  try{
  const res= await axios.post("/api/auth/login",{
    username:userRef.current.value,
    password:passwordRef.current.value,
  })
  dispatch({type:"LOGIN_SUCCESS",payload:res.data});
  }catch(err){
    dispatch({type:"LOGIN_FAILURE"});
  }
};

  return (
    <div className='login'>
      <div className="container-1">
        <span className="loginTitle"><b>Login</b></span>
   <form className="loginForm" onSubmit={handleSubmit}>
    <label>UserName</label>
    <input 
    type="text" 
    className="loginInput" 
    placeholder="Enter your username..." 
    ref={userRef}
    />
    <label>Password</label>
    <input type="password" 
    className="loginInput" 
    placeholder="Enter your password..." 
    ref={passwordRef}
    />
   <button className="loginButton" type="submit" disabled={isFetching}>Login </button>
   </form>
   <button className="loginRegisterButton"><Link to="/register"style={{textDecoration:"none",color:"inherit"}} >Register</Link></button>
    </div>
    </div>
  )
}
