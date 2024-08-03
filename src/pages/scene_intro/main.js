import './css/main.scss';

import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';

import BtnBack from './../../assets/img/btn/btn-back.png';
import BtnNotify from './../../assets/img/btn/btn-notify.png';
import BtnQa from './../../assets/img/btn/btn-qa.png';
import ZhBtnCollect from './../../assets/img/btn/collect.png';
import EnBtnCollect from './../../assets/img/btn/en/collect.png';
import EnBtnIntro from './../../assets/img/btn/en/intro.png';
import EnBtnStart from './../../assets/img/btn/en/start.png';
import ZhBtnIntro from './../../assets/img/btn/intro.png';
import ZhBtnStart from './../../assets/img/btn/start.png';
import Footer from './../../components/footer';
import ModalNews from './../../components/modal/ModalNews';


const Scene_Intro = ({ enterAR, backToStart, openIntroModal }) => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();


  const [modalNewsIsOpen, setIsOpenNews] = React.useState(null);
  const [modeStart, setModeStart] = React.useState('');

  const [btnCollect, setBtnCollect] = React.useState(ZhBtnCollect);
  const [btnIntro, setBtnIntro] = React.useState(ZhBtnIntro);
  const [btnStart, setBtnStart] = React.useState(ZhBtnStart);

  const [modeIndex, setModeIndex] = React.useState(null);

  const [enterARScene, setEnterARScene] = React.useState(false);

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
    if ('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices) {
      document.getElementById("unityWEBGL").contentWindow.enterARScene();

      navigator.mediaDevices
        .getUserMedia({ video: true, audio: false })
        .then(() => {
          enterAR();
          setEnterARScene(true);
        })
        .catch((err) => {
          console.error(`An error occurred: ${err}`);
        });
    }
  };

  useEffect(() => {
    // 取得 param query
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const mode = urlParams.get('mode');
    const newsModal = urlParams.get('newsModal');
    if (newsModal === 'false') {
      setIsOpenNews(false);
    } else {
      setIsOpenNews(true);
    }
    setModeIndex(mode);

    setModeStart('/?mode=' + mode);
  }, [modeIndex]);

  const enterStartScene = () => {

    // 進入開始畫面
    document.getElementById("unityWEBGL").contentWindow.enterStartScene();
    backToStart();
  }

  return (
    <div className="scene-intro">
      <header>
        <Link to={modeStart} onClick={() => enterStartScene()}>
          <img src={BtnBack} alt="Back" />
        </Link>
        <div className="header-right">
          {
            !enterARScene ?
              <button onClick={openNewsModal}>
                <img src={BtnNotify} alt="Notify" />
              </button>
              : <></>
          }
          <button onClick={openModal}>
            <img src={BtnQa} alt="Q&A" />
          </button>
        </div>
      </header>

      {
        !enterARScene ?

          <div className="btn-container">
            <button style={{ width: '35%', maxWidth: '105px' }} onClick={goToTour}>
              <img src={btnIntro} alt="Intro" />
            </button>
            <button style={{ width: '35%', maxWidth: '105px' }} onClick={goToCollection}>
              <img src={btnCollect} alt="Collect" />
            </button>
            <button style={{ width: '30%', maxWidth: '90px' }} onClick={() => goToAr()}>
              <img src={btnStart} alt="Start" />
            </button>
          </div>
          : <></>
      }

      {
        !enterARScene ?
          <Footer />
          : <></>
      }

      {/* Modal 最新消息 */}
      <ModalNews
        modalIsOpen={modalNewsIsOpen}
        afterOpenModal={afterOpenModalNews}
        closeModal={closeNewsModalNews}
      />

    </div>
  );
}

export default Scene_Intro;
