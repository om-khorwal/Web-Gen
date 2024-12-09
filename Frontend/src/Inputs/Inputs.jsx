import React, { useEffect,useState } from 'react'
import Button from '../Button/Button';

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

  const submit = async (e) => {
    e.preventDefault();
    const response = await fetch('https://web-gen-backend-nine.vercel.app/', {
        method: 'POST',
        body: JSON.stringify(formdata),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const result = await response.json();
    console.log(result)
}
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
  },[]);
const getweb = async () => {
    const response = await fetch('https://web-gen-backend-nine.vercel.app/latest', {
        method: 'GET',
    })
    const data = await response.json();
    // updatewebdata(data);
    const newWindow = window.open('', '_blank');

    // Write HTML content to the new window
    window.open('', '_blank').document.write(`
            <html>
              <head><title>${data.sitename}</title></head>
              <body>
                <h1>${data.sitename}</h1>
                <section>
                  <h2>Hero Section</h2>
                  <p>${data.heroSection}</p>
                </section>
                <section>
                  <h2>About Section</h2>
                  <p>${data.aboutSection}</p>
                </section>
              </body>
            </html>
          `);

    // Close the document to render it
    newWindow.document.close();
};

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
    <Button id="submit" type="submit" onClick={submit} label="Submit"/>
    <Button onClick={getweb} label="Get Website"/>


    <div>
            <ul>
              {user.map(user => <li key={user._id}>{user.sitename},{user.heroSection}, {user.aboutSection}</li>)}
            </ul>
          </div>  
    </form>
    

)
}

export default Inputs