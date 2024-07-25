import './css/modal-map.scss';

import React, { useEffect } from 'react';

import IconClose from './../../assets/img/icon/icon-close.png';
import BigMapA from './../../assets/img/map/KMap.png';

const ModalMap = (props) => {
  const [mapImg, setMapImg] = React.useState('');

  useEffect(() => {
    switch (props.chooseMap) {
      case 0:
        setMapImg(BigMapA);
        break;
      default:
        setMapImg(BigMapA);
        break;
    }

    return () => {

    };
  }, []);

  return (
    <>
      {
        props.modalMapIsOpen ? (
          // Modal Mask
          <div className="modal-mask modal-map-custom">
            <div className="modal-intro">
              <span className="close" onClick={props.closeMapModal}>
                <img src={IconClose} alt="Close" />
              </span>
              <div className="modal-content">
                <img src={mapImg} alt="Map" />
              </div>
            </div>
          </div>
        ) : null
      }
    </>
  );
}

export default ModalMap;
