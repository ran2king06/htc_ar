import './App.scss';

import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Unity, useUnityContext } from 'react-unity-webgl';

import i18n from './i18n';
import ImagePreloader from './imageLoaded';
import imageSources from './imageSources';
import Loading from './pages/loading/main';
import SceneCollection from './pages/scene_collection/main';
import SceneIntro from './pages/scene_intro/main';
import SceneQA from './pages/scene_qa/main';
import SceneReward from './pages/scene_reward/main';
import SceneStart from './pages/scene_start/main';
import SceneTour from './pages/scene_tour/main';

function App() {
  const [loading, setLoading] = useState(true);

  // 取得localStorage的語言設定
  const currentLanguage = localStorage.getItem('i18nextLng_htc_ar');


  const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
    loaderUrl: "./webgl/Build/Build.loader.js",
    dataUrl: "./webgl/Build/Build.data",
    frameworkUrl: "./webgl/Build/Build.framework.js",
    codeUrl: "./webgl/Build/Build.wasm",
  });

  const loadingPercentage = Math.round(loadingProgression * 100);

  useEffect(() => {
    if (currentLanguage) {
      i18n.changeLanguage(currentLanguage);
    }
  }, [currentLanguage]);

  // Clear htcAr_localStorgeData
  function clearLocalStorageData() {
    localStorage.removeItem('htcAr_localStorgeData')

    // refresh page
    window.location.reload();
  }

  return (
    <div className="App">
      <div className='app-container'>
        {isLoaded === false && (
          // We'll conditionally render the loading overlay if the Unity
          // Application is not loaded.
          <div className="loading-overlay">
            <p>Loading... ({loadingPercentage}%)</p>
          </div>
        )}

        <div className="app-canvas">
          {/* WEBGL BEAR */}
          <Unity unityProvider={unityProvider} />;
        </div>

        <div className="app-router-container">
          <Router>
            <Routes>
              <Route path="/" element={<SceneStart />} />
              <Route path="/intro" element={<SceneIntro />} />
              <Route path="/tour" element={<SceneTour />} />
              <Route path="/collection" element={<SceneCollection />} />
              <Route path="/reward" element={<SceneReward />} />
              <Route path="/qa" element={<SceneQA />} />
            </Routes>
          </Router>
        </div>
      </div>

      {/* 開發階段用：清空LocalStorage */}
      <button className="test-clear" onClick={clearLocalStorageData}>
        Clear Score
      </button>

      {
        loading && <Loading />
      }
      <ImagePreloader srcArray={imageSources} loadStatus={status => setLoading(status.every(s => s))} />
    </div >
  );
}

export default App;
