import './css/main.scss';

import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import LogoA from './../../assets/img/logo/logo-a.png';
import LogoB from './../../assets/img/logo/logo-b.png';
import LogoC from './../../assets/img/logo/logo-c.png';
import ModalIntro from './../../components/modal/ModalIntro';
import ModalNews from './../../components/modal/ModalNews';
import BtnBack from './img/btn/btn-back.png';
import BtnNotify from './img/btn/btn-notify.png';
import BtnQa from './img/btn/btn-qa.png';
import BtnCollect from './img/btn/collect.png';
import BtnIntro from './img/btn/intro.png';
import BtnStart from './img/btn/start.png';


const Scene_Intro = () => {
  const navigate = useNavigate();
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [modalNewsIsOpen, setIsOpenNews] = React.useState(true);
  const [modeStart, setModeStart] = React.useState('');

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
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  const goToTour = () => {
    navigate('/tour');
  };

  useEffect(() => {
    // 取得 param query
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const mode = urlParams.get('mode');
    setModeStart('/?location=' + mode);
  }, []);

  return (
    <div className="scene-intro">
      <header>
        <Link to={modeStart}>
          <img src={BtnBack} alt="Back" />
        </Link>
        <div className="header-right">
          <button onClick={openNewsModal}>
            <img src={BtnNotify} alt="Notify" />
          </button>

          <button onClick={openModal}>
            <img src={BtnQa} alt="Q&A" />
          </button>
        </div>
      </header>

      <div className="btn-container">
        <button style={{ width: '35%', maxWidth: '105px' }} onClick={goToTour}>
          <img src={BtnIntro} alt="Intro" />
        </button>
        <button style={{ width: '35%', maxWidth: '105px' }}>
          <img src={BtnCollect} alt="Collect" />
        </button>
        <button style={{ width: '30%', maxWidth: '90px' }}>
          <img src={BtnStart} alt="Start" />
        </button>
      </div>
      <footer>
        <span>
          主辦單位
        </span>

        <img src={LogoA} alt="Logo A" />
        <img src={LogoB} alt="Logo B" />
        <img src={LogoC} alt="Logo C" />

      </footer>

      {/* Modal 最新消息 */}
      <ModalNews
        modalIsOpen={modalNewsIsOpen}
        afterOpenModal={afterOpenModalNews}
        closeModal={closeNewsModalNews}
      />

      {/* Modal 介紹 */}
      <ModalIntro
        modalIsOpen={modalIsOpen}
        afterOpenModal={afterOpenModal}
        closeModal={closeModal}
      />
    </div>
  );
}

export default Scene_Intro;
