import React, { useEffect, useState } from "react";
// import axios from "axios";
import Inputs from "./Inputs/Inputs";
import Button from "./Button/Button";

const Webform = () => {
  const [user, setuser] = useState([]);
  const getuser = async () => {
    const response = await fetch('https://web-gen-backend-nine.vercel.app/', {
      method: 'GET',
    })
    const data = await response.json();
    setuser(data);
  }
  useEffect(() => {
    getuser();
  })

  return (
    <>
      <div id="main" >
        <Inputs/>
        <Button/>

           <div>
            <ul>
              {user.map(user => <li key={user._id}>{user.sitename},{user.heroSection}, {user.aboutSection}</li>)}
            </ul>
          </div>  
        {/* <div id="vector">
          <img width={800} src="https://cdn.pixabay.com/photo/2020/08/19/09/52/vector-art-5500539_1280.jpg" alt="" />
        </div> */}
      </div>

    </>
  );
}
export default Webform;


/* <fieldset>
<legend>Contact Details</legend>
<label>
  Phone:
  <input
    type="text"
    name="phone"
    value={formdata.contact.phone}
  />
</label>
<label>
  Email:
  <input
    type="email"
    name="email"
    value={formdata.contact.email}
  />
</label>
<label>
  Address:
  <textarea
    name="address"
    value={formdata.contact.address}
  />
</label>
</fieldset> */