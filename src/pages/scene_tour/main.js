import './css/main.scss';

import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import BtnBack from './../../assets/img/btn/btn-back.png';
import BtnQa from './../../assets/img/btn/btn-qa.png';
import BtnScale from './../../assets/img/btn/btn-scale.png';
import IconBackToTop from './../../assets/img/icon/icon-backToTop.png';
import MapA from './../../assets/img/map/a.png';
import MapB from './../../assets/img/map/b.png';
import MapC from './../../assets/img/map/c.png';
import MapD from './../../assets/img/map/d.png';
import MapE from './../../assets/img/map/e.png';
import EnMapA from './../../assets/img/map/en/a.png';
import EnMapB from './../../assets/img/map/en/b.png';
import EnMapC from './../../assets/img/map/en/c.png';
import EnMapD from './../../assets/img/map/en/d.png';
import EnMapE from './../../assets/img/map/en/e.png';
import Footer from './../../components/footer';
import ModalIntro from './../../components/modal/ModalIntro';
import ModalMap from './../../components/modal/ModalMap';
import Tour01 from './tour01';
import Tour02 from './tour02';
import Tour03 from './tour03';
import Tour04 from './tour04';
import Tour05 from './tour05';

const SceneTour = () => {
  const { t, i18n } = useTranslation();
  const [modeStart, setModeStart] = React.useState('');
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [modalMapIsOpen, setModalMapIsOpen] = React.useState(false);

  const [mapChoose, setMapChoose] = React.useState(MapA);
  const [choosePlace, setChoosePlace] = React.useState(0);
  const [bgColor, setBgColor] = React.useState('#D1D8EE');

  const [lang, setLang] = React.useState('');

  useEffect(() => {
    // 取得 param query
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const mode = urlParams.get('mode');
    setModeStart('/intro?mode=' + mode + '&newsModal=false');

    if (mode === 'KaoHarbor') {
      setChoosePlace(0);
    }
    if (mode === 'GreatHarborBridge') {
      setChoosePlace(1);
    }
    if (mode === 'KaoPortDepot') {
      setChoosePlace(2);
    }
    if (mode === 'KaoHarborMuseum') {
      setChoosePlace(3);
    }
    if (mode === 'KaoPortPark') {
      setChoosePlace(4);
    }
  }, []);

  useEffect(() => {
    switch (choosePlace) {
      case 0:
        if (lang === 'en') {
          setMapChoose(EnMapA);
        } else {
          setMapChoose(MapA);
        }
        setBgColor('#D2FFFF');
        break;
      case 1:
        if (lang === 'en') {
          setMapChoose(EnMapB);
        } else {
          setMapChoose(MapB);
        }
        setBgColor('#D1D8EE');
        break;
      case 2:
        if (lang === 'en') {
          setMapChoose(EnMapC);
        } else {
          setMapChoose(MapC);
        }
        setBgColor('#FFE8F0');
        break;
      case 3:
        if (lang === 'en') {
          setMapChoose(EnMapD);
        } else {
          setMapChoose(MapD);
        }
        setBgColor('#FBE3D2');
        break;
      case 4:
        if (lang === 'en') {
          setMapChoose(EnMapE);
        } else {
          setMapChoose(MapE);
        }
        setBgColor('#FFFFD1');
        break;
      default:
        break;
    }
  }, [choosePlace]);

  const openModal = () => {
    setModalIsOpen(true);
  }

  const afterOpenModal = () => {
    console.log('afterOpenModal');
  }

  const closeModal = () => {
    setModalIsOpen(false);
  }

  const openMapModal = () => {
    setModalMapIsOpen(true);
  }

  const closeMapModal = () => {
    setModalMapIsOpen(false);
  }

  const scrollToTop = () => {
    // class scene-tour 裡面的元素 smooth scroll to top
    document.querySelector('.scene-tour').scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  useEffect(() => {
    // 取得語言
    const currentLanguage = localStorage.getItem('i18nextLng_htc_ar');
    i18n.changeLanguage(currentLanguage);

    setLang(currentLanguage);

    console.log('currentLanguage', currentLanguage);

  }, [lang]);

  return (
    <div className={`scene-tour ${lang === 'en' ? 'en' : ''}`}>
      <header>
        <Link to={modeStart}>
          <img src={BtnBack} alt="Back" />
        </Link>

        <h1>
          {t('scene-tour.title')}
        </h1>
        <div className="header-right">
          <button onClick={openModal}>
            <img src={BtnQa} alt="Q&A" />
          </button>
        </div>
      </header>

      <div className={`tour-container ${lang === 'en' ? 'en' : ''}`}>
        <section className="tour-map" style={{ backgroundColor: bgColor }}>
          <span className={`placeName placeA ${choosePlace === 0 ? 'active' : ''}`} onClick={() => setChoosePlace(0)}>{t('scene-tour.location1')}</span>
          <span className={`placeName placeB ${choosePlace === 1 ? 'active' : ''}`} onClick={() => setChoosePlace(1)}>{t('scene-tour.location2')}</span>
          <span className={`placeName placeC ${choosePlace === 2 ? 'active' : ''}`} onClick={() => setChoosePlace(2)}>{t('scene-tour.location3')}</span>
          <span className={`placeName placeD ${choosePlace === 3 ? 'active' : ''}`} onClick={() => setChoosePlace(3)}>{t('scene-tour.location4')}</span>
          <span className={`placeName placeE ${choosePlace === 4 ? 'active' : ''}`} onClick={() => setChoosePlace(4)}>{t('scene-tour.location5')}</span>

          <div className="tour-map-box">
            <img src={mapChoose} alt="Map" />
            <button onClick={openMapModal}>
              <img src={BtnScale} alt="Scale" />
            </button>
          </div>
        </section>
        {
          choosePlace === 0 && <Tour01 />
        }

        {
          choosePlace === 1 && <Tour02 />
        }

        {
          choosePlace === 2 && <Tour03 />
        }

        {
          choosePlace === 3 && <Tour04 />
        }

        {
          choosePlace === 4 && <Tour05 />
        }


        <button className="back-to-top" onClick={() => scrollToTop()}>
          <img src={IconBackToTop} alt="Back To Top" />
        </button>
      </div>

      <Footer />

      {/* Modal 介紹 */}
      <ModalIntro
        modalIsOpen={modalIsOpen}
        afterOpenModal={afterOpenModal}
        closeModal={closeModal}
      />

      {/* Modal 地圖 */}
      <ModalMap
        modalMapIsOpen={modalMapIsOpen}
        chooseMap={mapChoose}
        closeMapModal={closeMapModal}
      />
    </div>
  );
}

export default SceneTour;
