import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import BtnBack from './../../assets/img/btn/btn-back.png';
import BtnQa from './../../assets/img/btn/btn-qa.png';
import BthReposition from './../../assets/img/btn/btn-reposition.png';

// import { useTranslation } from 'react-i18next';

let modeStart = '';
let modeCollect = '';

const ScenePlay = forwardRef(({ showRepo, setEnterARBegin, setSearchingBear, backToStart, openIntroModal }, ref) => {
  const navigate = useNavigate();
  // const { i18n, t } = useTranslation();
  // const [showReposition, setShowReposition] = useState(false);

  // useEffect(() => {
  //   setShowReposition(showRepo);
  // }, [showRepo]);


  useEffect(() => {
    // 取得query string
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const mode = urlParams.get('mode');

    const openAR = urlParams.get('openAR');
    modeStart = `/intro?mode=${mode}`;
    modeCollect = `/collection?mode=${mode}`;

    console.log('mode', mode);
    console.log('openAR', openAR);

    setEnterARBegin(true);
    setSearchingBear(true);

    if (openAR) {
      document.getElementById("unityWEBGL").contentWindow.enterARScene();
    }
  }, []);

  useEffect(() => {
    return () => {
      const unityWEBGL = document.getElementById('unityWEBGL');
      unityWEBGL.onload = () => {

        setEnterARBegin(false)
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
    navigate(modeStart);
    backToStart();
    document.getElementById("unityWEBGL").contentWindow.enterStartScene();

  }

  const goToCollect = () => {
    console.log(modeCollect);
    // 進入收集畫面
    navigate(modeCollect);
    backToStart();
    document.getElementById("unityWEBGL").contentWindow.enterStartScene();
  }

  useImperativeHandle(ref, () => {
    return {
      goCollection: () => {
        goToCollect();
      }
    }
  }, []);

  return (
    <div className="scene-intro">
      <header>
        <button onClick={() => enterStart()}>
          <img src={BtnBack} alt="Back" />
        </button>
        <div className="header-right">
          {
            showRepo &&
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
});

export default ScenePlay;