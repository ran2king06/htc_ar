import './css/main.scss';

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import BtnBack from './../../assets/img/btn/btn-back.png';
import BtnChange from './../../assets/img/btn/btn-change.png';
import BtnChangeDisable from './../../assets/img/btn/btn-exchange-dis.png';
import BtnChangeFinish from './../../assets/img/btn/btn-exchange-finish.png';
import IconPrize1 from './../../assets/img/icon/icon-prize.png';
import Footer from './../../components/footer';
import ModalConfirmExchange from './../../components/modal/ModalConfirmExchange';
import BannerImg from './img/banner.png';

const SceneReward = () => {
  const [modeStart, setModeStart] = useState('');
  const [rewardPoints, setRewardPoints] = useState(0);
  const [exchangeSuccess, setExchangeSuccess] = useState(false);
  const [enableChange, setEnableChange] = useState(false);

  const [modalExchangeIsOpen, setModalExchangeIsOpen] = useState(false);

  useEffect(() => {
    // 取得 param query
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const mode = urlParams.get('mode');
    setModeStart('/collection?mode=' + mode);

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

        <h1>獎勵兌換</h1>

        <div className="header-right">
          <img src={IconPrize1} alt="Prize" />
          <span>{rewardPoints}</span>
        </div>
      </header>

      <div className="scene-reward-content">
        <div>
          <h2>
            高雄亞灣5G AIoT AR導覽體驗
            <span>限定好禮</span>
          </h2>

          <img src={BannerImg} alt="Banner" />

          <p>
            於高雄熊AR導覽體驗中完成任務， 集滿 10 個獎章，即可至棧貳庫2F服務台或大港倉10服務台兌換限定好禮。
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
                <img src={BtnChange} alt="BtnChange" />
              </button>
            ) :
              !enableChange && !exchangeSuccess ? (
                <button>
                  <img src={BtnChangeDisable} alt="BtnChangeDisable" />
                </button>
              ) : (
                <button>
                  <img src={BtnChangeFinish} alt="BtnChangeFinish" />
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
