import './css/main.scss';

import React, { useContext, useEffect, useState } from 'react';
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

  const [modeStart, setModeStart] = useState('');
  const [modalIsOpen, setIsOpen] = useState(false);
  const [getNewScoreA1, setGetNewScoreA1] = useState(false);
  const [getNewScoreA2, setGetNewScoreA2] = useState(false);
  const [getNewScoreB1, setGetNewScoreB1] = useState(false);
  const [getNewScoreB2, setGetNewScoreB2] = useState(false);
  const [getNewScoreC1, setGetNewScoreC1] = useState(false);
  const [getNewScoreC2, setGetNewScoreC2] = useState(false);
  const [getNewScoreD1, setGetNewScoreD1] = useState(false);
  const [getNewScoreD2, setGetNewScoreD2] = useState(false);
  const [getNewScoreE1, setGetNewScoreE1] = useState(false);
  const [getNewScoreE2, setGetNewScoreE2] = useState(false);
  const [missionCompleteA1, setMissionCompleteA1] = useState(false);
  const [missionCompleteA2, setMissionCompleteA2] = useState(false);
  const [missionCompleteB1, setMissionCompleteB1] = useState(false);
  const [missionCompleteB2, setMissionCompleteB2] = useState(false);
  const [missionCompleteC1, setMissionCompleteC1] = useState(false);
  const [missionCompleteC2, setMissionCompleteC2] = useState(false);
  const [missionCompleteD1, setMissionCompleteD1] = useState(false);
  const [missionCompleteD2, setMissionCompleteD2] = useState(false);
  const [missionCompleteE1, setMissionCompleteE1] = useState(false);
  const [missionCompleteE2, setMissionCompleteE2] = useState(false);

  const [btnChallenge, setBtnChallenge] = useState(BtnChallenge);
  const [btnComplete, setBtnComplete] = useState(IconComplete);

  const [queryUrl, setQueryUrl] = useState(null);

  const [rewardPoints, setRewardPoints] = useState(0);
  const [lang, setLang] = useState('');

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  }

  const exchangeReward = () => {
    // 取得 param query
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const modeQuery = urlParams.get('mode');

    setQueryUrl(modeQuery);

    // let mode = 0;
    // if (modeQuery === 'KaoHarbor') {
    //   mode = 1;
    // }
    // if (modeQuery === 'GreatHarborBridge') {
    //   mode = 2;
    // }
    // if (modeQuery === 'KaoPortDepot') {
    //   mode = 3;
    // }
    // if (modeQuery === 'KaoHarborMuseum') {
    //   mode = 4;
    // }
    // if (modeQuery === 'KaoPortPark') {
    //   mode = 5;
    // }

    navigate(`/reward?mode=${modeQuery}`);
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
      setGetNewScoreA1(data.getNewScoreA_1);
      setGetNewScoreA2(data.getNewScoreA_2);
      setGetNewScoreB1(data.getNewScoreB_1);
      setGetNewScoreB2(data.getNewScoreB_2);
      setGetNewScoreC1(data.getNewScoreC_1);
      setGetNewScoreC2(data.getNewScoreC_2);
      setGetNewScoreD1(data.getNewScoreD_1);
      setGetNewScoreD2(data.getNewScoreD_2);
      setGetNewScoreE1(data.getNewScoreE_1);
      setGetNewScoreE2(data.getNewScoreE_2);
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


    return () => {
      if (userData) {
        const data = JSON.parse(userData);
        data.getNewScoreA_1 = false;
        data.getNewScoreA_2 = false;
        data.getNewScoreB_1 = false;
        data.getNewScoreB_2 = false;
        data.getNewScoreC_1 = false;
        data.getNewScoreC_2 = false;
        data.getNewScoreD_1 = false;
        data.getNewScoreD_2 = false;
        data.getNewScoreE_1 = false;
        data.getNewScoreE_2 = false;
        localStorage.setItem('htcAr_localStorgeData', JSON.stringify(data));
      }
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

  // const testEarnPoints = (points) => {
  //   // localStorage 取得獎章數量
  //   const userData = localStorage.getItem('htcAr_localStorgeData');

  //   if (!userData) {
  //     return;
  //   }
  //   const data = JSON.parse(userData);

  //   // 獲得獎章
  //   data.rewardPoints += points;
  //   setRewardPoints(data.rewardPoints);

  //   // 更新 localStorage
  //   localStorage.setItem('htcAr_localStorgeData', JSON.stringify(data));
  // }

  // const clearPoints = () => {
  //   // localStorage 取得獎章數量
  //   const userData = localStorage.getItem('htcAr_localStorgeData');
  //   const data = JSON.parse(userData);

  //   // 清空獎章
  //   data.rewardPoints = 0;
  //   setRewardPoints(data.rewardPoints);

  //   // 更新 localStorage
  //   localStorage.setItem('htcAr_localStorgeData', JSON.stringify(data));
  // }

  const goToARScene = (index) => {
    // 去 /intro 頁面, 並帶入 mode 參數, 然後打開 scene_intro 的 goToAr()
    // const queryString = window.location.search;
    // const urlParams = new URLSearchParams(queryString);
    // const mode = urlParams.get('mode');


    // TODO: 根據 mode 去打開不同的 AR Scene
    navigate(`/play?mode=${index}&newsModal=false&openAR=true`);

    // 打開 AR Scene
    arScene(index);
  }

  const goToQA = (qa) => {
    // 取得 param query
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const mode = urlParams.get('mode');

    navigate(`/qa?mode=${mode}&qa=${qa}`);
  }

  return (
    <>
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
              {
                missionCompleteA1 ?
                  <img src={IconPrize} alt="Prize" className="box-iconPrize" />
                  :
                  <img src={IconPrizeSilver} alt="Prize" className="box-iconPrize" />
              }
              {
                getNewScoreA1 ?
                  <img src={IconNew} alt="New" className="box-iconNew" />
                  :
                  null
              }
            </div>
            <span>
              {t('scene-collection.mission1')}
            </span>
            {
              missionCompleteA1 ?
                <img src={btnComplete} alt="Complete" className="box-complete" />
                :
                <button onClick={() => goToARScene(1)} >
                  <img src={btnChallenge} alt="Challenge" />
                </button>
            }
          </div>
          <div className="collection-box">
            <div className="box-metal">
              {
                missionCompleteA2 ?
                  <img src={IconPrize} alt="Prize" className="box-iconPrize" />
                  :
                  <img src={IconPrizeSilver} alt="Prize" className="box-iconPrize" />
              }
              {
                getNewScoreA2 ?
                  <img src={IconNew} alt="New" className="box-iconNew" />
                  :
                  null
              }
            </div>
            <span>
              {t('scene-collection.mission2')}
            </span>
            {
              missionCompleteA2 ?
                <img src={btnComplete} alt="Complete" className="box-complete" onClick={() => goToQA(1)} />
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
              {
                missionCompleteB1 ?
                  <img src={IconPrize} alt="Prize" className="box-iconPrize" />
                  :
                  <img src={IconPrizeSilver} alt="Prize" className="box-iconPrize" />
              }
              {
                getNewScoreB1 ?
                  <img src={IconNew} alt="New" className="box-iconNew" />
                  :
                  null
              }
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
              {
                missionCompleteB2 ?
                  <img src={IconPrize} alt="Prize" className="box-iconPrize" />
                  :
                  <img src={IconPrizeSilver} alt="Prize" className="box-iconPrize" />
              }
              {
                getNewScoreB2 ?
                  <img src={IconNew} alt="New" className="box-iconNew" />
                  :
                  null
              }
            </div>
            <span>
              {t('scene-collection.mission2')}
            </span>
            {
              missionCompleteB2 ?
                <img src={btnComplete} alt="Complete" className="box-complete" onClick={() => goToQA(2)} />
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
              {
                missionCompleteC1 ?
                  <img src={IconPrize} alt="Prize" className="box-iconPrize" />
                  :
                  <img src={IconPrizeSilver} alt="Prize" className="box-iconPrize" />
              }
              {
                getNewScoreC1 ?
                  <img src={IconNew} alt="New" className="box-iconNew" />
                  :
                  null
              }
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
              {
                missionCompleteC2 ?
                  <img src={IconPrize} alt="Prize" className="box-iconPrize" />
                  :
                  <img src={IconPrizeSilver} alt="Prize" className="box-iconPrize" />
              }
              {
                getNewScoreC2 ?
                  <img src={IconNew} alt="New" className="box-iconNew" />
                  :
                  null
              }
            </div>
            <span>
              {t('scene-collection.mission2')}
            </span>
            {
              missionCompleteC2 ?
                <img src={btnComplete} alt="Complete" className="box-complete" onClick={() => goToQA(3)} />
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
              {
                missionCompleteD1 ?
                  <img src={IconPrize} alt="Prize" className="box-iconPrize" />
                  :
                  <img src={IconPrizeSilver} alt="Prize" className="box-iconPrize" />
              }
              {
                getNewScoreD1 ?
                  <img src={IconNew} alt="New" className="box-iconNew" />
                  :
                  null
              }
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
              {
                missionCompleteD2 ?
                  <img src={IconPrize} alt="Prize" className="box-iconPrize" />
                  :
                  <img src={IconPrizeSilver} alt="Prize" className="box-iconPrize" />
              }
              {
                getNewScoreD2 ?
                  <img src={IconNew} alt="New" className="box-iconNew" />
                  :
                  null
              }
            </div>
            <span>
              {t('scene-collection.mission2')}
            </span>
            {
              missionCompleteD2 ?
                <img src={btnComplete} alt="Complete" className="box-complete" onClick={() => goToQA(4)} />
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
              {
                missionCompleteE1 ?
                  <img src={IconPrize} alt="Prize" className="box-iconPrize" />
                  :
                  <img src={IconPrizeSilver} alt="Prize" className="box-iconPrize" />
              }
              {
                getNewScoreE1 ?
                  <img src={IconNew} alt="New" className="box-iconNew" />
                  :
                  null
              }
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
              {
                missionCompleteE2 ?
                  <img src={IconPrize} alt="Prize" className="box-iconPrize" />
                  :
                  <img src={IconPrizeSilver} alt="Prize" className="box-iconPrize" />
              }
              {
                getNewScoreE2 ?
                  <img src={IconNew} alt="New" className="box-iconNew" />
                  :
                  null
              }
            </div>
            <span>
              {t('scene-collection.mission2')}
            </span>
            {
              missionCompleteE2 ?
                <img src={btnComplete} alt="Complete" className="box-complete" onClick={() => goToQA(5)} />
                :
                <button onClick={() => goToQA(5)}>
                  <img src={btnChallenge} alt="Challenge" />
                </button>
            }
          </div>
        </section>

        <ModalIntro
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
        />

        <Footer />

      </div>
      {/* 測試加分 */}
      {/* <div className="test-add" onClick={() => testEarnPoints(1)}>測試加分</div> */}
    </>
  );
}

export default SceneCollection;
