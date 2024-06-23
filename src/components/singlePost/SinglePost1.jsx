import Sidebar from "../sidebar/Sidebar"
import "./singlePost.css"

export default function SinglePost1() {
  return (
    <div className="singlePost">
       <div className="singlePostWrapper">
        <img  className="singlePostImg"  src="https://www.gtholidays.in/wp-content/uploads/2019/11/george-washington-bridge-america-680x500.jpg"
alt=""/>
<h1 className="singlePostTitle">Puerto Rico
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
Puerto Rico, self-governing island commonwealth of the West Indies, associated with the United States. The easternmost island of the Greater Antilles chain, it lies approximately 50 miles (80 km) east of the Dominican Republic, 40 miles (65 km) west of the Virgin Islands, and 1,000 miles (1,600 km) southeast of the U.S. state of Florida. It is situated in the northeastern Caribbean Sea, its northern shore facing the Atlantic Ocean. Two small islands off the east coast, Vieques and Culebra, are administratively parts of Puerto Rico, as is Mona Island to the west. Compared with its Greater Antillean neighbours, Puerto Rico is one-fifth as large as the Dominican Republic, one-third the size of Haiti, and slightly smaller than Jamaica. It is roughly rectangular in shape, extending up to 111 miles (179 km) from east to west and 39 miles (63 km) from north to south. The capital is San Juan.
Puerto Ricans, or puertorriqueños, have an intermingled Spanish, U.S., and Afro-Caribbean culture. The island’s social and economic conditions are generally advanced by Latin American standards, partly because of its ties with the United States (including the presence of U.S.-owned manufacturing plants and military bases in the commonwealth). Although that relationship has become politically controversial, the vast majority of Puerto Rican voters have continued to favour permanent union with the United States, with a slightly greater number favouring the current commonwealth relationship rather than statehood. A small but persistent minority has advocated independence.
Puerto Rico is largely composed of mountainous and hilly terrain, with nearly one-fourth of the island covered by steep slopes. The mountains are the easternmost extension of a tightly folded and faulted ridge that extends from the Central American mainland across the northern Caribbean to the Lesser Antilles. Although Puerto Rican relief is relatively low by continental standards, the island sits less than 100 miles (160 km) south of a precipitous depression in Earth’s crust: an extensive submarine feature of the Atlantic known as the Puerto Rico Trench, which descends to more than 5 miles (8 km) below sea level—the Atlantic’s deepest point—at a site northeast of the Dominican Republic. Powerful tectonic forces that over millions of years have created these features still occasionally cause earthquakes in Puerto Rico.
The island’s highest mountain range, the Cordillera Central, trends east-west and exceeds 3,000 feet (900 metres) in many areas; its slopes are somewhat gentle in the north but rise sharply from the south coast to the loftier peaks, topped at about 4,390 feet (1,338 metres) by Cerro de Punta, the highest point on the island. Near the island’s eastern tip, the partly isolated Sierra de Luquillo rises to 3,494 feet (1,065 metres) at El Yunque Peak.</p>
       </div> 
       <Sidebar/>           
    </div>
  )
}
