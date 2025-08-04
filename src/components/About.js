import React from 'react';

const AboutUs = () => {
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

    .crew-members {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1.5rem;
    }

    .member {
      background-color: #fff;
      padding: 1rem;
      border: 1px solid #ddd;
      border-radius: 4px;
    }

    .member h3 {
      font-family: 'Chakra Petch', sans-serif;
      font-size: 1.5rem;
      color: #333;
      margin-top: 0;
      text-transform: uppercase;
      color: #4CAF50;
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
              <h2>Mission Briefing</h2>
              <p>
                Listen up, homie. Back in the day, the whole city was run by clowns servin' up busted, low-quality grub. We saw the turf was wide open. So we put a crew together, the original Grove Street Families of Flavor, to take back the streets. Our mission? To hustle the best eats from every corner of Los Santos straight to your crib. No nonsense, no sell-outs. Just real, respectable food, delivered fast.
              </p>
            </div>

            <div className="gta-card">
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
