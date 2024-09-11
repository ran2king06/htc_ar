import './css/main.scss';

import React, { forwardRef, useEffect, useImperativeHandle } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

import BtnBack from './../../assets/img/btn/btn-back.png';
import BtnNotify from './../../assets/img/btn/btn-notify.png';
import BtnQa from './../../assets/img/btn/btn-qa.png';
import ZhBtnCollect from './../../assets/img/btn/collect.png';
import EnBtnCollect from './../../assets/img/btn/en/collect.png';
import EnBtnIntro from './../../assets/img/btn/en/intro.png';
import EnBtnStart from './../../assets/img/btn/en/start.png';
import ZhBtnIntro from './../../assets/img/btn/intro.png';
import BtnMusicOFF from './../../assets/img/btn/MusicOff.png';
import BtnMusicON from './../../assets/img/btn/MusicOn.png';
import ZhBtnStart from './../../assets/img/btn/start.png';
import Footer from './../../components/footer';
import ModalNews from './../../components/modal/ModalNews';



const Scene_Intro = forwardRef(({ setEnterARBegin, backToStart, openIntroModal }, ref) => {
  const navigate = useNavigate();
  const { i18n, t } = useTranslation();
  const location = useLocation();

  const [modalNewsIsOpen, setIsOpenNews] = React.useState(null);
  const [modeStart, setModeStart] = React.useState('');
  const [btnCollect, setBtnCollect] = React.useState(ZhBtnCollect);
  const [btnIntro, setBtnIntro] = React.useState(ZhBtnIntro);
  const [btnStart, setBtnStart] = React.useState(ZhBtnStart);
  const [modeIndex, setModeIndex] = React.useState(null);
  const [alertCameraPermission, setAlertCameraPermission] = React.useState(false);

  const [queryUrl, setQueryUrl] = React.useState(null);
  const [musicToggle, setMusicToggle] = React.useState(true);

  useEffect(() => {
    // 取得語言
    const lng = localStorage.getItem('i18nextLng_htc_ar');
    i18n.changeLanguage(lng);

    if (lng === 'en') {
      setBtnCollect(EnBtnCollect);
      setBtnIntro(EnBtnIntro);
      setBtnStart(EnBtnStart);
    } else {
      setBtnCollect(ZhBtnCollect);
      setBtnIntro(ZhBtnIntro);
      setBtnStart(ZhBtnStart);
    }
  }, []);

  useEffect(() => {
    console.log('location');
    backToStart();
    setEnterARBegin(false);

    // 如果是從 AR 頁面回來，要重新載入 Unity
    if (document.getElementById("unityWEBGL").contentWindow.document.getElementById("unity-canvas")) {
      document.getElementById("unityWEBGL").contentWindow.enterStartScene();
    }

  }, [location]);

  function openNewsModal() {
    setIsOpenNews(true);
  }

  function afterOpenModalNews() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeNewsModalNews() {
    setIsOpenNews(false);
  }

  function openModal() {
    openIntroModal(true);
  }

  const goToTour = () => {
    navigate('/tour' + modeStart);
  };

  const goToCollection = () => {
    navigate('/collection' + modeStart)
  };

  const goToAr = () => {

    if (typeof DeviceMotionEvent.requestPermission === 'function') {
      // Handle iOS 13+ devices.
      DeviceMotionEvent.requestPermission()
        .then((state) => {
          if (state === 'granted') {
            // window.addEventListener('devicemotion', handleOrientation);
            joinGame();
          } else {
            // console.error('Request to access the orientation was rejected');
            joinGame();
          }
        })
        .catch(console.error);
    } else {
      // Handle regular non iOS 13+ devices.
      // window.addEventListener('devicemotion', handleOrientation);
      joinGame();
    }
  };

  const joinGame = () => {
    if ('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices) {
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: false })
        .then(() => {
          document.getElementById("unityWEBGL").contentWindow.enterARScene();
          navigate('/play' + modeStart);
        })
        .catch((err) => {
          // alert('您的瀏覽器不支援 WebRTC，請使用支援 WebRTC 的瀏覽器。');
          setAlertCameraPermission(true);
        });
    }
  };



  useEffect(() => {
    // 取得 param query
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const modeQuery = urlParams.get('mode');
    const newsModal = urlParams.get('newsModal');

    setQueryUrl(modeQuery);

    let mode = 0;
    if (modeQuery === 'KaoHarbor') {
      mode = 1;
    }
    if (modeQuery === 'GreatHarborBridge') {
      mode = 2;
    }
    if (modeQuery === 'KaoPortDepot') {
      mode = 3;
    }
    if (modeQuery === 'KaoHarborMuseum') {
      mode = 4;
    }
    if (modeQuery === 'KaoPortPark') {
      mode = 5;
    }

    if (newsModal === 'false') {
      setIsOpenNews(false);
    } else {
      setIsOpenNews(true);
    }
    setModeIndex(mode);

    setModeStart('?mode=' + queryUrl);
  }, [modeIndex, queryUrl]);

  const backToStartScene = () => {

    // 進入開始畫面
    document.getElementById("unityWEBGL").contentWindow.enterStartScene();
    backToStart();

    navigate(`/${modeStart}`);
  }

  const triggerDialogBear = () => {
    document.getElementById("unityWEBGL").contentWindow.triggerNextStartSceneEffect();
  }

  useImperativeHandle(ref, () => {
    return {
      openAR: () => {
        goToAr();
      }
    }
  }, []);

  const toggleMusic = () => {
    const bgm = document.getElementById("bgMusic");
    if (bgm.paused) {
      setMusicToggle(true);
      bgm.setAttribute('data-playing', 'true');
      bgm.play();
    } else {
      setMusicToggle(false);
      bgm.setAttribute('data-playing', 'false');
      bgm.pause();
    }
  }

  return (
    <div className="scene-intro">
      {/* 觸控範圍 */}
      <div className="touch-area" onClick={() => triggerDialogBear()}>

      </div>



      <header>
        <button onClick={() => backToStartScene()}>
          <img src={BtnBack} alt="Back" />
        </button>
        <div className="header-right">
          <button onClick={openNewsModal}>
            <img src={BtnNotify} alt="Notify" />
          </button>

          <button onClick={() => toggleMusic()}>
            {
              musicToggle ?
                <img src={BtnMusicON} alt="Music ON" />
                :
                <img src={BtnMusicOFF} alt="Music OFF" />
            }
          </button>

          <button onClick={openModal}>
            <img src={BtnQa} alt="Q&A" />
          </button>
        </div>
      </header>

      <div className="btn-container">
        <button style={{ width: '35%', maxWidth: '120px' }} onClick={goToTour}>
          <img src={btnIntro} alt="Intro" />
        </button>
        <button style={{ width: '35%', maxWidth: '120px' }} onClick={goToCollection}>
          <img src={btnCollect} alt="Collect" />
        </button>
        <button style={{ width: '30%', maxWidth: '115px' }} onClick={() => goToAr()}>
          <img src={btnStart} alt="Start" />
        </button>
      </div>

      <Footer />

      {/* 請開啟相機權限 */}
      {
        alertCameraPermission &&
        <div>
          <div className="camera-permission">
            <div className="camera-permission__content">
              <h2>
                {t('ar.openAr_camera_title')}
                <br />
              </h2>
              <p>
                {t('ar.openAr_camera_content')}
              </p>
              <button onClick={() => setAlertCameraPermission(false)}>
                {t('ar.openAr_camera_btn')}
              </button>
            </div>
          </div>
        </div>
      }

      {/* Modal 最新消息 */}
      <ModalNews
        modalIsOpen={modalNewsIsOpen}
        afterOpenModal={afterOpenModalNews}
        closeModal={closeNewsModalNews}
      />

    </div>
  );
});

export default Scene_Intro;
