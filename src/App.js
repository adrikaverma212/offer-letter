// src/App.js
// src/App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="background-container">
     
      <img src={`${process.env.PUBLIC_URL}/a.png`} alt="Background" className="background-image" />
      <img src={`${process.env.PUBLIC_URL}/G.png`} alt="Background" className='gg'  />

      <div className="content">

        <div className='logo'>
        <img src={`${process.env.PUBLIC_URL}/F.png`} alt="Background"  />
        </div>


        <h1>OFFER LETTER</h1>
        

        <section className="details">
          
          <p><strong>Date:</strong> 28-09-2024</p>
          <p className='strong'> CD/OL/1727522358914</p>
        </section>

        <section className="recipient">
          <h2>Dear Yatndeep Dubey,</h2>
          <p>
            We are pleased to offer you an internship opportunity from CODISHER as a
            <strong> Frontend Developer Intern</strong>.We believe that this internship will provide you with valuable exprience
            and skills that will assist you in your future career goals.
          </p>
          <p>
          In essence, your internship will embrace orientation and give emphasis on learning new
skills with a deeper understanding of concepts through hands-on application of the
knowledge you gained as an intern. Our team is confident that you will acknowledge your
obligation to perform all work allocated to you to the best of your ability within lawful and
reasonable direction given to you.
We look forward to a worthwhile and fruitful association which will make you equipped for
future projects. Wishing you the most enjoyable and truly meaningful internship program
experience, it’s best to be organized and plan the contents of your letter before sending it
out
          </p>
        </section>

        <section className="signature-section">
        <img src={`${process.env.PUBLIC_URL}/E.png`} alt="Background"  />
<div className='section2'>
<img src={`${process.env.PUBLIC_URL}/H.png`} alt="Background"  />
</div>
        </section>

        
      </div>
    </div>
  );
}

export default App;
