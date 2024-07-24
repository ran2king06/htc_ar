import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import BtnBack from './../../assets/img/btn/btn-back.png';
import BtnQa from './../../assets/img/btn/btn-qa.png';
import ModalIntro from './../../components/modal/ModalIntro';

const SceneCollection = () => {
  const [modeStart, setModeStart] = React.useState('');
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const afterOpenModal = () => {
    console.log('afterOpenModal');
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  useEffect(() => {
    // 取得 param query
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const mode = urlParams.get('mode');
    setModeStart('/intro?mode=' + mode + '&newsModal=false');
  }, []);

  return (
    <div className="scene-tour">
      <header>
        <Link to={modeStart}>
          <img src={BtnBack} alt="Back" />
        </Link>

        <h1>獎章集點冊</h1>
        <div className="header-right">
          <button onClick={openModal}>
            <img src={BtnQa} alt="Q&A" />
          </button>
        </div>
      </header>

      <ModalIntro
        modalIsOpen={modalIsOpen}
        afterOpenModal={afterOpenModal}
        closeModal={closeModal}
      />
    </div>
  );
}

export default SceneCollection;
