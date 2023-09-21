import React, { useState } from "react";
import Dropzone from "react-dropzone";

function ImageUploader({ onUpload }) {
  const [selectedImages, setSelectedImages] = useState([]);
  const [imageTags, setImageTags] = useState([]);
 
  const handleDrop = (acceptedFiles) => {
    const updatedImages = [...selectedImages, ...acceptedFiles];
    setSelectedImages(updatedImages);

    const updatedTags = acceptedFiles.map(() => "");
    setImageTags(updatedTags);
  };

  const removeImage = (index) => {
    const updatedImages = selectedImages.filter((_, i) => i !== index);
    setSelectedImages(updatedImages);

    const updatedTags = imageTags.filter((_, i) => i !== index);
    setImageTags(updatedTags);
  };

  const updateTag = (index, tag) => {
    const updatedTags = [...imageTags];
    updatedTags[index] = tag;
    setImageTags(updatedTags);
  };

  const handleUpload = () => {
    if (selectedImages.length === 0) {
      alert("Please select at least one image.");
      return;
    }

    if (imageTags.some((tag) => tag.trim() === "")) {
      alert("Please provide tags for all selected images.");
      return;
    }

    onUpload(selectedImages, imageTags);
    setSelectedImages([]);
    setImageTags([]);
  };

  return (
    <>
      <div className="drop-container">
        <h2>Image Uploader</h2>
        <Dropzone onDrop={handleDrop} accept="image/*">
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps()} className="dropzone">
              <input {...getInputProps()} />
              <p>Drag & drop images here, or click to select files.</p>
            </div>
          )}
        </Dropzone>
        <div className="image-preview">
          {selectedImages.map((file, index) => (
            <div key={index} className="image-preview-item">
              <img src={URL.createObjectURL(file)} alt={`Preview ${index}`} />
              <input
                type="text"
                placeholder="Enter tag(s)"
                value={imageTags[index]}
                onChange={(e) => updateTag(index, e.target.value)}
                maxLength="50"
              />
              <button onClick={() => removeImage(index)}>Remove</button>
            </div>
          ))}
        </div>
        <div className="upload">
          <button onClick={handleUpload}>Upload</button>
        </div>
      </div>
    </>
  );
}

export default ImageUploader;