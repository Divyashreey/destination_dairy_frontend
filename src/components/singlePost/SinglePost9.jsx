import "./singlePost.css"
import Sidebar from "../sidebar/Sidebar"
export default function SinglePost9() {
  return (
    <div className="singlePost">
       <div className="singlePostWrapper">
        <img  className="singlePostImg"  src="https://www.gtholidays.in/wp-content/uploads/2022/07/Burj-Al-Arab-Dubai-Tour-Package.jpg"
alt=""/>
<h1 className="singlePostTitle">Dubai
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
Dubai, city and capital of the emirate of Dubai, one of the wealthiest of the seven emirates that constitute the federation of the United Arab Emirates, which was created in 1971 following independence from Great Britain. There are several theories about the origin of the name Dubai. One associates it with the daba—a type of locust that infests the area—while another holds that it refers to a market that existed near the city. In recent years Dubai has been compared to Singapore and Hong Kong and is often regarded as the Middle East’s premier entrepôt. Area 13.5 square miles (35 square km). Pop. (2017 est.) 2,919,178.
Dubai is a city of skyscrapers, ports, and beaches, where big business takes place alongside sun-seeking tourism. Because of its large expatriate population, it feels like a Middle Eastern melting pot, and the atmosphere is generally tolerant. Religious affiliations are not a prominent aspect of city life. Islam is the majority religion, but churches and Hindu temples coexist with Dubai’s mosques.</p>
       </div> 
       <Sidebar/>           
    </div>
  )
}
