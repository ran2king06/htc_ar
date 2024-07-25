import './css/modal-map.scss';

import React, { useEffect, useRef } from 'react';

import IconClose from './../../assets/img/icon/icon-close.png';
import BigMapA from './../../assets/img/map/KMap.png';

const ModalMap = (props) => {
  const [mapImg, setMapImg] = React.useState('');
  const modalContent = useRef(null);

  useEffect(() => {
    switch (props.chooseMap) {
      case 0:
        setMapImg(BigMapA);
        break;
      default:
        setMapImg(BigMapA);
        break;
    }
  }, []);

  useEffect(() => {
    if (props.modalMapIsOpen) {
      modalContent.current.scrollTop = 300;
      modalContent.current.scrollLeft = 770;
    }

  }, [props.modalMapIsOpen]);

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
              <div className="modal-content" ref={modalContent}>
                <div className="map-img">
                  <img src={mapImg} alt="Map" />
                </div>
              </div>
            </div>
          </div>
        ) : null
      }
    </>
  );
}

export default ModalMap;
