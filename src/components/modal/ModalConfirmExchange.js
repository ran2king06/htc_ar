import './css/modal-exchange-confirm.scss';

import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import BtnCancel from './../../assets/img/btn/btn-cancel.png';
import BtnUse from './../../assets/img/btn/btn-use.png';
import EnBtnCancel from './../../assets/img/btn/en/btn-cancel.png';
import EnBtnUse from './../../assets/img/btn/en/btn-use.png';
import IconSuccess from './../../assets/img/icon/icon-success.png';

const ModalConfirmExchange = (props) => {
  const { i18n, t } = useTranslation();
  const [exchangeSuccess, setExchangeSuccess] = useState(false);
  const [lang, setLang] = useState('');

  function exchange() {
    setExchangeSuccess(true);

    // htcAr_localStorgeData 資料更新, rewardPoints 減少 10 點
    const userData = localStorage.getItem('htcAr_localStorgeData');
    if (userData) {
      const user = JSON.parse(userData);
      user.rewardPoints = user.rewardPoints - 10;
      user.stillHaveReward = false;
      localStorage.setItem('htcAr_localStorgeData', JSON.stringify(user));

      props.exchangeSuccess();
    }

    setTimeout(() => {
      props.closeExchangeModal();
      setExchangeSuccess(false);
    }, 3000);

  }

  useEffect(() => {
    // 取得語言
    const currentLanguage = localStorage.getItem('i18nextLng_htc_ar');
    if (currentLanguage) {
      if (currentLanguage === 'en') {
        i18n.changeLanguage('en');
        setLang('en');
      }
    }

  }, [lang]);

  return (
    <>
      {
        props.modalExchangeIsOpen ? (
          // Modal Mask
          <div className="modal-mask modal-exchange-custom">
            <div className="modal-intro">
              <div className={`modal-content ${lang === 'en' ? 'en' : ''}`}>
                <p>
                  {t('modal-redeem.p1_1')}
                  <span>{t('modal-redeem.p1_2')}</span>
                  {t('modal-redeem.p1_3')}
                  <div className="text_custom">{t('modal-redeem.p2')}</div>
                </p>

                <div className="modal-btn-box">
                  <button onClick={exchange}>
                    {
                      lang === 'en' ? (
                        <img src={EnBtnUse} alt="Use" />
                      ) : (
                        <img src={BtnUse} alt="Use" />
                      )
                      // <img src={BtnUse} alt="Use" />
                    }

                  </button>
                  <button onClick={props.closeExchangeModal}>
                    {
                      lang === 'en' ? (
                        <img src={EnBtnCancel} alt="Cancel" />
                      ) : (
                        <img src={BtnCancel} alt="Cancel" />
                      )
                      // <img src={BtnCancel} alt="Cancel" />
                    }
                  </button>
                </div>
              </div>

              {
                exchangeSuccess ? (
                  <div className={`exchange-success ${lang === 'en' ? 'en' : ''}`}>

                    <img src={IconSuccess} alt="Success" />
                    <p>
                      {t('modal-redeem.p3')}
                    </p>
                  </div>
                ) : null
              }
            </div>
          </div>
        ) : null
      }
    </>
  );
}

export default ModalConfirmExchange;
