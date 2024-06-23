import "./singlePost.css"
import Sidebar from "../sidebar/Sidebar"
export default function SinglePost5() {
  return (
    <div className="singlePost">
       <div className="singlePostWrapper">
        <img  className="singlePostImg"  src="https://www.gtholidays.in/wp-content/uploads/2022/07/Malaysia-Honeymoon-Package.jpg"
alt=""/>
<h1 className="singlePostTitle">Malaysia
<div className="singlePostEdit">
<i className="singlePostIcon fa-solid fa-pen-to-square"></i>
<i className="singlePostIcon fa-solid fa-trash"></i>
</div>
</h1>
<div className="singlePostInfo">
    <span className="singlePostAuthor">Author:<b>Divya</b></span>
    <span className="singlePostDate"> 1 hour ago</span>
</div>
<p className="SinglePostDesc">
Langkawi is an archipelago of 104 islands and the only UNESCO geo-park listed in Southeast Asia. It has some fantastic beaches, extraordinary wildlife, and lively nightlife. Some of the famous attractions on the island include Langkawi Cable Car, Sky Bridge, Kilim Karst Geoforest Park, and Underwater Langkawi. And if you’re an adrenaline junkie, there are plenty of watersport activities like parasailing, jet skiing, kayaking, banana boating, and canoeing.
        Pangkor is a small Chinatown popular for its traditional lifestyle and multiple beaches. You can catch a cultural show depicting ancient Chinese traditions and later enjoy the famous street food of Pangkor Island. Couples can visit the Sunset View Chalet every evening for some bird-watching.
      
</p>
       </div> 
       <Sidebar/>           
    </div>
  )
}
