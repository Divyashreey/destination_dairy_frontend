import "./singlePost.css"
import Sidebar from "../sidebar/Sidebar"
export default function SinglePost8() {
  return (
    <div className="singlePost">
       <div className="singlePostWrapper">
        <img  className="singlePostImg"  src="https://www.gtholidays.in/wp-content/uploads/2022/07/Thailand-Honeymoon-Package.jpg"
alt=""/>
<h1 className="singlePostTitle">Bangkok
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
Bangkok, city, capital, and chief port of Thailand. It is the only cosmopolitan city in a country of small towns and villages and is Thailand’s cultural and commercial centre.
Bangkok is located on the delta of the Chao Phraya River, about 25 miles (40 km) from the Gulf of Thailand. It was formerly divided into two municipalities—Krung Thep on the east bank and Thon Buri on the west—connected by several bridges. In 1971 the two were united as a city-province with a single municipal government. In 1972 the city and the two surrounding provinces were merged into one province, called Krung Thep Maha Nakhon (Bangkok Metropolis). The metropolis is a bustling, crowded city, with temples, factories, shops, and homes juxtaposed along its roads and canals. It is also a major tourist destination, noted for bountiful cultural attractions and a nightlife that includes a flourishing sex trade.</p>
       </div>
       <Sidebar/>            
    </div>
  )
}
