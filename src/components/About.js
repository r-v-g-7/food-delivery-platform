import ScrollToTop from "./ScrollToTop";

const AboutUs = () => {
  ScrollToTop()
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
      max-width: 1100px;
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
      display: flex;
      gap: 1rem;
      overflow: hidden;
    }

    .gta-card {
      background-color: #f9f9f9;
      border: 1px solid #e0e0e0;
      padding: 1rem;
      border-radius: 4px;
      flex: 1;
      display: flex;
      flex-direction: column;
    }

    .mission-card {
      flex: 0.4;
    }

    .crew-card {
      flex: 0.6;
    }

    .gta-card h2 {
      font-family: 'Chakra Petch', sans-serif;
      font-size: 1.4rem;
      color: #333;
      margin: 0 0 0.8rem 0;
      border-bottom: 2px solid #4CAF50;
      padding-bottom: 0.3rem;
      text-transform: uppercase;
    }

    .gta-card p {
      font-size: 0.85rem;
      line-height: 1.4;
      color: #555;
      margin: 0;
    }

    .crew-members {
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
      flex: 1;
    }

    .member {
      background-color: #fff;
      padding: 0.8rem;
      border: 1px solid #ddd;
      border-radius: 4px;
      flex: 1;
    }

    .member h3 {
      font-family: 'Chakra Petch', sans-serif;
      font-size: 1.1rem;
      color: #4CAF50;
      margin: 0 0 0.5rem 0;
      text-transform: uppercase;
    }

    .member p {
      font-size: 0.8rem;
      line-height: 1.3;
      color: #555;
      margin: 0;
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
      .gta-main-content {
        flex-direction: column;
        gap: 0.8rem;
      }
      
      .gta-header h1 {
        font-size: 2rem;
      }
      
      .crew-members {
        flex-direction: row;
        gap: 0.5rem;
      }
      
      .member {
        padding: 0.6rem;
      }
      
      .member h3 {
        font-size: 1rem;
      }
      
      .member p {
        font-size: 0.75rem;
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
            <div className="gta-card mission-card">
              <h2>Mission Briefing</h2>
              <p>
                Listen up, homie. Back in the day, the whole city was run by clowns servin' up busted, low-quality grub. We saw the turf was wide open. So we put a crew together, the original Grove Street Families of Flavor, to take back the streets. Our mission? To hustle the best eats from every corner of Los Santos straight to your crib. No nonsense, no sell-outs. Just real, respectable food, delivered fast.
              </p>
            </div>

            <div className="gta-card crew-card">
              <h2>Our Crew</h2>
              <div className="crew-members">
                <div className="member">
                  <h3>The Shot Caller</h3>
                  <p>The OG. Makes the big plays and ensures every order that leaves the spot is 100% legit. Mess up, and you answer to him.</p>
                </div>
                <div className="member">
                  <h3>The Wheelman</h3>
                  <p>This ain't no Sunday drive. Our drivers know every back alley and shortcut in the city. Your food arrives hot, fast, and untouched. Guaranteed.</p>
                </div>
                <div className="member">
                  <h3>The Kitchen Hustler</h3>
                  <p>Works the grill like a master. Turns simple ingredients into pure gold. The reason our food has the most respect on the streets.</p>
                </div>
              </div>
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
  return <AboutUs />;
}
