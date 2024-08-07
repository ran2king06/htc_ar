import './App.scss';

import { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import SearchingBear1 from './assets/img/ar/1.png';
import SearchingBear2 from './assets/img/ar/2.png';
import SearchingBear3 from './assets/img/ar/3.png';
import SearchingBear4 from './assets/img/ar/4.png';
import SearchingBear5 from './assets/img/ar/5.png';
import ARDetecting from './assets/img/ar/detect.png';
import BtnCapture from './assets/img/btn/btn-capture.png';
import BtnGood from './assets/img/btn/btn-good.png';
import BtnNoProblem from './assets/img/btn/btn-noProblem.png';
import ImgCongrats from './assets/img/collection/congrat.png';
import NoScene from './assets/img/no-scene.png';
import ModalIntro from './components/modal/ModalIntro';
import i18n from './i18n';
import ImagePreloader from './imageLoaded';
import imageSources from './imageSources';
import Loading from './pages/loading/main';
import SceneCollection from './pages/scene_collection/main';
import SceneIntro from './pages/scene_intro/main';
import ScenePlay from './pages/scene_play/main';
import SceneQA from './pages/scene_qa/main';
import SceneReward from './pages/scene_reward/main';
import SceneStart from './pages/scene_start/main';
import SceneTour from './pages/scene_tour/main';


function App() {
  const sceneIntroRef = useRef();
  const scenePlayRef = useRef();
  const { t } = useTranslation();

  const [loading, setLoading] = useState(true);
  const [unityLoading, setUnityLoading] = useState(true);
  const [detectingAR, setDetectingAR] = useState(false);
  const [firstTimeScan, setFirstTimeScan] = useState(true);
  const [searchingBear, setSearchingBear] = useState(false);
  // const [activateClickArea, setActivateClickArea] = useState(false);
  const [showDialog, setShowDialog] = useState(false); // 對話框
  const [nextDialog, setNextDialog] = useState(0);
  const [showCapture, setShowCapture] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [showCaptureResult, setShowCaptureResult] = useState(false);
  const [sceneMode, setSceneMode] = useState(1);

  const [capturePhoto, setCapturePhoto] = useState(null);
  const [captureDone, setCaptureDone] = useState(false);
  const [enterARBegin, setEnterARBegin] = useState(false);
  const [showRepo, setShowRepo] = useState(false);

  // 取得localStorage的語言設定
  const currentLanguage = localStorage.getItem('i18nextLng_htc_ar');

  // const { unityProvider, isLoaded, loadingProgression, sendMessage } = useUnityContext({
  //   loaderUrl: "./Build/Build.loader.js",
  //   dataUrl: "./Build/Build.data",
  //   frameworkUrl: "./Build/Build.framework.js",
  //   codeUrl: "./Build/Build.wasm",
  // });

  // const loadingPercentage = Math.round(loadingProgression * 100);

  // 建立locaStorage資料
  useEffect(() => {
    // htcAr_localStorgeData 資料結構，會有 
    // rewardPoints, missionA_1, missionA_2, missionB_1, missionB_2, missionC_1, missionC_2, missionD_1, missionD_2, missionE_1, missionE_2
    const userData = localStorage.getItem('htcAr_localStorgeData');
    if (!userData) {
      localStorage.setItem('htcAr_localStorgeData', JSON.stringify({
        rewardPoints: 0,
        exchangeSuccess: false,
        getNewScoreA_1: false,
        getNewScoreA_2: false,
        getNewScoreB_1: false,
        getNewScoreB_2: false,
        getNewScoreC_1: false,
        getNewScoreC_2: false,
        getNewScoreD_1: false,
        getNewScoreD_2: false,
        getNewScoreE_1: false,
        getNewScoreE_2: false,
        missionA_1: false,
        missionA_2: false,
        missionB_1: false,
        missionB_2: false,
        missionC_1: false,
        missionC_2: false,
        missionD_1: false,
        missionD_2: false,
        missionE_1: false,
        missionE_2: false
      }));
    }
  }, []);

  useEffect(() => {
    // 取得 query string
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const mode = urlParams.get('mode');
    setSceneMode(parseInt(mode));
  }, []);

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

  useEffect(() => {
    // 取得 query string
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let gameMode = urlParams.get('mode');

    // if id unityWEBGL is loaded
    const unityWEBGL = document.getElementById('unityWEBGL');
    unityWEBGL.onload = () => {

      // 偵聽unityWebGL_onReady事件
      unityWEBGL.contentWindow.document.addEventListener("unityWebGL_onReady", function () {

        if (!enterARBegin) {
          // 進入開始畫面
          document.getElementById("unityWEBGL").contentWindow.enterStartScene();
          setSearchingBear(false);

        } else {
          // 進入AR場景
          document.getElementById("unityWEBGL").contentWindow.enterARScene();
          setSearchingBear(true);
        }

        setUnityLoading(false);

        // 設定語言
        if (currentLanguage === 'en') {
          document.getElementById("unityWEBGL").contentWindow.setLocalization('en');
        } else {
          document.getElementById("unityWEBGL").contentWindow.setLocalization('zh-tw');
        }

        // 隨機模式
        // const randomMode = Math.floor(Math.random() * 5);
        // document.getElementById("unityWEBGL").contentWindow.setGameMode(randomMode);

        // TODO: 根據模式設定 / 要修改
        // 高雄港 KaoHarbor = 1 = ar2
        // 大港橋 GreatHarborBridge = 2 = ar4
        // 大港倉 KaoPortDepot = 3 = ar3
        // 港史館 KaoHarborMuseum = 4 = ar1
        // 水花園 KaoPortPark = 5 = ar0
        // 根據模式設定
        console.log(gameMode);

        switch (parseInt(gameMode)) {
          case 1:
            document.getElementById("unityWEBGL").contentWindow.setGameMode(2);
            break;
          case 2:
            document.getElementById("unityWEBGL").contentWindow.setGameMode(4);
            break;
          case 3:
            document.getElementById("unityWEBGL").contentWindow.setGameMode(3);
            break;
          case 4:
            document.getElementById("unityWEBGL").contentWindow.setGameMode(1);
            break;
          case 5:
            document.getElementById("unityWEBGL").contentWindow.setGameMode(0);
            break;
          default:
            break;
        }

        // 偵聽 unityWebGL_onImageTargetTracked 事件
        unityWEBGL.contentWindow.document.addEventListener("unityWebGL_onImageTargetTracked", function (e) {
          console.log(e);
          setDetectingAR(true);
          // setActivateClickArea(true);
          setSearchingBear(false);

          // 重新定位
          setShowRepo(false);

          setTimeout(() => {
            // 播放熊
            document.getElementById("unityWEBGL").contentWindow.playCurrentTrackedImage();
            setDetectingAR(false);
            setShowDialog(true);

            // 播放熊動作
            // setTimeout(() => {
            //   document.getElementById("unityWEBGL").contentWindow.playCurrentTrackedImage();
            // }, 1000);

          }, 3000);
        });

        // 偵聽 unityWebGL_onImageTargetLost 事件
        unityWEBGL.contentWindow.document.addEventListener("unityWebGL_onImageTargetLost", function () {


          // 重新定位
          setShowRepo(true);

          // setDetectingAR(false);
          // setSearchingBear(true);
          // setShowCapture(false);
        });
      });
    }

  }, [enterARBegin]);

  // const clickBear = () => {
  //   setShowDialog(true);
  // }

  const clickCapture = async () => {
    // console.log('clickCapture');
    setShowCapture(false);
    setShowCaptureResult(true);

    // 熊拍照 takeScreenshot
    const textBase64 = await document.getElementById("unityWEBGL").contentWindow.takeScreenshot();
    const imgBlob = base64ToBlob(textBase64, 'image/jpg');
    setCapturePhoto(URL.createObjectURL(imgBlob));
  }

  function base64ToBlob(base64, contentType = '') {
    const byteCharacters = atob(base64);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += 512) {
      const slice = byteCharacters.slice(offset, offset + 512);
      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    return new Blob(byteArrays, { type: contentType });
  }

  const closeDialog = () => {
    setShowDialog(false);
    setShowCapture(true);
    setNextDialog(0);

    // 重新定位
    document.getElementById("unityWEBGL").contentWindow.setCurrentTargetToCamera();

    // 熊隨機擺拍姿勢 triggerRandomCurrentTargetEffect
    document.getElementById("unityWEBGL").contentWindow.triggerRandomCurrentTargetEffect();
  }

  const reCapture = () => {
    setShowCaptureResult(false);
    setShowCapture(true);
  }

  const captureDoneBtn = () => {
    setShowCaptureResult(false);
    setShowDialog(true);
    setNextDialog(4);

    // 頒獎動作
    document.getElementById("unityWEBGL").contentWindow.triggerRandomCurrentTargetReward();

    // 給分
    saveScore();
  }

  // 根據模式給1分，并且儲存到localStorage
  const saveScore = () => {
    // 取得 query string
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const mode = urlParams.get('mode');
    setSceneMode(parseInt(mode));

    const gameMode = parseInt(mode);

    // 高雄港 KaoHarbor = 1
    // 大港橋 GreatHarborBridge = 2
    // 大港倉 KaoPortDepot = 3
    // 港史館 KaoHarborMuseum = 4
    // 水花園 KaoPortPark = 5

    const data = JSON.parse(localStorage.getItem('htcAr_localStorgeData')) || [];

    let points = 0;
    // 如果已經拿過分數，就不再給分
    if (
      (gameMode === 1 && data.missionA_1) ||
      (gameMode === 2 && data.missionB_1) ||
      (gameMode === 3 && data.missionC_1) ||
      (gameMode === 4 && data.missionD_1) ||
      (gameMode === 5 && data.missionE_1)
    ) {
      return;
    } else {
      points = 1;
    }

    if (!data) {
      return;
    }

    // 獲得獎章
    data.rewardPoints += points;

    // 根據模式解鎖任務
    switch (parseInt(mode)) {
      case 1:
        data.missionA_1 = true;
        data.getNewScoreA_1 = true;
        break;
      case 2:
        data.missionB_1 = true;
        data.getNewScoreB_1 = true;
        break;
      case 3:
        data.missionC_1 = true;
        data.getNewScoreC_1 = true;
        break;
      case 4:
        data.missionD_1 = true;
        data.getNewScoreD_1 = true;
        break;
      case 5:
        data.missionE_1 = true;
        data.getNewScoreE_1 = true;
        break;
      default:
        break;
    }

    // 更新 localStorage
    localStorage.setItem('htcAr_localStorgeData', JSON.stringify(data));
  }


  // 回到開始畫面 / 重置
  const backToStart = useCallback(() => {
    setFirstTimeScan(true);
    setDetectingAR(false);
    setSearchingBear(false);
    // setActivateClickArea(false);
    setShowDialog(false);
    setShowCapture(false);
    setShowCaptureResult(false);
    setCaptureDone(false);
    setCapturePhoto(null);

    setNextDialog(0);

    // document.getElementById("unityWEBGL").contentWindow.backToStart();
  }, []);

  // 任務完成
  const endMission = () => {
    setCaptureDone(true);
    setShowDialog(false);
  }

  // 播放對話
  const playDialog = () => {
    let next = nextDialog + 1;

    setNextDialog(next);

    if (next === 3) {
      setShowDialog(false);
      setShowCapture(true);
    }

    // 熊動作
    document.getElementById("unityWEBGL").contentWindow.triggerNextCurrentTargetEffect();
  }

  // 前往集點冊
  function goToCollectionScene() {
    // 進入收集畫面
    scenePlayRef.current.goCollection();

    // 重置
    backToStart();
  }

  // 進入AR場景 from Collection
  const enterSceneFromCollection = (index) => {
    // 進入AR場景
    setEnterARBegin(true);
    setSearchingBear(true);
    setSceneMode(index);
  }

  // function openARScene() {
  //   // set time out to wait for unity to load
  //   setTimeout(() => {
  //     sceneIntroRef.current.openAR();
  //   }, 500);
  // }

  // 隨機模式
  const randomMode = () => {
    const randomMode = Math.floor(Math.random() * 5);
    console.log(randomMode);
    document.getElementById("unityWEBGL").contentWindow.setGameMode(randomMode);
  }


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
                element={<SceneIntro ref={sceneIntroRef} setEnterARBegin={setEnterARBegin} backToStart={backToStart} openIntroModal={setIsOpen} />}
              />
              <Route path="/tour" element={<SceneTour />} />
              <Route path="/play"
                element={<ScenePlay ref={scenePlayRef} setEnterARBegin={setEnterARBegin} showRepo={showRepo} setSearchingBear={setSearchingBear} backToStart={backToStart} openIntroModal={setIsOpen} />}
              />
              <Route path="/collection" element={<SceneCollection arScene={enterSceneFromCollection} />} />
              <Route path="/reward" element={<SceneReward />} />
              <Route path="/qa" element={<SceneQA />} />
            </Routes>
          </Router>
        </div>

        {/* 點擊熊 */}
        {
          (showDialog && !showCapture && !showCaptureResult && !captureDone) &&
          <div className="modal-click-bear">
            <p>
              {
                sceneMode === 1 ?
                  // 大港橋 GreatHarborBridge
                  <>
                    {
                      nextDialog === 0 ?
                        <>
                          {t('ar_dialog.mode_1.dialog_1')}
                        </>
                        : nextDialog === 1 ?
                          <>
                            {t('ar_dialog.mode_1.dialog_2')}
                          </>
                          : nextDialog === 2 ?
                            <>
                              {t('ar_dialog.mode_1.dialog_3')}
                            </>
                            :
                            <>
                              {t('ar_dialog.mode_1.dialog_4')}
                            </>
                    }
                  </>
                  :
                  <></>
              }
              {
                sceneMode === 2 ?
                  // 大港倉 KaoPortDepot
                  <>
                    {
                      nextDialog === 0 ?
                        <>
                          {t('ar_dialog.mode_2.dialog_1')}
                        </>
                        : nextDialog === 1 ?
                          <>
                            {t('ar_dialog.mode_2.dialog_2')}
                          </>
                          : nextDialog === 2 ?
                            <>
                              {t('ar_dialog.mode_2.dialog_3')}
                            </>
                            :
                            <>
                              {t('ar_dialog.mode_2.dialog_4')}
                            </>
                    }
                  </>
                  :
                  <></>
              }
              {
                sceneMode === 3 ?
                  // 高雄港 KaoHarbor
                  <>
                    {
                      nextDialog === 0 ?
                        <>
                          {t('ar_dialog.mode_3.dialog_1')}
                        </>
                        : nextDialog === 1 ?
                          <>
                            {t('ar_dialog.mode_3.dialog_2')}
                          </>
                          : nextDialog === 2 ?
                            <>
                              {t('ar_dialog.mode_3.dialog_3')}
                            </>
                            :
                            <>
                              {t('ar_dialog.mode_3.dialog_4')}
                            </>
                    }
                  </>
                  :
                  <></>
              }
              {
                sceneMode === 4 ?
                  // 港史館 KaoHarborMuseum
                  <>
                    {
                      nextDialog === 0 ?
                        <>
                          {t('ar_dialog.mode_4.dialog_1')}
                        </>
                        : nextDialog === 1 ?
                          <>
                            {t('ar_dialog.mode_4.dialog_2')}
                          </>
                          : nextDialog === 2 ?
                            <>
                              {t('ar_dialog.mode_4.dialog_3')}
                            </>
                            :
                            <>
                              {t('ar_dialog.mode_4.dialog_4')}
                            </>
                    }
                  </>
                  :
                  <></>
              }
              {
                sceneMode === 5 ?
                  // 水花園 KaoPortPark
                  <>
                    {
                      nextDialog === 0 ?
                        <>
                          {t('ar_dialog.mode_5.dialog_1')}
                        </>
                        : nextDialog === 1 ?
                          <>
                            {t('ar_dialog.mode_5.dialog_2')}
                          </>
                          : nextDialog === 2 ?
                            <>
                              {t('ar_dialog.mode_5.dialog_3')}
                            </>
                            :
                            <>
                              {t('ar_dialog.mode_5.dialog_4')}
                            </>
                    }
                  </>
                  :
                  <></>
              }

            </p>

            {
              (nextDialog >= 0 && nextDialog < 3) && showDialog && !showCapture ?
                <button onClick={() => playDialog()}>
                  {/* TODO: 換成文字 */}
                  <img src={BtnGood} alt="Good" />

                </button>
                : nextDialog === 3 && showDialog ?
                  <button onClick={() => closeDialog()}>
                    <img src={BtnNoProblem} alt="Next" />
                  </button>
                  : nextDialog === 4 && showDialog ?
                    <button onClick={() => endMission()} className="btn-thanks">
                      {t('ar.thank_you')}
                    </button>
                    :
                    <></>
            }

          </div>
        }
      </div>

      {/* 開發階段用：清空LocalStorage */}
      <button className="test-clear" onClick={clearLocalStorageData}>
        Clear Score
      </button>

      {/* 隨機模式 */}
      <button className="test-random" onClick={randomMode}>
        隨機模式
      </button>

      {/* 辨識中... */}
      {
        (detectingAR && firstTimeScan && !showDialog && !showCapture) ?
          <div className="detecting-ar">
            <img src={ARDetecting} alt="Detecting AR" />
            <p>
              {t('ar.detecting')}
            </p>
          </div>

          :
          <></>
      }

      {/* 尋找圖像 */}
      {
        (searchingBear && !showCaptureResult) ?
          <div className="searching-bear">
            {/* {
              firstTimeScan ?
                <p>
                  {t('ar.findImage')}
                </p>
                :
                <p>
                  {t('ar.findAgain')}
                </p>
            } */}
            <p>
              {t('ar.findImage')}
            </p>
            {
              sceneMode === 1 ?
                <img src={SearchingBear1} alt="Searching Bear" />
                : sceneMode === 2 ?
                  <img src={SearchingBear2} alt="Searching Bear" />
                  : sceneMode === 3 ?
                    <img src={SearchingBear3} alt="Searching Bear" />
                    : sceneMode === 4 ?
                      <img src={SearchingBear4} alt="Searching Bear" />
                      : sceneMode === 5 ?
                        <img src={SearchingBear5} alt="Searching Bear" />
                        : <></>
            }
          </div>

          :
          <></>
      }

      {/* 點擊區域 */}
      {/* {
        (activateClickArea && !showDialog && !showCapture) &&
        <div className="click-area" onClick={clickBear}>
        </div>
      } */}

      {/* 顯示拍照 */}
      {
        showCapture &&
        <div className="show-capture">
          <button onClick={() => clickCapture()}>
            <img src={BtnCapture} alt="capture" />
          </button>
          <p>
            和高雄熊拍張照
          </p>
        </div>
      }

      {/* 拍完照視窗 */}
      {
        showCaptureResult &&
        <div className="capture-result">
          <div className="capture-img">
            <img src={capturePhoto} alt="Capture" />
          </div>
          <p>
            拍得真好！長按可以儲存圖片哦
          </p>

          <div className="cs-btn">
            <button onClick={() => reCapture()}>
              重拍
            </button>
            <button onClick={() => captureDoneBtn()}>
              拍完了
            </button>
          </div>
        </div>
      }

      {/* 任務完成 */}
      {/* 移到 scene_intro */}
      {
        captureDone &&
        <div className="mission-complete">
          <p>
            {t('ar.success_content')}
          </p>
          <img src={ImgCongrats} alt="Congrats" />
          <button onClick={() => goToCollectionScene()}>
            {t('ar.success_btn')}
          </button>
        </div>
      }

      {/* Modal 介紹 */}
      <ModalIntro
        modalIsOpen={modalIsOpen}
        closeModal={() => setIsOpen(false)}
      />

      {/* 載入畫面 */}
      {
        (!unityLoading && !loading)
          ?
          <></>
          :
          <Loading />

      }

      {/* 沒畫面 */}
      {
        ((sceneMode < 0 || sceneMode > 5) || !sceneMode) &&
        <div className="no-scene">
          <img src={NoScene} alt="No Scene" />
        </div>
      }
      <ImagePreloader srcArray={imageSources} loadStatus={status => setLoading(status.every(s => s))} />
    </div >
  );
}

export default App;
