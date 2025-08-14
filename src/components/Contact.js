import React from 'react';

const ContactUs = () => {
  const styles = `
    .gta-body {
      font-family: 'Roboto', sans-serif;
      background: #f4f4f5;
      color: #333;
      margin: 0;
      padding: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      max-height: 100vh;
      overflow: hidden;
    }

    .gta-container {
      width: 100%;
      max-width: 800px;
      height: 95vh;
      border: 3px solid #000;
      background-color: #ffffff;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
      border-radius: 8px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }

    .gta-header {
      background-color: #000;
      padding: 1rem 1.5rem;
      text-align: center;
      border-bottom: 3px solid #4CAF50;
      flex-shrink: 0;
    }

    .gta-header h1 {
      font-family: 'Chakra Petch', sans-serif;
      font-size: 2.5rem;
      color: #fff;
      text-transform: uppercase;
      margin: 0;
      text-shadow: 
        -1px -1px 0 #000,  
         1px -1px 0 #000,
        -1px  1px 0 #000,
         1px  1px 0 #000,
        -2px 2px 0 #4CAF50,
        -3px 3px 0 #4CAF50;
    }

    .gta-header p {
      margin: 0.5rem 0 0 0;
      font-size: 1rem;
      color: #ccc;
      font-weight: 500;
      letter-spacing: 1px;
    }

    .gta-main-content {
      flex: 1;
      padding: 1rem 1.5rem;
      overflow: hidden;
    }

    .gta-card {
      background-color: #f9f9f9;
      border: 1px solid #e0e0e0;
      padding: 1rem;
      border-radius: 4px;
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    .gta-card h2 {
      font-family: 'Chakra Petch', sans-serif;
      font-size: 1.5rem;
      color: #333;
      margin: 0 0 0.8rem 0;
      border-bottom: 2px solid #4CAF50;
      padding-bottom: 0.3rem;
      text-transform: uppercase;
    }

    .gta-card p {
      font-size: 0.9rem;
      line-height: 1.4;
      color: #555;
      margin: 0 0 1rem 0;
    }

    .contact-form {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .form-row {
      display: flex;
      gap: 1rem;
    }

    .form-group {
      flex: 1;
    }

    .form-group.full-width {
      flex: 1;
    }

    .contact-form label {
      display: block;
      margin-bottom: 0.3rem;
      font-weight: 700;
      color: #555;
      font-family: 'Chakra Petch', sans-serif;
      text-transform: uppercase;
      font-size: 0.8rem;
    }

    .contact-form input,
    .contact-form textarea {
      width: 100%;
      padding: 0.5rem;
      border: 2px solid #ccc;
      background-color: #fff;
      border-radius: 4px;
      font-size: 0.9rem;
      color: #333;
      box-sizing: border-box;
    }

    .contact-form input:focus,
    .contact-form textarea:focus {
      outline: none;
      border-color: #4CAF50;
    }
    
    .contact-form textarea {
      min-height: 80px;
      resize: none;
      flex: 1;
    }

    .contact-form .submit-btn {
      background-color: #4CAF50;
      color: #fff;
      padding: 0.6rem 1.2rem;
      border: 2px solid #000;
      font-family: 'Chakra Petch', sans-serif;
      font-size: 1rem;
      text-transform: uppercase;
      cursor: pointer;
      transition: background-color 0.2s;
      border-radius: 4px;
      align-self: flex-start;
      margin-top: auto;
    }

    .contact-form .submit-btn:hover {
      background-color: #3e8e41;
    }

    .gta-footer {
      background-color: #000;
      padding: 0.8rem;
      text-align: center;
      border-top: 3px solid #4CAF50;
      flex-shrink: 0;
    }

    .gta-footer p {
      margin: 0;
      font-family: 'Chakra Petch', sans-serif;
      font-size: 1.2rem;
      color: #4CAF50;
      text-transform: uppercase;
    }

    /* Responsive adjustments */
    @media (max-width: 768px) {
      .form-row {
        flex-direction: column;
        gap: 0.8rem;
      }
      
      .gta-header h1 {
        font-size: 2rem;
      }
      
      .contact-form textarea {
        min-height: 60px;
      }
    }

    @media (max-height: 600px) {
      .gta-header {
        padding: 0.5rem 1rem;
      }
      
      .gta-header h1 {
        font-size: 1.8rem;
      }
      
      .gta-header p {
        font-size: 0.9rem;
      }
      
      .gta-main-content {
        padding: 0.8rem 1rem;
      }
      
      .gta-card h2 {
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
      }
      
      .gta-card p {
        font-size: 0.8rem;
        margin-bottom: 0.8rem;
      }
      
      .contact-form {
        gap: 0.8rem;
      }
      
      .contact-form textarea {
        min-height: 50px;
      }
      
      .gta-footer {
        padding: 0.5rem;
      }
      
      .gta-footer p {
        font-size: 1rem;
      }
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
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" id="name" name="name" placeholder="Who's askin'?" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Your Email</label>
                    <input type="email" id="email" name="email" placeholder="How we reach you back?" />
                  </div>
                </div>
                <div className="form-group full-width">
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
