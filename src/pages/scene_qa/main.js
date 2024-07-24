import './css/main.scss';

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import BtnBack from './../../assets/img/btn/btn-back.png';
import Footer from './../../components/footer';

const SceneQA = () => {
  const [modeStart, setModeStart] = useState('');
  const [rewardPoints, setRewardPoints] = useState(0);
  const [exchangeSuccess, setExchangeSuccess] = useState(false);
  // const [enableChange, setEnableChange] = useState(false);
  // const [modalExchangeIsOpen, setModalExchangeIsOpen] = useState(false);

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

  return (
    <div className="scene-qa">
      <header>
        <Link to={modeStart}>
          <img src={BtnBack} alt="Back" />
        </Link>

        <h1>Q&A問答挑戰</h1>

        <div className="header-right">
          {/* FLEX EMPTY BOX */}
        </div>
      </header>

      <Footer />
    </div>
  );
}

export default SceneQA;
