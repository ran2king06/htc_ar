import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import BtnBack from './../../assets/img/btn/btn-back.png';
import BtnQa from './../../assets/img/btn/btn-qa.png';
import BthReposition from './../../assets/img/btn/btn-reposition.png';

// import { useTranslation } from 'react-i18next';

const ScenePlay = ({ showRepo, setEnterARBegin, setSearchingBear, backToStart, openIntroModal }) => {
  const navigate = useNavigate();
  // const { i18n, t } = useTranslation();
  const [showReposition, setShowReposition] = useState(false);

  useEffect(() => {
    setShowReposition(showRepo);
  }, [showRepo]);

  const [modeStart, setModeStart] = useState('');

  useEffect(() => {
    // 取得query string
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const mode = urlParams.get('mode');
    const openAR = urlParams.get('openAR');
    setModeStart(`/intro?mode=${mode}`);

    setEnterARBegin(true);
    setSearchingBear(true);

    if (openAR) {
      document.getElementById("unityWEBGL").contentWindow.enterARScene();
    }

    return () => {
      const unityWEBGL = document.getElementById('unityWEBGL');
      unityWEBGL.onload = () => {

        setEnterARBegin(false)
        // 偵聽unityWebGL_onReady事件
        document.getElementById("unityWEBGL").contentWindow.enterStartScene();
      };
    }
  }, []);

  function openModal() {
    openIntroModal(true);
  }

  const triggerReposition = () => {
    // 觸發重新定位
    document.getElementById("unityWEBGL").contentWindow.setCurrentTargetToCamera();
  }

  const enterStart = () => {
    // 進入開始畫面
    document.getElementById("unityWEBGL").contentWindow.enterStartScene();
    backToStart();
    navigate(modeStart);
  }

  return (
    <div className="scene-intro">
      <header>
        <button onClick={() => enterStart()}>
          <img src={BtnBack} alt="Back" />
        </button>
        <div className="header-right">
          {
            showReposition &&
            <button onClick={triggerReposition} className="btn-reposition">
              <img src={BthReposition} alt="triggerReposition" />
              <span>
                重新定位高雄熊
              </span>
            </button>
          }

          <button onClick={openModal}>
            <img src={BtnQa} alt="Q&A" />
          </button>
        </div>
      </header>
    </div>
  );
};

export default ScenePlay;
