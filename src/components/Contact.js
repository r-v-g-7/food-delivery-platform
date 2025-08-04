import React from 'react';

const ContactUs = () => {
  const styles = `
    .gta-body {
      font-family: 'Roboto', sans-serif;
      background: #f4f4f5;
      color: #333;
      margin: 0;
      padding: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
    }

    .gta-container {
      width: 100%;
      max-width: 900px;
      border: 4px solid #000;
      background-color: #ffffff;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
      border-radius: 8px;
      overflow: hidden;
    }

    .gta-header {
      background-color: #000;
      padding: 1.5rem 2rem;
      text-align: center;
      border-bottom: 4px solid #4CAF50;
    }

    .gta-header h1 {
      font-family: 'Chakra Petch', sans-serif;
      font-size: 4rem;
      color: #fff;
      text-transform: uppercase;
      margin: 0;
      text-shadow: 
        -2px -2px 0 #000,  
         2px -2px 0 #000,
        -2px  2px 0 #000,
         2px  2px 0 #000,
        -3px 3px 0 #4CAF50,
        -4px 4px 0 #4CAF50;
    }

    .gta-header p {
      margin: 0;
      font-size: 1.2rem;
      color: #ccc;
      font-weight: 500;
      letter-spacing: 1px;
    }

    .gta-main-content {
      padding: 2rem;
    }

    .gta-card {
      background-color: #f9f9f9;
      border: 1px solid #e0e0e0;
      padding: 1.5rem;
      margin-bottom: 2rem;
      border-radius: 4px;
    }

    .gta-card h2 {
      font-family: 'Chakra Petch', sans-serif;
      font-size: 2rem;
      color: #333;
      margin-top: 0;
      margin-bottom: 1rem;
      border-bottom: 2px solid #4CAF50;
      padding-bottom: 0.5rem;
      text-transform: uppercase;
    }

    .gta-card p {
      font-size: 1rem;
      line-height: 1.6;
      color: #555;
    }

    .contact-form .form-group {
        margin-bottom: 1.5rem;
    }

    .contact-form label {
        display: block;
        margin-bottom: 0.5rem;
        font-weight: 700;
        color: #555;
        font-family: 'Chakra Petch', sans-serif;
        text-transform: uppercase;
    }

    .contact-form input,
    .contact-form textarea {
        width: 100%;
        padding: 0.75rem;
        border: 2px solid #ccc;
        background-color: #fff;
        border-radius: 4px;
        font-size: 1rem;
        color: #333;
        box-sizing: border-box;
    }

    .contact-form input:focus,
    .contact-form textarea:focus {
        outline: none;
        border-color: #4CAF50;
    }
    
    .contact-form textarea {
        min-height: 150px;
        resize: vertical;
    }

    .contact-form .submit-btn {
        background-color: #4CAF50;
        color: #fff;
        padding: 0.75rem 1.5rem;
        border: 2px solid #000;
        font-family: 'Chakra Petch', sans-serif;
        font-size: 1.2rem;
        text-transform: uppercase;
        cursor: pointer;
        transition: background-color 0.2s;
    }

    .contact-form .submit-btn:hover {
        background-color: #3e8e41;
    }

    .gta-footer {
      background-color: #000;
      padding: 1rem;
      text-align: center;
      border-top: 4px solid #4CAF50;
    }

    .gta-footer p {
      margin: 0;
      font-family: 'Chakra Petch', sans-serif;
      font-size: 1.5rem;
      color: #4CAF50;
      text-transform: uppercase;
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <div className="gta-body">
        <div className="gta-container">
          <header className="gta-header">
            <h1>Grove Street Eats</h1>
            <p>Respect. It's On The Menu.</p>
          </header>

          <main className="gta-main-content">
            <div className="gta-card">
              <h2>Hit Us Up</h2>
              <p>
                Got a problem? Need to talk business? Or maybe you just wanna give us props. Drop a line on the wire below. Don't waste our time, and we won't waste yours. Straight up.
              </p>
              <form className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" id="name" name="name" placeholder="Who's askin'?" />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Your Message</label>
                    <textarea id="message" name="message" placeholder="What's the word?"></textarea>
                </div>
                <button type="submit" className="submit-btn">Send It</button>
              </form>
            </div>
          </main>

          <footer className="gta-footer">
            <p>GROVE STREET 4 LIFE</p>
          </footer>
        </div>
      </div>
    </>
  );
};

export default function App() {
  return <ContactUs />;
}
