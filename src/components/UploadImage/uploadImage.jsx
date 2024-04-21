'use client'

import React, { useState } from 'react';

const UploadImage = ({ onImageSelect }) => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      setImage(event.target.result);
      onImageSelect(event.target.result); 
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      {image && <img src={image} alt="Imagem selecionada" style={{ maxWidth: '100%' }} />}
    </div>
  );
};

export default UploadImage;
