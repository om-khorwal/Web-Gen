import React, { useEffect, useState } from "react";
// import axios from "axios";

  const Webform = ()=>{
    const [formdata , updateddata] = useState({  
      logo:null,
      sitename: '',
      heroSection: '',
      aboutSection: '',
     
    });
    const [user , setuser] = useState([]);
    // const [webdata , updatewebdata] = useState([]);

    // useEffect(() => {
    //   axios.get("http://localhost:5000/api/data")
    //     .then((res) => setData(res.data))
    //     .catch((err) => console.error(err));
    // }, []);

    const change=(e)=>{
      const{name,value}=e.target;
      updateddata({...formdata,[name]:value})
    }

    const filechange=(e)=>{
      updateddata({...formdata,logo:e.target.files[0]});
    }

    const submit=async(e)=>{
      e.preventDefault();
      const response = await fetch('https://web-gen-nu.vercel.app',{
        method:'POST',
        body:JSON.stringify(formdata),
        headers:{
          'Content-Type':'application/json'
        }
      })
      const result = await response.json();
      console.log(result)
      }


      const getuser = async ()=>{
        const response = await fetch('https://web-gen-nu.vercel.app/',{
          method:'GET',
        })
        const data = await response.json();
        setuser(data);
      }
      const getweb = async ()=>{
      const response = await fetch('https://web-gen-nu.vercel.app/latest',{
            method:'GET',
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

      useEffect(()=>{
        getuser();
      })
      
    return (
      <>
    <form action="onsubmit">
        <h2>Website form</h2>
        
        <label htmlFor="">
            uploadlogo: logo
            <input type="file" onChange={filechange}/>
        </label>

        <h2>Website details</h2>

        <label htmlFor="">
          Name: 
          <input type="text" onChange={change} value={formdata.sitename} name="sitename" placeholder="enter the name of website" />
        </label>
        <br />
        <label htmlFor="">
        heroSection: 
          <input type="text" onChange={change} value={formdata.heroSection} name="heroSection" placeholder="enter the name of website" />
        </label>
        <br />

        <label htmlFor="">
        aboutSection: 
          <input type="text" onChange={change} value={formdata.aboutSection} name="aboutSection" placeholder="enter the name of website" />
        </label>
        <br />

      <button type="submit" onClick={submit}>Submit</button>
      <div>
        <button onClick={getweb}>Get website</button>
          
        </div>

    </form>
    <div>
      <ul>
        {user.map(user=><li key={user._id}>{user.sitename},{user.heroSection}, {user.aboutSection}</li>)}
      </ul>
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