import "./singlePost.css"
import Sidebar from "../sidebar/Sidebar"
import Paris from "../../Images/Paris.mp4";
export default function SinglePost2() {
  return (
    <div className="singlePost">
       <div className="singlePostWrapper">
        <video className="singlePostImg" src={Paris} alt="" controls autoplay  />
<h1 className="singlePostTitle">Paris
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
Paris is one of the busiest airports in Europe, with several flights flying in and out from across the world. Charles de Gaulle International Airport is a major airport in Paris, with two other smaller airports servicing the city viz. Orly International Airport and Beauvais Airport.
        Traveling by sea is a fantastic experience for those traveling from the United Kingdom. Paris is well connected to many cities within France with five international train stations. Buses also ply internationally, connecting Paris with neighbouring countries – you can board one at the Gare Routiere Internationale du Paris-Gallieni.
        Public transport is excellent in Paris, with the Metro taking you anywhere within Paris and sometimes slightly beyond. All you need is a map to travel from one destination to another. Car hires and rentals are also available, but they are expensive.
        Remember to ask your travel advisor at GT Holidays about Paris Passlib – the city’s official pass that offers access to some of the major museums and monuments in the city. These passes are valid for one year from the date of activation. You can also cancel or change your visit until 48 hours before it is due.
        </p>
       </div> 
       <Sidebar/>           
    </div>
  )
}
