import './App.scss';

import { ref, useCallback, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import SearchingBear1 from './assets/img/ar/1.png';
import ARDetecting from './assets/img/ar/detect.png';
import BtnCapture from './assets/img/btn/btn-capture.png';
import BtnGood from './assets/img/btn/btn-good.png';
import BtnNoProblem from './assets/img/btn/btn-noProblem.png';
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

// import { Unity, useUnityContext } from 'react-unity-webgl';

function App() {
  const [loading, setLoading] = useState(true);
  const [unityLoading, setUnityLoading] = useState(true);
  const [detectingAR, setDetectingAR] = useState(false);
  const [firstTimeScan, setFirstTimeScan] = useState(true);
  const [searchingBear, setSearchingBear] = useState(false);
  const [activateClickArea, setActivateClickArea] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [nextDialog, setNextDialog] = useState(0);
  const [showCapture, setShowCapture] = useState(false);

  // 取得localStorage的語言設定
  const currentLanguage = localStorage.getItem('i18nextLng_htc_ar');

  // const { unityProvider, isLoaded, loadingProgression, sendMessage } = useUnityContext({
  //   loaderUrl: "./Build/Build.loader.js",
  //   dataUrl: "./Build/Build.data",
  //   frameworkUrl: "./Build/Build.framework.js",
  //   codeUrl: "./Build/Build.wasm",
  // });

  // const loadingPercentage = Math.round(loadingProgression * 100);

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

  // 進入AR場景
  const enterAR = useCallback(() => {
    console.log('enterAR');
    setSearchingBear(true);
    // sendMessage('WebGLAPI', 'ChangeScene', '1');
    // }, [isLoaded]);
  }, []);

  useEffect(() => {
    // if id unityWEBGL is loaded
    const unityWEBGL = document.getElementById('unityWEBGL');
    unityWEBGL.onload = () => {
      console.log('unityWebGL_ready');

      console.log(unityWEBGL.contentWindow.addEventListener);

      // 偵聽unityWebGL_onReady事件
      unityWEBGL.contentWindow.document.addEventListener("unityWebGL_onReady", function () {
        setUnityLoading(false);
        setSearchingBear(false);

        // 設定語言
        if (currentLanguage === 'en') {
          document.getElementById("unityWEBGL").contentWindow.setLocalization('en');
        } else {
          document.getElementById("unityWEBGL").contentWindow.setLocalization('zh-tw');
        }

        // 隨機模式
        // const randomMode = Math.floor(Math.random() * 5) + 1;
        // document.getElementById("unityWEBGL").contentWindow.setGameMode(randomMode);
      });

      // 偵聽 unityWebGL_onImageTargetTracked 事件
      unityWEBGL.contentWindow.document.addEventListener("unityWebGL_onImageTargetTracked", function (e) {
        setDetectingAR(true);
        setActivateClickArea(true);
        setSearchingBear(false);

        setTimeout(() => {
          // 播放熊
          document.getElementById("unityWEBGL").contentWindow.playCurrentTrackedImage();
          setDetectingAR(false);
          setFirstTimeScan(false);

          // 播放熊動作
          setTimeout(() => {
            document.getElementById("unityWEBGL").contentWindow.playCurrentTrackedImage();
          }, 1000);

        }, 3000);

      });

      // 偵聽 unityWebGL_onImageTargetLost 事件
      unityWEBGL.contentWindow.document.addEventListener("unityWebGL_onImageTargetLost", function () {
        setDetectingAR(false);
        setSearchingBear(true);
      });
    }

  }, []);

  const clickBear = () => {
    setShowDialog(true);
  }

  const closeDialog = () => {
    setShowDialog(false);
    setNextDialog(0);
    setShowCapture(true);
  }

  // 回到開始畫面
  const backToStart = useCallback(() => {
    setFirstTimeScan(true);
    setDetectingAR(false);
    setSearchingBear(false);
    setActivateClickArea(false);
    setShowDialog(false);
    setShowCapture(false);
    // document.getElementById("unityWEBGL").contentWindow.backToStart();
  }, []);

  return (
    <div className="App">
      <div className='app-container'>
        {/* {isLoaded === false && (
          <div className="loading-overlay">
            <p>Loading... ({loadingPercentage}%)</p>
          </div>
        )} */}

        <div className="app-canvas">
          <div id="unity-container" className="unity-desktop">
          </div>
          {/* WEBGL BEAR */}
          {/* <Unity unityProvider={unityProvider} />; */}
          <iframe id="unityWEBGL" title="unity" src={`${process.env.PUBLIC_URL}/webgl/index.html`} className="unity-mobile" />
        </div>

        <div className="app-router-container">
          <Router>
            <Routes>
              <Route path="/" element={<SceneStart />} />
              <Route
                path="/intro"
                element={<SceneIntro enterAR={enterAR} backToStart={backToStart} />}
              />
              <Route path="/tour" element={<SceneTour />} />
              <Route path="/collection" element={<SceneCollection />} />
              <Route path="/reward" element={<SceneReward />} />
              <Route path="/qa" element={<SceneQA />} />
            </Routes>
          </Router>
        </div>

        {/* 點擊熊 */}
        {
          showDialog &&
          <div className="modal-click-bear">
            <p>
              {
                nextDialog === 0 ?
                  <>
                    嗨！我是高雄熊 <br />
                    歡迎來到高港水花園AR導覽體驗，<br />
                    很開心見到你！
                  </>
                  :
                  <>
                    一起完成在高港水花園的任務吧！ <br />
                    和我拍張照片留念，<br />
                    就可以獲得獎章哦！
                  </>
              }

            </p>

            {
              nextDialog === 0 && showDialog ?
                <button onClick={() => setNextDialog(1)}>
                  <img src={BtnGood} alt="Good" />
                </button>
                :
                <button onClick={() => closeDialog()}>
                  <img src={BtnNoProblem} alt="Next" />
                </button>
            }

          </div>
        }
      </div>

      {/* 開發階段用：清空LocalStorage */}
      <button className="test-clear" onClick={clearLocalStorageData}>
        Clear Score
      </button>

      {/* 辨識中... */}
      {
        detectingAR && firstTimeScan ?
          <div className="detecting-ar">
            <img src={ARDetecting} alt="Detecting AR" />
            <p>辨識中...</p>
          </div>

          :
          <></>
      }

      {/* 尋找圖像 */}
      {
        searchingBear ?
          <div className="searching-bear">
            <p>尋找圖像</p>
            <img src={SearchingBear1} alt="Searching Bear" />
          </div>

          :
          <></>
      }

      {/* 點擊區域 */}
      {
        activateClickArea &&
        <div className="click-area" onClick={clickBear}>
        </div>
      }

      {/* 顯示拍照 */}
      {
        showCapture &&
        <div className="show-capture">
          <button onClick={() => setShowCapture(false)}>
            <img src={BtnCapture} alt="capture" />
          </button>
          <p>
            和高雄熊拍張照
          </p>
        </div>
      }

      {/* 載入畫面 */}
      {
        (!unityLoading && !loading)
          ?
          <></>
          :
          <Loading />

      }
      <ImagePreloader srcArray={imageSources} loadStatus={status => setLoading(status.every(s => s))} />
    </div >
  );
}

export default App;
