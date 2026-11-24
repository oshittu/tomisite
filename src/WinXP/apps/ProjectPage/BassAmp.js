// this is an example
// when making new ones, dont forget to

// 1. register in src/WinXP/apps/index.js
//      import ProjectPage from './ProjectPage';
//      import BassAmp from './ProjectPage/BassAmp';

// 2. add to  appsettings
//         'Bass Amp': {
//   header: { title: 'Bass_Amp.html - Internet Explorer', icon: iePaper },
//   component: ProjectPage,
//   injectProps: {
//     fileName: 'Bass_Amp.html',
//     ContentComponent: BassAmp,
//   },
//   defaultSize: { width: 780, height: 600 },
//   defaultOffset: { x: 180, y: 50 },
//   resizable: true,
//   minimized: false,
//   multiInstance: true,
// },

// 3. put it inside the personal life folder (or whereber)
// items: [
//   // Clicking this inside the folder opens your rich HTML write-up!
//   { name: 'Bass Guitar Amp', icon: iePaper, app: 'Bass Amp' },
//   { name: 'Snowboarding', icon: folder, url: 'https://...' },
// ]

import React from 'react';
import dogPic from 'assets/tomipics/cutefortis.jpg'; // or any project photo!

export default function BassAmp() {
  return (
    <div>
      <h1>Bass Guitar Tube Preamp</h1>
      <p>
        Custom analog bass preamplifier designed with dual-band EQ and DI
        output.
      </p>

      {/* Side-by-side layout: Words on the left, Image on the right! */}
      <div className="side-by-side">
        <div style={{ flex: 1 }}>
          <h2>Engineering Highlights</h2>
          <p>
            Designed the schematic and analog filtering network to produce a
            warm vintage tone with minimal noise floor.
          </p>
          <p>
            Fabricated a custom 2-layer PCB and assembled all SMD components by
            hand.
          </p>
        </div>

        <div className="image-card" style={{ width: '260px' }}>
          <img src={dogPic} alt="Fortis helping with hardware" />
          <span>Fortis conducting the final audio check 🎧</span>
        </div>
      </div>

      <h2>Project Update & Media</h2>
      {/* Your LinkedIn iframe embed right in the page! */}
      <div className="embed-card">
        <iframe
          src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7473059156518797312?compact=1"
          height="399"
          width="100%"
          frameBorder="0"
          allowFullScreen=""
          title="LinkedIn Post"
        />
      </div>
    </div>
  );
}
