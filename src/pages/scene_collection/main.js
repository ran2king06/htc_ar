import './css/main.scss';

import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import BtnBack from './../../assets/img/btn/btn-back.png';
import BtnChallenge from './../../assets/img/btn/btn-challenge.png';
import BtnExchange from './../../assets/img/btn/btn-exchange.png';
import BtnQa from './../../assets/img/btn/btn-qa.png';
import IconComplete from './../../assets/img/icon/icon-complete.png';
import IconNew from './../../assets/img/icon/icon-new.png';
import IconPrizeSilver from './../../assets/img/icon/icon-prize-silver.png';
import IconPrize from './../../assets/img/icon/icon-prize.png';
import IconWhite from './../../assets/img/icon/icon-white.png';
import Footer from './../../components/footer';
import ModalIntro from './../../components/modal/ModalIntro';
import Bear01 from './img/bear1.png';
import Bear02 from './img/bear2.png';
import Bear03 from './img/bear3.png';
import Bear04 from './img/bear4.png';
import Bear05 from './img/bear5.png';

const SceneCollection = () => {
  const navigate = useNavigate();

  const [modeStart, setModeStart] = React.useState('');
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [missionCompleteA1, setMissionCompleteA1] = React.useState(true);
  const [missionCompleteA2, setMissionCompleteA2] = React.useState(false);
  const [missionCompleteB1, setMissionCompleteB1] = React.useState(false);
  const [missionCompleteB2, setMissionCompleteB2] = React.useState(false);
  const [missionCompleteC1, setMissionCompleteC1] = React.useState(false);
  const [missionCompleteC2, setMissionCompleteC2] = React.useState(false);
  const [missionCompleteD1, setMissionCompleteD1] = React.useState(false);
  const [missionCompleteD2, setMissionCompleteD2] = React.useState(false);
  const [missionCompleteE1, setMissionCompleteE1] = React.useState(false);
  const [missionCompleteE2, setMissionCompleteE2] = React.useState(false);

  const [rewardPoints, setRewardPoints] = React.useState(0);

  const openModal = () => {
    setIsOpen(true);
  };

  const afterOpenModal = () => {
    console.log('afterOpenModal');
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  const exchangeReward = () => {
    // 取得 param query
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const mode = urlParams.get('mode');

    navigate(`/reward?mode=${mode}`);
  }

  useEffect(() => {
    // 取得 param query
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const mode = urlParams.get('mode');
    setModeStart('/intro?mode=' + mode + '&newsModal=false');

    // localStorage 取得獎章數量
    // htcAr_localStorgeData 資料結構，會有 
    // rewardPoints, missionA_1, missionA_2, missionB_1, missionB_2, missionC_1, missionC_2, missionD_1, missionD_2, missionE_1, missionE_2
    const userData = localStorage.getItem('htcAr_localStorgeData');

    if (userData) {
      const data = JSON.parse(userData);
      setRewardPoints(data.rewardPoints);

      setMissionCompleteA1(data.missionA_1);
      setMissionCompleteA2(data.missionA_2);
      setMissionCompleteB1(data.missionB_1);
      setMissionCompleteB2(data.missionB_2);
      setMissionCompleteC1(data.missionC_1);
      setMissionCompleteC2(data.missionC_2);
      setMissionCompleteD1(data.missionD_1);
      setMissionCompleteD2(data.missionD_2);
      setMissionCompleteE1(data.missionE_1);
      setMissionCompleteE2(data.missionE_2);
    } else {
      setRewardPoints(0);

      localStorage.setItem('htcAr_localStorgeData', JSON.stringify({
        rewardPoints: 0,
        exchangeSuccess: false,
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

  const testEarnPoints = (points) => {
    // localStorage 取得獎章數量
    const userData = localStorage.getItem('htcAr_localStorgeData');

    if (!userData) {
      return;
    }
    const data = JSON.parse(userData);

    // 獲得獎章
    data.rewardPoints += points;
    setRewardPoints(data.rewardPoints);

    // 更新 localStorage
    localStorage.setItem('htcAr_localStorgeData', JSON.stringify(data));
  }

  const clearPoints = () => {
    // localStorage 取得獎章數量
    const userData = localStorage.getItem('htcAr_localStorgeData');
    const data = JSON.parse(userData);

    // 清空獎章
    data.rewardPoints = 0;
    setRewardPoints(data.rewardPoints);

    // 更新 localStorage
    localStorage.setItem('htcAr_localStorgeData', JSON.stringify(data));
  }

  const goToQA = (mode) => {
    navigate(`/qa?mode=${mode}`);
  }

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
          您目前擁有<span>{rewardPoints}</span>個獎章
          <img src={IconPrize} alt="Prize" />
        </div>
        <button onClick={exchangeReward}>
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
              <button onClick={() => testEarnPoints(5)}>
                <img src={BtnChallenge} alt="Challenge" />
              </button>
          }
        </div>
        <div className="collection-box">
          <div className="box-metal">
            <img src={IconPrizeSilver} alt="Prize" className="box-iconPrize" />
          </div>
          <span>QA問答</span>

          {/* 測試新增 */}
          <button onClick={() => goToQA(1)}>
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

          {/* 測試清空點數 */}
          <button onClick={() => clearPoints()}>
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

      <Footer />
    </div>
  );
}

export default SceneCollection;
