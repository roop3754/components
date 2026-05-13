import React from 'react';

function Gallery(props) {
  return (
    <div className="gallery-row">
      {props.images.map((image) => (
        <img key={image.index} src={image.url} alt="Gallery item" className="gallery-img" />
      ))}
    </div>
  );
}

export default Gallery;