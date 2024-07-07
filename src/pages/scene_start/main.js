import './css/main.scss';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import Bear1 from './img/bear1.png';
import Bear2 from './img/bear2.png';
import Bear3 from './img/bear3.png';
import Bear4 from './img/bear4.png';
import Bear5 from './img/bear5.png';
import StartBG1 from './img/bg1.png';
import StartBG2 from './img/bg2.png';
import StartBG3 from './img/bg3.png';
import StartBG4 from './img/bg4.png';
import StartBG5 from './img/bg5.png';
import BtnEn from './img/btn/btn-en.png';
import BtnZn from './img/btn/btn-zh.png';
import Cloud1 from './img/cloud1.png';
import Cloud2 from './img/cloud2.png';
import Blink from './img/icon.png';
import Location1 from './img/location/1.png';
import Location2 from './img/location/2.png';
import Location3 from './img/location/3.png';
import Location4 from './img/location/4.png';
import Location5 from './img/location/5.png';
import StartTitle from './img/title.png';

const Scene_Start = () => {
  const { t, i18n } = useTranslation();
  const [dynamicBG, setDynamicBG] = React.useState(StartBG1);
  const [dynamicBGColor, setDynamicBGColor] = React.useState('#FFD8D8');
  const [dynamicLocation, setDynamicLocation] = React.useState(Location1);

  const [uiShowBear, setUiShowBear] = React.useState(Bear1);
  const [chooseMode, setChooseMode] = React.useState(0);

  // 取得 ULR QUERY STRING

  React.useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const ar = urlParams.get('ar');
    if (ar) {
      setChooseMode(parseInt(ar));
    }
    console.log(chooseMode);

    switch (chooseMode) {
      case 0:
        setDynamicBGColor('#D1D8EE');
        setDynamicBG(StartBG1);
        setDynamicLocation(Location1);
        setUiShowBear(Bear1);
        break;
      case 1:
        setDynamicBGColor('#FFE8F0');
        setDynamicBG(StartBG2);
        setDynamicLocation(Location2);
        setUiShowBear(Bear2);
        break;
      case 2:
        setDynamicBGColor('#D2FFFF');
        setDynamicBG(StartBG3);
        setDynamicLocation(Location3);
        setUiShowBear(Bear3);
        break;
      case 3:
        setDynamicBGColor('#FFD8D8');
        setDynamicBG(StartBG4);
        setDynamicLocation(Location4);
        setUiShowBear(Bear4);
        break;
      case 4:
        setDynamicBGColor('#FBE3D2');
        setDynamicBG(StartBG5);
        setDynamicLocation(Location5);
        setUiShowBear(Bear5);
        break;
      default:
        setDynamicBGColor('#FFFFD1');
        setDynamicBG(StartBG1);
        setDynamicLocation(Location1);
        setUiShowBear(Bear1);
        break;
    }
  }, [chooseMode]);

  const chooseLanguage = (lng, mode) => {
    localStorage.setItem('i18nextLng_htc_ar', lng);
    i18n.changeLanguage(lng);

    console.log('chooseLanguage', lng, mode);
  }

  return (
    <div className='scene-start' style={{ backgroundColor: `${dynamicBGColor}` }}>
      <div className='scene-start__header'>
        <img src={StartTitle} alt='AR Start' />
        {/* BLINK */}
        <img src={Blink} alt='Blink' className={`blink blink1-${chooseMode}`} />
        <img src={Blink} alt='Blink' className={`blink blink2-${chooseMode}`} />
      </div>
      <div className='scene-start__container'>
        <div className='scene-start__container__img' style={{ backgroundImage: `url(${dynamicBG})` }}>
          {/* BEAR */}
          <img src={uiShowBear} alt='Bear' className={`bear bear${chooseMode}`} />
          {/* CLOUD */}
          <img src={Cloud1} alt='Cloud 1' className={`cloud cloud1 cloud1-${chooseMode}`} />
          <img src={Cloud2} alt='Cloud 2' className={`cloud cloud2 cloud2-${chooseMode}`} />
        </div>
        <div className='scene-start__container__btn'>
          <Link to={`/intro?ar=${chooseMode}`} onClick={() => chooseLanguage('en', chooseMode)}>
            <img src={BtnEn} alt='English' />
          </Link>
          <Link to={`/intro?ar=${chooseMode}`} onClick={() => chooseLanguage('zh', chooseMode)}>
            <img src={BtnZn} alt='Chinese' />
          </Link>
        </div>
        <div className='scene-start__container__footer'>
          <img src={dynamicLocation} alt='Location' />
        </div>
      </div>
    </div>
  );
}

export default Scene_Start;
