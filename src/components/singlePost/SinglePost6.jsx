import "./singlePost.css"
import Sidebar from "../sidebar/Sidebar"
export default function SinglePost6() {
  return (
    <div className="singlePost">
       <div className="singlePostWrapper">
        <img  className="singlePostImg"  src="https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFsZGl2ZXN8ZW58MHx8MHx8fDA%3D"
alt=""/>
<h1 className="singlePostTitle">Maldives
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
Maldives, independent island country in the north-central Indian Ocean. It consists of a chain of about 1,200 small coral islands and sandbanks (some 200 of which are inhabited), grouped in clusters, or atolls.
The islands extend more than 510 miles (820 km) from north to south and 80 miles (130 km) from east to west. The northernmost atoll is about 370 miles (600 km) south-southwest of the Indian mainland, and the central area, including the capital island of Male (Male’), is about 400 miles (645 km) southwest of Sri Lanka.</p>
       </div>
       <Sidebar/>            
    </div>
  )
}
