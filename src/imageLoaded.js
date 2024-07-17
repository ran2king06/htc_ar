import React, { useEffect, useState } from 'react';

const preloadImages = (srcArray, callback) => {
  let loadedCount = 0;
  const totalImages = srcArray.length;
  const loadedStatus = new Array(totalImages).fill(false);

  srcArray.forEach((src, index) => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      loadedStatus[index] = true;
      loadedCount += 1;
      if (loadedCount === totalImages) {
        callback(loadedStatus);
      }
    };
    img.onerror = () => {
      loadedStatus[index] = false;
      loadedCount += 1;
      if (loadedCount === totalImages) {
        callback(loadedStatus);
      }
    };
  });
};

const ImagePreloader = ({ srcArray, loadStatus }) => {
  const [loadedStatus, setLoadedStatus] = useState(new Array(srcArray.length).fill(false));

  useEffect(() => {
    preloadImages(srcArray, setLoadedStatus);
    loadStatus(loadedStatus);

  }, [srcArray]);

  return (
    <div>
      {loadedStatus.every(status => status) ? (
        srcArray.map((src, index) => <img key={index} src={src} alt={`Image ${index}`} />)
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default ImagePreloader;
