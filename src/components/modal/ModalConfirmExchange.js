import './css/modal-exchange-confirm.scss';

import React, { useState } from 'react';

import BtnCancel from './../../assets/img/btn/btn-cancel.png';
import BtnUse from './../../assets/img/btn/btn-use.png';
import IconSuccess from './../../assets/img/icon/icon-success.png';

const ModalConfirmExchange = (props) => {
  const [exchangeSuccess, setExchangeSuccess] = useState(false);

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

  return (
    <>
      {
        props.modalExchangeIsOpen ? (
          // Modal Mask
          <div className="modal-mask modal-exchange-custom">
            <div className="modal-intro">
              <div className="modal-content">
                <p>
                  確定使用「10點獎章」兌換<span>高雄亞灣5G AIoT AR導覽體驗-限定好禮</span>嗎？ ＊請將畫面交由工作人員操作，一經核銷將無法返還！
                </p>

                <div className="modal-btn-box">
                  <button onClick={exchange}>
                    <img src={BtnUse} alt="Use" />
                  </button>
                  <button onClick={props.closeExchangeModal}>
                    <img src={BtnCancel} alt="Cancel" />
                  </button>
                </div>
              </div>

              {
                exchangeSuccess ? (
                  <div className="exchange-success">
                    <img src={IconSuccess} alt="Success" />
                    <p>兌換成功！</p>
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
