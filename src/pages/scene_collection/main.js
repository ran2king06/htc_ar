import './css/main.scss';

import React, { useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';

import BtnBack from './../../assets/img/btn/btn-back.png';
import BtnChallenge from './../../assets/img/btn/btn-challenge.png';
import BtnExchange from './../../assets/img/btn/btn-exchange.png';
import BtnQa from './../../assets/img/btn/btn-qa.png';
import EnBtnChallenge from './../../assets/img/btn/en/btn-challenge.png';
import EnIconComplete from './../../assets/img/btn/en/icon-complete.png';
import EnTitle1 from './../../assets/img/collection/1.png';
import EnTitle2 from './../../assets/img/collection/2.png';
import EnTitle3 from './../../assets/img/collection/3.png';
import EnTitle4 from './../../assets/img/collection/4.png';
import EnTitle5 from './../../assets/img/collection/5.png';
import EnBtnExchange from './../../assets/img/collection/btn-redeem.png';
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

const SceneCollection = ({ arScene }) => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const [modeStart, setModeStart] = React.useState('');
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [missionCompleteA1, setMissionCompleteA1] = React.useState(false);
  const [missionCompleteA2, setMissionCompleteA2] = React.useState(false);
  const [missionCompleteB1, setMissionCompleteB1] = React.useState(false);
  const [missionCompleteB2, setMissionCompleteB2] = React.useState(false);
  const [missionCompleteC1, setMissionCompleteC1] = React.useState(false);
  const [missionCompleteC2, setMissionCompleteC2] = React.useState(false);
  const [missionCompleteD1, setMissionCompleteD1] = React.useState(false);
  const [missionCompleteD2, setMissionCompleteD2] = React.useState(false);
  const [missionCompleteE1, setMissionCompleteE1] = React.useState(false);
  const [missionCompleteE2, setMissionCompleteE2] = React.useState(false);

  const [btnChallenge, setBtnChallenge] = React.useState(BtnChallenge);
  const [btnComplete, setBtnComplete] = React.useState(IconComplete);

  const [rewardPoints, setRewardPoints] = React.useState(0);
  const [lang, setLang] = React.useState('');

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

    console.log('userData', userData);

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

  useEffect(() => {
    // 取得語言
    const currentLanguage = localStorage.getItem('i18nextLng_htc_ar');
    if (currentLanguage) {
      i18n.changeLanguage(currentLanguage);
      setLang(currentLanguage);


      if (currentLanguage === 'en') {
        setBtnChallenge(EnBtnChallenge);
        setBtnComplete(EnIconComplete);
      } else {
        setBtnChallenge(BtnChallenge);
        setBtnComplete(IconComplete);
      }


    }
  }, [lang]);

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

  const goToARScene = (index) => {
    // 去 /intro 頁面, 並帶入 mode 參數, 然後打開 scene_intro 的 goToAr()
    // const queryString = window.location.search;
    // const urlParams = new URLSearchParams(queryString);
    // const mode = urlParams.get('mode');

    navigate(`/play?mode=${index}&newsModal=false&openAR=true`);

    // 打開 AR Scene
    // arScene();
  }

  const goToQA = (qa) => {
    // 取得 param query
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const mode = urlParams.get('mode');

    navigate(`/qa?mode=${mode}&qa=${qa}`);
  }

  return (
    <div className="scene-collection">
      <header>
        <Link to={modeStart}>
          <img src={BtnBack} alt="Back" />
        </Link>

        <h1>
          {t('scene-collection.title')}
        </h1>
        <div className="header-right">
          <button onClick={openModal}>
            <img src={BtnQa} alt="Q&A" />
          </button>
        </div>
      </header>

      <div className="scene-collection-top">
        <div className="top-title">
          {t('scene-collection.text1')}<span>{rewardPoints}</span>{t('scene-collection.text2')}
          <img src={IconPrize} alt="Prize" />
        </div>
        <button onClick={exchangeReward}>
          {
            lang === 'en' ?
              <img src={EnBtnExchange} alt="Exchange" />
              :
              <img src={BtnExchange} alt="Exchange" />
          }
        </button>
      </div>

      {/* MODE 01 */}
      <section className="scene-collection-section section-first">
        <img src={Bear01} alt="Bear01" className="bear-img" />
        <div className={`box-title ${lang === 'en' ? 'en' : ''}`}>
          {
            lang === 'en' ?
              <img src={EnTitle1} alt="Title" />
              :
              <>
                <img src={IconWhite} alt="White" />
                <span>
                  {t('scene-collection.l1')}
                </span>
              </>
          }
        </div>
        <div className={` collection-box ${missionCompleteA1 ? 'complete' : ''}`}>
          <div className="box-metal">
            <img src={IconPrize} alt="Prize" className="box-iconPrize" />
            <img src={IconNew} alt="New" className="box-iconNew" />
          </div>
          <span>
            {t('scene-collection.mission1')}
          </span>
          {
            missionCompleteA1 ?
              <img src={btnComplete} alt="Complete" className="box-complete" />
              :
              <button onClick={() => testEarnPoints(1)}>
                *測試得分*
                <img src={btnChallenge} alt="Challenge" />
              </button>
          }
        </div>
        <div className="collection-box">
          <div className="box-metal">
            <img src={IconPrizeSilver} alt="Prize" className="box-iconPrize" />
          </div>
          <span>
            {t('scene-collection.mission2')}
          </span>
          {
            missionCompleteA2 ?
              <img src={btnComplete} alt="Complete" className="box-complete" />
              :
              <button onClick={() => goToQA(1)}>
                <img src={btnChallenge} alt="Challenge" />
              </button>
          }
        </div>
      </section>

      {/* MODE 02 */}
      <section className="scene-collection-section section-second">
        <img src={Bear02} alt="Bear01" className="bear-img" />
        <div className={`box-title ${lang === 'en' ? 'en' : ''}`}>
          {
            lang === 'en' ?
              <img src={EnTitle2} alt="Title" />
              :
              <>
                <img src={IconWhite} alt="White" />
                <span>
                  {t('scene-collection.l2')}
                </span>
              </>
          }
        </div>
        <div className={` collection-box ${missionCompleteA1 ? 'complete' : ''}`}>
          <div className="box-metal">
            <img src={IconPrize} alt="Prize" className="box-iconPrize" />
            <img src={IconNew} alt="New" className="box-iconNew" />
          </div>
          <span>
            {t('scene-collection.mission1')}
          </span>
          {
            missionCompleteB1 ?
              <img src={btnComplete} alt="Complete" className="box-complete" />
              :
              <button onClick={() => goToARScene(2)}>
                <img src={btnChallenge} alt="Challenge" />
              </button>
          }
        </div>
        <div className="collection-box">
          <div className="box-metal">
            <img src={IconPrizeSilver} alt="Prize" className="box-iconPrize" />
          </div>
          <span>
            {t('scene-collection.mission2')}
          </span>
          {
            missionCompleteB2 ?
              <img src={btnComplete} alt="Complete" className="box-complete" />
              :
              <button onClick={() => goToQA(2)}>
                <img src={btnChallenge} alt="Challenge" />
              </button>
          }
        </div>
      </section>

      {/* MODE 03 */}
      <section className="scene-collection-section section-third">
        <img src={Bear03} alt="Bear01" className="bear-img" />
        <div className={`box-title ${lang === 'en' ? 'en' : ''}`}>
          {
            lang === 'en' ?
              <img src={EnTitle3} alt="Title" />
              :
              <>
                <img src={IconWhite} alt="White" />
                <span>
                  {t('scene-collection.l3')}
                </span>
              </>
          }
        </div>
        <div className={` collection-box ${missionCompleteA1 ? 'complete' : ''}`}>
          <div className="box-metal">
            <img src={IconPrize} alt="Prize" className="box-iconPrize" />
            <img src={IconNew} alt="New" className="box-iconNew" />
          </div>
          <span>
            {t('scene-collection.mission1')}
          </span>
          {
            missionCompleteC1 ?
              <img src={btnComplete} alt="Complete" className="box-complete" />
              :
              <button onClick={() => goToARScene(3)}>
                <img src={btnChallenge} alt="Challenge" />
              </button>
          }
        </div>
        <div className="collection-box">
          <div className="box-metal">
            <img src={IconPrizeSilver} alt="Prize" className="box-iconPrize" />
          </div>
          <span>
            {t('scene-collection.mission2')}
          </span>
          {
            missionCompleteC2 ?
              <img src={btnComplete} alt="Complete" className="box-complete" />
              :
              <button onClick={() => goToQA(3)}>
                <img src={btnChallenge} alt="Challenge" />
              </button>
          }
        </div>
      </section>

      {/* MODE 04 */}
      <section className="scene-collection-section section-forth">
        <img src={Bear04} alt="Bear01" className="bear-img" />
        <div className={`box-title ${lang === 'en' ? 'en' : ''}`}>
          {
            lang === 'en' ?
              <img src={EnTitle4} alt="Title" />
              :
              <>
                <img src={IconWhite} alt="White" />
                <span>
                  {t('scene-collection.l4')}
                </span>
              </>
          }
        </div>
        <div className={` collection-box ${missionCompleteA1 ? 'complete' : ''}`}>
          <div className="box-metal">
            <img src={IconPrize} alt="Prize" className="box-iconPrize" />
            <img src={IconNew} alt="New" className="box-iconNew" />
          </div>
          <span>
            {t('scene-collection.mission1')}
          </span>
          {
            missionCompleteD1 ?
              <img src={btnComplete} alt="Complete" className="box-complete" />
              :
              <button onClick={() => goToARScene(4)}>
                <img src={btnChallenge} alt="Challenge" />
              </button>
          }
        </div>
        <div className="collection-box">
          <div className="box-metal">
            <img src={IconPrizeSilver} alt="Prize" className="box-iconPrize" />
          </div>
          <span>
            {t('scene-collection.mission2')}
          </span>
          {
            missionCompleteD2 ?
              <img src={btnComplete} alt="Complete" className="box-complete" />
              :
              <button onClick={() => goToQA(4)}>
                <img src={btnChallenge} alt="Challenge" />
              </button>
          }
        </div>
      </section>

      {/* MODE 05 */}
      <section className="scene-collection-section section-fifth">
        <img src={Bear05} alt="Bear01" className="bear-img" />
        <div className={`box-title ${lang === 'en' ? 'en' : ''}`}>
          {
            lang === 'en' ?
              <img src={EnTitle5} alt="Title" />
              :
              <>
                <img src={IconWhite} alt="White" />
                <span>
                  {t('scene-collection.l5')}
                </span>
              </>
          }
        </div>
        <div className={` collection-box ${missionCompleteA1 ? 'complete' : ''}`}>
          <div className="box-metal">
            <img src={IconPrize} alt="Prize" className="box-iconPrize" />
            <img src={IconNew} alt="New" className="box-iconNew" />
          </div>
          <span>
            {t('scene-collection.mission1')}
          </span>
          {
            missionCompleteE1 ?
              <img src={btnComplete} alt="Complete" className="box-complete" />
              :
              <button onClick={() => goToARScene(5)}>
                <img src={btnChallenge} alt="Challenge" />
              </button>
          }
        </div>
        <div className="collection-box">
          <div className="box-metal">
            <img src={IconPrizeSilver} alt="Prize" className="box-iconPrize" />
          </div>
          <span>
            {t('scene-collection.mission2')}
          </span>
          {
            missionCompleteE2 ?
              <img src={btnComplete} alt="Complete" className="box-complete" />
              :
              <button onClick={() => goToQA(5)}>
                <img src={btnChallenge} alt="Challenge" />
              </button>
          }
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
