// Admin.js
import React, { useState } from 'react';
import "./admin.css";
import profile from "../../Images/profile.jpeg";
import Avatar2 from "../../Images/Avatar2.jpg";
import Avatar3 from "../../Images/Avatar3.jpg";
import Avatar4 from "../../Images/Avatar4.jpg";
import Avatar5 from "../../Images/Avatar5.jpg";
import { Link } from 'react-router-dom';

const adminsData = [
  { id: 1, avatar: profile, name: 'Divya', posts: 10 },
  { id: 2, avatar: Avatar2, name: 'Arun', posts: 5 },
  { id: 3, avatar: Avatar3, name: 'Reema', posts: 0 },
  { id: 4, avatar: Avatar4, name: 'Aparna', posts: 2 },
  { id: 5, avatar: Avatar5, name: 'Diya', posts: 1 }
];

const Admin = () => {
  const [admins, setAdmins] = useState(adminsData);

  return (
    <section className="admin">
      {admins.length > 0 ? (
        <div className="admin__container">
          {admins.map(({ id, avatar, name, posts }) => (
            <Link to={`/admin/${id}`} className='admins' style={{ textDecoration: "none", color: "inherit" }} key={id}>
              <div className="admins_avatar">
                <img src={avatar} alt={`Image of ${name}`} />
              </div>
              <div className="admins_info">
                <h4>{name}</h4>
                <p>{posts}</p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <h2 className='center'>No users / authors found</h2>
      )}
    </section>
  );
}

export default Admin;
