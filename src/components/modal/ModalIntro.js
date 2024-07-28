import './css/modal-intro.scss';

import React from 'react';
import { useTranslation } from 'react-i18next';

import BtnIKnow from './../../assets/img/btn/btn-iknow.png';
import IconCamera from './../../assets/img/icon/icon-camera.png';
import IconMap from './../../assets/img/icon/icon-map.png';
import IconPrize from './../../assets/img/icon/icon-prize.png';

const ModalIntro = (props) => {
  const { t } = useTranslation();

  return (
    <>
      {
        props.modalIsOpen ? (
          // Modal Mask
          <div className="modal-mask modal-intro-custom">
            <div className="modal-intro">
              <div className="modal-content">
                <div className="modal-header">
                  <h2>
                    {t('modal-intro.title1')} <br />
                    {t('modal-intro.title2')}
                  </h2>
                  <p>
                    {t('modal-intro.content1')}
                    <br />
                    {t('modal-intro.content2')}
                    <br />
                    {t('modal-intro.content3')}
                  </p>
                </div>
                <div className="modal-body">
                  <section>
                    <span>
                      <img src={IconMap} alt="Map" />
                    </span>
                    <span>
                      <h3>{t('modal-intro.t1')}</h3>
                      <p>{t('modal-intro.text1')}</p>
                    </span>
                  </section>

                  <section>
                    <span>
                      <img src={IconCamera} alt="Camera" />
                    </span>
                    <span>
                      <h3>{t('modal-intro.t2')}</h3>
                      <p>{t('modal-intro.text2')}</p>
                    </span>
                  </section>

                  <section>
                    <span>
                      <img src={IconPrize} alt="Prize" />
                    </span>
                    <span>
                      <h3>{t('modal-intro.t3')}</h3>
                      <p>{t('modal-intro.text3')}</p>
                    </span>
                  </section>
                </div>
                <div className="modal-footer">
                  <button>
                    <img src={BtnIKnow} alt="I Know" onClick={props.closeModal} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : null
      }
    </>
  );
}

export default ModalIntro;
