// AdminDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import "./adminDetails.css"; // You may create a separate stylesheet for AdminDetails
import profile from "../../Images/profile.jpeg";
import Avatar2 from "../../Images/Avatar2.jpg";
import Avatar3 from "../../Images/Avatar3.jpg";
import Avatar4 from "../../Images/Avatar4.jpg";
import Avatar5 from "../../Images/Avatar5.jpg";

const adminData = {
  1: { id: 1, avatar: profile, name: 'Divya', posts: 10, bio: 'A software developer navigates both the digital and physical realms, embarking on global adventures. Between crafting code, they seize opportunities to explore the world, attending tech conferences and merging business with pleasure. Their journey intertwines professional growth with personal wanderlust, creating a unique balance between innovation and global exploration.' },
  2: { id: 2, avatar: Avatar2, name: 'Arun', posts: 5, bio: ' An environmental scientist passionately explores the globe, turning their dedication to nature into a career. From researching diverse ecosystems to advocating for sustainability, they contribute to conservation efforts worldwide. Whether studying endangered species or documenting environmental issues, this scientists work is a vital link between science and global ecological preservation.Nulla facilisi. Vivamus vel libero id libero venenatis auctor.' },
  3: { id: 3, avatar: Avatar3, name: 'Reema', posts: 0, bio: '  An archaeologist embarks on global expeditions, delving into research and fieldwork to unearth ancient civilizations. Beyond uncovering historical treasures, they immerse themselves in local cultures, weaving a rich tapestry of history. Their journey is a blend of scientific discovery and a personal quest to connect with the past and diverse human narratives.' },
  4: { id: 4, avatar: Avatar4, name: 'Aparna', posts: 2, bio: '  A freelance writer weaves tales of wanderlust, merging their craft with a passion for exploration. Specializing in travel articles, they traverse the globe, distilling the essence of diverse destinations into captivating narratives. Through prose and personal insights, they invite readers to embark on virtual journeys, inspiring a shared love for discovery.' },
  5: { id: 5, avatar: Avatar5, name: 'Diya', posts: 1, bio: 'A seasoned photographer transforms their love for photography into a career by specializing in diverse niches. From architectural marvels to underwater ecosystems, this globetrotter captures the worlds essence. Whether documenting cultural events, wildlife, or leading educational workshops, their lens paints a vivid tapestry, merging passion with profession.' }
};

const AdminDetails = () => {
  const { id } = useParams();
  const admin = adminData[id];

  if (!admin) {
    return <h2 className="center">Admin not found</h2>;
  }

  return (
    <div className="admin-details">
      <img src={admin.avatar} alt={`Image of ${admin.name}`} />
      <h2>{admin.name}</h2>
      <p>Number of Posts: {admin.posts}</p>
      <p>Bio: {admin.bio}</p>
    </div>
  );
};

export default AdminDetails;
