import './css/main.scss';

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import BtnBack from './../../assets/img/btn/btn-back.png';
import BtnQa from './../../assets/img/btn/btn-qa.png';
import BtnScale from './../../assets/img/btn/btn-scale.png';
import MapA from './../../assets/img/map/a.png';
import MapB from './../../assets/img/map/b.png';
import MapC from './../../assets/img/map/c.png';
import MapD from './../../assets/img/map/d.png';
import MapE from './../../assets/img/map/e.png';
import TourA01 from './../../assets/img/tour/a/1.png';
import ModalIntro from './../../components/modal/ModalIntro';

const SceneTour = () => {
  const [modeStart, setModeStart] = React.useState('');
  const [modalIsOpen, setModalIsOpen] = React.useState(false);

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
        setBgColor('#D1D8E');
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
          <span className={`placeA ${choosePlace === 0 ? 'active' : ''}`} onClick={() => setChoosePlace(0)}>大港車站</span>
          <span className={`placeB ${choosePlace === 1 ? 'active' : ''}`} onClick={() => setChoosePlace(1)}>大港橋</span>
          <span className={`placeC ${choosePlace === 2 ? 'active' : ''}`} onClick={() => setChoosePlace(2)}>大港倉</span>
          <span className={`placeD ${choosePlace === 3 ? 'active' : ''}`} onClick={() => setChoosePlace(3)}>港史館</span>
          <span className={`placeE ${choosePlace === 4 ? 'active' : ''}`} onClick={() => setChoosePlace(4)}>高港水花園</span>

          <div className="tour-map-box">
            <img src={mapChoose} alt="Map" />
            <button>
              <img src={BtnScale} alt="Scale" />
            </button>
          </div>
        </section>

        <section className="tour-content">
          <h2>大港車站</h2>
          <img src={TourA01} alt="Tour A01" />
          <p>大港車站是一座位於臺灣臺南市安平區的鐵路車站，為臺灣鐵路管理局縱貫線的鐵路車站之一，也是臺灣鐵路管理局的分局所在地。車站位於安平區的中心地帶，為安平區的交通樞紐，也是安平區的代表性建築之一。</p>
          <h2>大港車站</h2>
          <img src={TourA01} alt="Tour A01" />
          <p>大港車站是一座位於臺灣臺南市安平區的鐵路車站，為臺灣鐵路管理局縱貫線的鐵路車站之一，也是臺灣鐵路管理局的分局所在地。車站位於安平區的中心地帶，為安平區的交通樞紐，也是安平區的代表性建築之一。</p>
          <h2>大港車站</h2>
          <img src={TourA01} alt="Tour A01" />
          <p>大港車站是一座位於臺灣臺南市安平區的鐵路車站，為臺灣鐵路管理局縱貫線的鐵路車站之一，也是臺灣鐵路管理局的分局所在地。車站位於安平區的中心地帶，為安平區的交通樞紐，也是安平區的代表性建築之一。</p>
          <h2>大港車站</h2>
          <img src={TourA01} alt="Tour A01" />
          <p>大港車站是一座位於臺灣臺南市安平區的鐵路車站，為臺灣鐵路管理局縱貫線的鐵路車站之一，也是臺灣鐵路管理局的分局所在地。車站位於安平區的中心地帶，為安平區的交通樞紐，也是安平區的代表性建築之一。</p>
          <h2>大港車站</h2>
          <img src={TourA01} alt="Tour A01" />
          <p>大港車站是一座位於臺灣臺南市安平區的鐵路車站，為臺灣鐵路管理局縱貫線的鐵路車站之一，也是臺灣鐵路管理局的分局所在地。車站位於安平區的中心地帶，為安平區的交通樞紐，也是安平區的代表性建築之一。</p>
          <h2>大港車站</h2>
          <img src={TourA01} alt="Tour A01" />
          <p>大港車站是一座位於臺灣臺南市安平區的鐵路車站，為臺灣鐵路管理局縱貫線的鐵路車站之一，也是臺灣鐵路管理局的分局所在地。車站位於安平區的中心地帶，為安平區的交通樞紐，也是安平區的代表性建築之一。</p>


        </section>

      </div>



      {/* Modal 介紹 */}
      <ModalIntro
        modalIsOpen={modalIsOpen}
        afterOpenModal={afterOpenModal}
        closeModal={closeModal}
      />
    </div>
  );
}

export default SceneTour;
