import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return <div>
    <img
      src="https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/advice/maps-satellite-images/satellite-image-of-globe.jpg"
      alt=""
      className={s.mainImg}/>
    <div>
      ava + description
    </div>
    <MyPosts/>
  </div>
}

export default Profile;