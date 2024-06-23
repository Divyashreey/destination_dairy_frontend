import "./singlePost.css"
import Sidebar from "../sidebar/Sidebar"
export default function SinglePost4() {
  return (
    <div className="singlePost">
       <div className="singlePostWrapper">
        <img  className="singlePostImg"  src="https://plus.unsplash.com/premium_photo-1677097568748-d938f3be1cbf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aXRhbHl8ZW58MHx8MHx8fDA%3D"
alt=""/>
<h1 className="singlePostTitle">Italy
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
Italy is well connected and has plenty of international airports. Rome is the leading global entry point, followed by Milan. The main airports in the country include Pisa Galileo Galilei International Airport in Pisa, Leonardo da Vinci-Fiumicino International Airport in Rome, Malpensa International Airport in Milan, and Florence Amerigo Vespucci Airport in Florence, and Palermo International Airport in Sicily. All major airlines from across the world fly to most Italian cities.
        You can also take a luxury cruise from Mumbai high seas to Rome as an extended vacation that takes 18 long days and touches five different countries. You can enter Italy by road if you travel from France, Austria, Switzerland, or Slovenia.
        Italy is the best place for souvenir shopping. Venetian glass and masks, leather goods from Florentine, hand-painted ceramics, and fashion ensembles- Italy has it all and more. You will find a few pieces you want to carry back home for keepsake or gifting. 
       </p>
       </div> 
       <Sidebar/>           
    </div>
  )
}
