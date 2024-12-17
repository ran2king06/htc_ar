import React, { useEffect } from 'react';

import LoadingImg01 from './img/loading.png';
import LoadingImg02 from './img/starting.png';

const Loading = () => {
  const [loadingPercent, setLoadingPercent] = React.useState(0);
  const [loadingImg, setLoadingImg] = React.useState(LoadingImg01);

  useEffect(() => {
    // 10秒，然後第10秒停留在80%，不再增加
    let count = 0;
    const timer = setInterval(() => {
      count += 1;
      setLoadingPercent(count);

      if (count === 50) {
        // clearInterval(timer);
        setLoadingImg(LoadingImg02);

        if (count === 100) {
          clearInterval(timer);
        }
      }
    }, 100);
  }, []);

  return (
    <div className="loading-bg">
      <img src={loadingImg} alt="Loading" />

      <div class="loading-bar">
        <span style={{ width: `${loadingPercent}%` }}></span>
      </div>
    </div>
  );
}

export default Loading;
