import React from 'react';
import styled from 'styled-components';

function PhotoGallery({ onClose }) {
  function onClickOptionItem(item) {
    switch (item) {
      case 'Close':
        onClose();
        break;
      default:
    }
  }
  return (
    <div style={{ height: '100%', width: '100%' }}>
      {/* Your app content / UI goes here */}
    </div>
  );
}

export default PhotoGallery;
