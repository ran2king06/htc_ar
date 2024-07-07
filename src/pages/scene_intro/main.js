import './css/main.scss';

import React from 'react';
import { Link } from 'react-router-dom';

import LogoA from './../../assets/img/logo/logo-a.png';
import LogoB from './../../assets/img/logo/logo-b.png';
import LogoC from './../../assets/img/logo/logo-c.png';
import BtnBack from './img/btn/btn-back.png';
import BtnNotify from './img/btn/btn-notify.png';
import BtnQa from './img/btn/btn-qa.png';
import BtnCollect from './img/btn/collect.png';
import BtnIntro from './img/btn/intro.png';
import BtnStart from './img/btn/start.png';

const Scene_Intro = () => {
  return (
    <div className="scene-intro">
      <header>
        <Link to="/">
          <img src={BtnBack} alt="Back" />
        </Link>
        <div className="header-right">
          <img src={BtnNotify} alt="Notify" />
          <img src={BtnQa} alt="Q&A" />
        </div>
      </header>

      <div className="btn-container">
        <img src={BtnIntro} alt="Intro" style={{ width: '35%', maxWidth: '105px' }} />
        <img src={BtnCollect} alt="Collect" style={{ width: '35%', maxWidth: '105px' }} />
        <img src={BtnStart} alt="Start" style={{ width: '30%', maxWidth: '90px' }} />
      </div>
      <footer>
        <span>
          主辦單位
        </span>
        <img src={LogoA} alt="Logo A" />
        <img src={LogoB} alt="Logo B" />
        <img src={LogoC} alt="Logo C" />

      </footer>
    </div>
  );
}

export default Scene_Intro;
