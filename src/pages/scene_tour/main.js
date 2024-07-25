import './css/main.scss';

import React, { useEffect } from 'react';
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
import Footer from './../../components/footer';
import ModalIntro from './../../components/modal/ModalIntro';
import ModalMap from './../../components/modal/ModalMap';
import Tour01 from './tour01';
import Tour02 from './tour02';
import Tour03 from './tour03';
import Tour04 from './tour04';
import Tour05 from './tour05';

const SceneTour = () => {
  const [modeStart, setModeStart] = React.useState('');
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [modalMapIsOpen, setModalMapIsOpen] = React.useState(false);

  const [mapChoose, setMapChoose] = React.useState(MapA);
  const [choosePlace, setChoosePlace] = React.useState(0);
  const [bgColor, setBgColor] = React.useState('#D1D8EE');

  useEffect(() => {
    // 取得 param query
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const mode = urlParams.get('mode');
    setModeStart('/intro?mode=' + mode + '&newsModal=false');
  }, []);

  useEffect(() => {
    switch (choosePlace) {
      case 0:
        setMapChoose(MapA);
        setBgColor('#D2FFFF');
        break;
      case 1:
        setMapChoose(MapB);
        setBgColor('#D1D8EE');
        break;
      case 2:
        setMapChoose(MapC);
        setBgColor('#FFE8F0');
        break;
      case 3:
        setMapChoose(MapD);
        setBgColor('#FBE3D2');
        break;
      case 4:
        setMapChoose(MapE);
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

  return (
    <div className="scene-tour">
      <header>
        <Link to={modeStart}>
          <img src={BtnBack} alt="Back" />
        </Link>

        <h1>AR 導覽點介紹</h1>
        <div className="header-right">
          <button onClick={openModal}>
            <img src={BtnQa} alt="Q&A" />
          </button>
        </div>
      </header>

      <div className="tour-container">
        <section className="tour-map" style={{ backgroundColor: bgColor }}>
          <span className={`placeA ${choosePlace === 0 ? 'active' : ''}`} onClick={() => setChoosePlace(0)}>高雄港</span>
          <span className={`placeB ${choosePlace === 1 ? 'active' : ''}`} onClick={() => setChoosePlace(1)}>大港橋</span>
          <span className={`placeC ${choosePlace === 2 ? 'active' : ''}`} onClick={() => setChoosePlace(2)}>大港倉</span>
          <span className={`placeD ${choosePlace === 3 ? 'active' : ''}`} onClick={() => setChoosePlace(3)}>港史館</span>
          <span className={`placeE ${choosePlace === 4 ? 'active' : ''}`} onClick={() => setChoosePlace(4)}>高港水花園</span>

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
