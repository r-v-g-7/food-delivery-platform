import React, { useState, useEffect } from 'react';

const styles = `
.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  padding: 2rem;
  font-family: 'Inter', sans-serif;
  background-color: #f4f4f5; /* Changed to a light grey */
  overflow: hidden;
}

.animation-container {
  position: relative;
  width: 400px;
  height: 180px;
  margin-bottom: 2rem;
  border-radius: 20px;
  background: #ffffff; /* Changed to white */
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08); /* Adjusted shadow for light theme */
  overflow: hidden;
  animation: container-rumble 0.8s infinite;
}

.scooter {
  position: absolute;
  bottom: 20px;
  left: -100px; 
  width: 90px; 
  height: 90px; 
  animation: rocket-drive 0.8s cubic-bezier(0.55, 0.055, 0.675, 0.19) infinite;
  z-index: 2;
}

.rocket-flame {
    animation: flame-flicker 0.1s infinite alternate;
}

.food-trail {
  position: absolute;
  bottom: 45px;
  left: 40px;
  font-size: 2.5rem;
  opacity: 0;
  animation: food-explosion 0.8s ease-out infinite;
  z-index: 1;
}

.food-trail.burger { animation-delay: 0.05s; }
.food-trail.pizza { animation-delay: 0s; }
.food-trail.drink { animation-delay: 0.1s; }
.food-trail.fries { animation-delay: 0.15s; }
.food-trail.taco { animation-delay: 0.08s; }

.loading-text-wrapper {
  height: 30px;
  text-align: center;
}

.loading-text {
  font-size: 1.5rem;
  color: #374151; /* Changed to a dark grey for readability */
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: opacity 0.1s ease-in-out;
  /* Removed text-shadow as it's not ideal for light backgrounds */
}

/* Keyframe Animations */

@keyframes rocket-drive {
  0% {
    transform: translateX(0px);
  }
  100% {
    transform: translateX(550px);
  }
}

@keyframes flame-flicker {
    from { transform: scaleY(1) scaleX(1); opacity: 1; }
    to { transform: scaleY(1.2) scaleX(1.1); opacity: 0.8; }
}

@keyframes food-explosion {
  0% {
    opacity: 1;
    transform: translate(0, 0) scale(0.5) rotate(0deg);
  }
  100% {
    opacity: 0;
    transform: translate(var(--x, 100px), var(--y, -50px)) scale(1.5) rotate(360deg);
  }
}

@keyframes container-rumble {
    0% { transform: translate(0, 0); }
    25% { transform: translate(-1px, 1px); }
    50% { transform: translate(1px, -1px); }
    75% { transform: translate(1px, 1px); }
    100% { transform: translate(0, 0); }
}
`;

const loadingMessages = [
  "IGNITION!",
  "WARP SPEED!",
  "FETCHING FLAVOR!",
  "ZAP!",
  "INCOMING!",
];

const Loader = () => {
  const [currentText, setCurrentText] = useState(loadingMessages[0]);
  const [textOpacity, setTextOpacity] = useState(1);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTextOpacity(0);
      setTimeout(() => {
        index = (index + 1) % loadingMessages.length;
        setCurrentText(loadingMessages[index]);
        setTextOpacity(1);
      }, 100);
    }, 800); // Sync with animation duration

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{styles}</style>
      <div className="loading-container">
        <div className="animation-container">
          <svg className="scooter" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <g transform="translate(0, 0)">
                <path className="rocket-flame" d="M-5 16 C -2 16, -2 20, 0 20 C 2 20, 2 16, 5 16 L 0 28 Z" fill="#ffac33"/>
                <path className="rocket-flame" d="M-3 16 C -1 16, -1 19, 0 19 C 1 19, 1 16, 3 16 L 0 25 Z" fill="#ff6347" style={{animationDelay: '0.05s'}}/>
                <path d="M28.3,16.7a2.5,2.5,0,1,1-5,0" fill="#cccccc"/>
                <path d="M12.3,16.7a2.5,2.5,0,1,1-5,0" fill="#cccccc"/>
                <path d="M17,17h-3l-2-4h3l2-4h3v4h2l2,4h-5Z" fill="#ff6347"/>
                <path d="M13,12V8h2" stroke="#fff" strokeWidth="1"/>
            </g>
          </svg>
          <div className="food-trail burger" style={{'--x': '120px', '--y': '-60px'}}>🍔</div>
          <div className="food-trail pizza" style={{'--x': '80px', '--y': '40px'}}>🍕</div>
          <div className="food-trail drink" style={{'--x': '150px', '--y': '20px'}}>🥤</div>
          <div className="food-trail fries" style={{'--x': '200px', '--y': '-30px'}}>🍟</div>
          <div className="food-trail taco" style={{'--x': '50px', '--y': '-70px'}}>🌮</div>
        </div>
        <div className="loading-text-wrapper">
          <p className="loading-text" style={{ opacity: textOpacity }}>{currentText}</p>
        </div>
      </div>
    </>
  );
};

export default function Loading() {
  return (
    <div style={{ height: '100vh', display: 'grid', placeItems: 'center', backgroundColor: '#f4f4f5' }}>
      <Loader />
    </div>
  );
}
