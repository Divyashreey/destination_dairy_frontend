import "./singlePost.css"
import Sidebar from "../sidebar/Sidebar"
export default function SinglePost3() {
  return (
    <div className="singlePost">
       <div className="singlePostWrapper">
        <img  className="singlePostImg"  src="https://www.gtholidays.in/wp-content/uploads/2022/02/Switzerland-Honeymoon-Package-Cost.jpg"
alt=""/>
<h1 className="singlePostTitle">Switzerland
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
The weather in Switzerland is pleasant all through the year, making it ideal for different types of tourists. For instance, if you’re a ski enthusiast, winter is the best time to visit the country. But summer is equally beautiful, especially if you’re on a honeymoon. When you choose to go, there’s something for everyone in Switzerland.
        The country experiences spring from April to June and fall from September to October. These are known to be some of the best months for honeymooners looking for a memorable vacation.
        This place offers a panoramic view of the Alpine mountains. It is famous for its ski runs, climbing, hiking, and other outdoor activities. Honeymooning couples visit this car-free village to ride on horse-drawn carriages or experience fine dining at 3,883 metres above sea level.
        The second most populous and artsy city, Geneva is known for its museums and the world-famous Chillon Castle. Lake Geneva is one of the most famous places in Switzerland and the largest Alpine lake in Europe.
        </p>
       </div>
       <Sidebar/>            
    </div>
  )
}
