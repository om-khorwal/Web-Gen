import React from 'react'
import { useState } from 'react';
function Inputs() {
  const [formdata, updateddata] = useState({
    logo: null,
    sitename: '',
    heroSection: '',
    aboutSection: '',

  });
  
  const change = (e) => {
    const { name, value } = e.target;
    updateddata({ ...formdata, [name]: value })
  }

  const filechange = (e) => {
    updateddata({ ...formdata, logo: e.target.files[0] });
  }
  return (
    <form id="form" action="onsubmit">
    <h2 id="Header">Website form</h2>

    <h2>Website details</h2>

    <label id="logo" htmlFor="">
      Logo: <br />
      <input type="file" onChange={filechange} />
    </label>
    <br />

    <label htmlFor="">
      Name: <br />
      <input id="sitename" type="text" onChange={change} value={formdata.sitename} name="sitename" placeholder="Enter the name of website" />
    </label>
    <br />

    <label htmlFor="">
      HeroSection: <br />
      <input id="heroSection" type="text" onChange={change} value={formdata.heroSection} name="heroSection" placeholder="Enter the herosection details" />
    </label>
    <br />

    <label htmlFor="">
      AboutSection: <br />
      <input id="aboutSection" type="text" onChange={change} value={formdata.aboutSection} name="aboutSection" placeholder="About your website/business" />
    </label>
    <br />      
    </form>

)
}

export default Inputs