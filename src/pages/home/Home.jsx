import {  useEffect, useState } from "react";
import axios from 'axios';
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header"
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css"
import { useLocation } from "react-router-dom";

export default function Home() {
  const [posts,setPosts]=useState([]);
  const {search}=useLocation();
  
useEffect(()=>{
  const fetchPosts = async () => {
    try {
      const res = await axios.get("/api/posts"+search);
      //console.log(res);
      setPosts(res.data);
      
      
    } catch (error) {
      console.log("Error fetching posts:", error);
    }
   
  };
  fetchPosts();
},[search]);
  return (
    <>
    <Header/>
    <div className="home">
     
     <Posts posts={posts} />
     <Sidebar/>
    </div>
    <Footer/>
  </>
  );
}
