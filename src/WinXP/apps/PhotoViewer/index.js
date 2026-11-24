import React, { useState } from 'react';
import styled from 'styled-components';

function PhotoViewer({ onClose, imgUrl, imgTitle = 'Photo.jpg' }) {
  const [scale, setScale] = useState(1);
  const [rotation, setRotation] = useState(0);

  // Zoom and rotation controls
  const zoomIn = () => setScale(s => Math.min(s + 0.25, 3));
  const zoomOut = () => setScale(s => Math.max(s - 0.25, 0.5));
  const resetZoom = () => {
    setScale(1);
    setRotation(0);
  };
  const rotateCW = () => setRotation(r => (r + 90) % 360);
  const rotateCCW = () => setRotation(r => (r - 90 + 360) % 360);

  return (
    <Container>
      {/* 1. Viewport: displays the single image */}
      <div className="viewer__viewport">
        {imgUrl ? (
          <img
            src={imgUrl}
            alt={imgTitle}
            className="viewer__image"
            style={{
              transform: `scale(${scale}) rotate(${rotation}deg)`,
            }}
          />
        ) : (
          <div className="viewer__placeholder">
            <p>🖼️ No photo selected.</p>
            <p>
              Pass an <code>imgUrl</code> prop to display an image!
            </p>
          </div>
        )}
      </div>

      {/* 2. XP Bottom Toolbar */}
      <footer className="viewer__toolbar">
        <button onClick={zoomIn} title="Zoom In">
          🔍 +
        </button>
        <button onClick={zoomOut} title="Zoom Out">
          🔍 -
        </button>
        <button onClick={resetZoom} title="Reset Size">
          1 : 1
        </button>
        <div className="separator" />
        <button onClick={rotateCCW} title="Rotate Left">
          ↶
        </button>
        <button onClick={rotateCW} title="Rotate Right">
          ↷
        </button>
      </footer>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f1f1f1;

  .viewer__viewport {
    flex: 1;
    overflow: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #2b2b2b; /* Sleek dark backdrop for photos */
    position: relative;
    padding: 10px;
  }

  .viewer__image {
    max-width: 95%;
    max-height: 95%;
    object-fit: contain;
    transition: transform 0.2s ease-out;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  }

  .viewer__placeholder {
    color: #bbb;
    text-align: center;
    font-size: 13px;
    code {
      background: #444;
      padding: 2px 5px;
      border-radius: 3px;
    }
  }

  .viewer__toolbar {
    height: 40px;
    background: linear-gradient(to bottom, #f7f5ef 0%, #ece8d8 100%);
    border-top: 1px solid #d4d0c8;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;

    button {
      padding: 3px 8px;
      font-size: 11px;
      font-family: Tahoma, sans-serif;
      background: #faf8f3;
      border: 1px solid #a09f9a;
      border-radius: 3px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 3px;

      &:hover {
        background: #fff;
        border-color: #0c4ad4;
        box-shadow: inset 0 0 2px rgba(12, 74, 212, 0.4);
      }
      &:active {
        background: #e3decb;
        transform: translate(1px, 1px);
      }
    }

    .separator {
      width: 1px;
      height: 20px;
      background-color: #b0aca3;
      margin: 0 4px;
    }
  }
`;

export default PhotoViewer;
