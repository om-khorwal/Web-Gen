import React, { useState } from 'react'

function Button() {
    const [formdata, updateddata] = useState({
        logo: null,
        sitename: '',
        heroSection: '',
        aboutSection: '',

    });
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
        <div>
            <button id="submit" type="submit" onClick={submit}>Submit</button>
            <button onClick={getweb}>Get website</button>
        </div>
    )
}

export default Button