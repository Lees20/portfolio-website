import React, { useEffect } from 'react';
import '../styles/DinosaurGame.css';

const DinosaurGame = () => {
  useEffect(() => {
    const container = document.getElementById('runner-container');
    if (container) {
      container.innerHTML = `
        <div class="interstitial-wrapper">
          <div class="runner-container">
            <div id="offline-resources" class="resources">
              <div class="runner-canvas"></div>
            </div>
          </div>
        </div>
      `;

      const script = document.createElement('script');
      script.src = '/dino-game/index.js';
      script.async = true;
      container.appendChild(script);
    }

    return () => {
      const script = document.querySelector('script[src="/dino-game/index.js"]');
      if (script) script.remove();
    };
  }, []);

  return (
    <div className="dinosaur-game-container">
      <div id="runner-container" className="runner-container">
        <canvas className="runner-canvas" width="600" height="150"></canvas>
      </div>
    </div>
  );
};

export default DinosaurGame;
