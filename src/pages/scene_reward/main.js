import './css/main.scss';

import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import EnBtnChange from './../../assets/img/btn//en/btn-change.png';
import BtnBack from './../../assets/img/btn/btn-back.png';
import BtnChange from './../../assets/img/btn/btn-change.png';
import BtnChangeDisable from './../../assets/img/btn/btn-exchange-dis.png';
import BtnChangeFinish from './../../assets/img/btn/btn-exchange-finish.png';
import EnBtnChangeDisable from './../../assets/img/btn/en/btn-exchange-dis.png';
import EnBtnChangeFinish from './../../assets/img/btn/en/btn-exchange-finish.png';
import IconPrize1 from './../../assets/img/icon/icon-prize.png';
import BannerImg from './../../assets/img/redeem.png';
import Footer from './../../components/footer';
import ModalConfirmExchange from './../../components/modal/ModalConfirmExchange';

const SceneReward = () => {
  const { t, i18n } = useTranslation();

  const [modeStart, setModeStart] = useState('');
  const [rewardPoints, setRewardPoints] = useState(0);
  const [exchangeSuccess, setExchangeSuccess] = useState(false);
  const [enableChange, setEnableChange] = useState(false);

  const [modalExchangeIsOpen, setModalExchangeIsOpen] = useState(false);
  const [lang, setLang] = useState('');

  const [queryUrl, setQueryUrl] = React.useState(null);

  useEffect(() => {
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

    setModeStart('/collection?mode=' + modeQuery);

    // 取得獎勵點數
    const userData = localStorage.getItem('htcAr_localStorgeData');

    if (userData) {
      const user = JSON.parse(userData);
      setRewardPoints(user.rewardPoints
        ? user.rewardPoints
        : 0);

      // 檢查是否已兌換過
      if (user.exchangeSuccess) {
        setExchangeSuccess(user.exchangeSuccess);
      }
    }

  }, [exchangeSuccess]);

  useEffect(() => {
    // 取得語言
    const currentLanguage = localStorage.getItem('i18nextLng_htc_ar');
    if (currentLanguage) {
      setLang(currentLanguage);

      if (currentLanguage === 'en') {
        i18n.changeLanguage('en');
      }
    }
  }, []);


  const exchangeSuccessCall = () => {
    setExchangeSuccess(true);
  }

  useEffect(() => {
    // 檢查是否可兌換
    if (rewardPoints >= 10) {
      setEnableChange(true);
    } else {
      setEnableChange(false);
    }
  }, [rewardPoints]);

  return (
    <div className="scene-reward">
      <header>
        <Link to={modeStart}>
          <img src={BtnBack} alt="Back" />
        </Link>

        <h1>
          {t('scene-reward.title')}
        </h1>

        <div className="header-right">
          <img src={IconPrize1} alt="Prize" />
          <span>{rewardPoints}</span>
        </div>
      </header>

      <div className="scene-reward-content">
        <div>
          <h2>
            {t('scene-reward.text1')}
            <span>{t('scene-reward.text2')}</span>
          </h2>

          <img src={BannerImg} alt="Banner" />

          <p>
            {t('scene-reward.text3')}
            <span>
              {t('scene-reward.textTips')}
            </span>
          </p>
        </div>

        <div className="reward-change-box">
          <div className="reward-change-value">
            <img src={IconPrize1} alt="Prize" />
            <span>10</span>
          </div>

          {/* 可兌換 */}
          {
            enableChange && !exchangeSuccess ? (
              <button onClick={() => setModalExchangeIsOpen(true)}>
                {
                  lang === 'en' ? (
                    <img src={EnBtnChange} alt="BtnChange" />
                  ) : (
                    <img src={BtnChange} alt="BtnChange" />
                  )
                }
              </button>
            ) :
              !enableChange && !exchangeSuccess ? (
                <button>
                  {
                    lang === 'en' ? (
                      <img src={EnBtnChangeDisable} alt="BtnChangeDisable" />
                    ) : (
                      <img src={BtnChangeDisable} alt="BtnChangeDisable" />
                    )
                  }
                </button>
              ) : (
                <button>
                  {
                    lang === 'en' ? (
                      <img src={EnBtnChangeFinish} alt="BtnChangeFinish" />
                    ) : (
                      <img src={BtnChangeFinish} alt="BtnChangeFinish" />
                    )
                    // <img src={BtnChangeFinish} alt="BtnChangeFinish" />
                  }
                </button>
              )
          }

        </div>
      </div>

      <ModalConfirmExchange
        modalExchangeIsOpen={modalExchangeIsOpen}
        closeExchangeModal={() => setModalExchangeIsOpen(false)}
        exchangeSuccess={exchangeSuccessCall}
      />

      <Footer />
    </div>
  );
}

export default SceneReward;
