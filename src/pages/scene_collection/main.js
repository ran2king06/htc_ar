import './css/main.scss';

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import BtnBack from './../../assets/img/btn/btn-back.png';
import BtnChallenge from './../../assets/img/btn/btn-challenge.png';
import BtnExchange from './../../assets/img/btn/btn-exchange.png';
import BtnQa from './../../assets/img/btn/btn-qa.png';
import IconComplete from './../../assets/img/icon/icon-complete.png';
import IconNew from './../../assets/img/icon/icon-new.png';
import IconPrizeSilver from './../../assets/img/icon/icon-prize-silver.png';
import IconPrize from './../../assets/img/icon/icon-prize.png';
import IconWhite from './../../assets/img/icon/icon-white.png';
import ModalIntro from './../../components/modal/ModalIntro';
import Bear01 from './img/bear1.png';
import Bear02 from './img/bear2.png';
import Bear03 from './img/bear3.png';
import Bear04 from './img/bear4.png';
import Bear05 from './img/bear5.png';

const SceneCollection = () => {
  const [modeStart, setModeStart] = React.useState('');
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const [missionCompleteA1, setMissionCompleteA1] = React.useState(true);

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
    <div className="scene-collection">
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

      <div className="scene-collection-top">
        <div className="top-title">
          您目前擁有<span>5</span>個獎章
          <img src={IconPrize} alt="Prize" />
        </div>
        <button>
          <img src={BtnExchange} alt="Exchange" />
        </button>
      </div>

      {/* MODE 01 */}
      <section className="scene-collection-section section-first">
        <img src={Bear01} alt="Bear01" className="bear-img" />
        <div className="box-title">
          <img src={IconWhite} alt="White" />
          <span>高雄港</span>
        </div>
        <div className={` collection-box ${missionCompleteA1 ? 'complete' : ''}`}>
          <div className="box-metal">
            <img src={IconPrize} alt="Prize" className="box-iconPrize" />
            <img src={IconNew} alt="New" className="box-iconNew" />
          </div>
          <span>拍照任務</span>
          {
            missionCompleteA1 ?
              <img src={IconComplete} alt="Complete" className="box-complete" />
              :
              <button>
                <img src={BtnChallenge} alt="Challenge" />
              </button>
          }
        </div>
        <div className="collection-box">
          <div className="box-metal">
            <img src={IconPrizeSilver} alt="Prize" className="box-iconPrize" />
          </div>
          <span>QA問答</span>

          <button>
            <img src={BtnChallenge} alt="Challenge" />
          </button>
        </div>
      </section>

      {/* MODE 02 */}
      <section className="scene-collection-section section-second">
        <img src={Bear02} alt="Bear01" className="bear-img" />
        <div className="box-title">
          <img src={IconWhite} alt="White" />
          <span>大港橋</span>
        </div>
        <div className={` collection-box ${missionCompleteA1 ? 'complete' : ''}`}>
          <div className="box-metal">
            <img src={IconPrize} alt="Prize" className="box-iconPrize" />
            <img src={IconNew} alt="New" className="box-iconNew" />
          </div>
          <span>拍照任務</span>
          {
            missionCompleteA1 ?
              <img src={IconComplete} alt="Complete" className="box-complete" />
              :
              <button>
                <img src={BtnChallenge} alt="Challenge" />
              </button>
          }
        </div>
        <div className="collection-box">
          <div className="box-metal">
            <img src={IconPrizeSilver} alt="Prize" className="box-iconPrize" />
          </div>
          <span>QA問答</span>

          <button>
            <img src={BtnChallenge} alt="Challenge" />
          </button>
        </div>
      </section>

      {/* MODE 03 */}
      <section className="scene-collection-section section-third">
        <img src={Bear03} alt="Bear01" className="bear-img" />
        <div className="box-title">
          <img src={IconWhite} alt="White" />
          <span>大港倉</span>
        </div>
        <div className={` collection-box ${missionCompleteA1 ? 'complete' : ''}`}>
          <div className="box-metal">
            <img src={IconPrize} alt="Prize" className="box-iconPrize" />
            <img src={IconNew} alt="New" className="box-iconNew" />
          </div>
          <span>拍照任務</span>
          {
            missionCompleteA1 ?
              <img src={IconComplete} alt="Complete" className="box-complete" />
              :
              <button>
                <img src={BtnChallenge} alt="Challenge" />
              </button>
          }
        </div>
        <div className="collection-box">
          <div className="box-metal">
            <img src={IconPrizeSilver} alt="Prize" className="box-iconPrize" />
          </div>
          <span>QA問答</span>

          <button>
            <img src={BtnChallenge} alt="Challenge" />
          </button>
        </div>
      </section>

      {/* MODE 04 */}
      <section className="scene-collection-section section-forth">
        <img src={Bear04} alt="Bear01" className="bear-img" />
        <div className="box-title">
          <img src={IconWhite} alt="White" />
          <span>大港倉</span>
        </div>
        <div className={` collection-box ${missionCompleteA1 ? 'complete' : ''}`}>
          <div className="box-metal">
            <img src={IconPrize} alt="Prize" className="box-iconPrize" />
            <img src={IconNew} alt="New" className="box-iconNew" />
          </div>
          <span>港史館</span>
          {
            missionCompleteA1 ?
              <img src={IconComplete} alt="Complete" className="box-complete" />
              :
              <button>
                <img src={BtnChallenge} alt="Challenge" />
              </button>
          }
        </div>
        <div className="collection-box">
          <div className="box-metal">
            <img src={IconPrizeSilver} alt="Prize" className="box-iconPrize" />
          </div>
          <span>QA問答</span>

          <button>
            <img src={BtnChallenge} alt="Challenge" />
          </button>
        </div>
      </section>

      {/* MODE 05 */}
      <section className="scene-collection-section section-fifth">
        <img src={Bear05} alt="Bear01" className="bear-img" />
        <div className="box-title">
          <img src={IconWhite} alt="White" />
          <span>高港水花園</span>
        </div>
        <div className={` collection-box ${missionCompleteA1 ? 'complete' : ''}`}>
          <div className="box-metal">
            <img src={IconPrize} alt="Prize" className="box-iconPrize" />
            <img src={IconNew} alt="New" className="box-iconNew" />
          </div>
          <span>拍照任務</span>
          {
            missionCompleteA1 ?
              <img src={IconComplete} alt="Complete" className="box-complete" />
              :
              <button>
                <img src={BtnChallenge} alt="Challenge" />
              </button>
          }
        </div>
        <div className="collection-box">
          <div className="box-metal">
            <img src={IconPrizeSilver} alt="Prize" className="box-iconPrize" />
          </div>
          <span>QA問答</span>

          <button>
            <img src={BtnChallenge} alt="Challenge" />
          </button>
        </div>
      </section>

      <ModalIntro
        modalIsOpen={modalIsOpen}
        afterOpenModal={afterOpenModal}
        closeModal={closeModal}
      />
    </div>
  );
}

export default SceneCollection;
