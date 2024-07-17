import './css/modal-intro.scss';

import React from 'react';

import BtnIKnow from './../../assets/img/btn/btn-iknow.png';
import IconCamera from './../../assets/img/icon/icon-camera.png';
import IconMap from './../../assets/img/icon/icon-map.png';
import IconPrize from './../../assets/img/icon/icon-prize.png';

const ModalIntro = (props) => {
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
                    高雄亞灣 5G AIoT <br />
                    AR 導覽體驗
                  </h2>
                  <p>
                    共 5 個AR導覽體驗點等你來探索！<br />
                    和高雄熊一起逛逛港區，完成任務即可獲得<br />
                    獎章，蒐集齊全就有機會兌換限定好禮！
                  </p>
                </div>
                <div className="modal-body">
                  <section>
                    <span>
                      <img src={IconMap} alt="Map" />
                    </span>
                    <span>
                      <h3>導覽點介紹</h3>
                      <p>點選「導覽點介紹」，查看 5 個導覽點的介紹與商家資訊，還有小地圖可以讓你知道導覽點位置哦！</p>
                    </span>
                  </section>

                  <section>
                    <span>
                      <img src={IconCamera} alt="Camera" />
                    </span>
                    <span>
                      <h3>開始探索，尋找圖標</h3>
                      <p>點選「開始探索」，尋找到畫面上的圖標後掃描，跟著高雄熊一起了解高雄吧！</p>
                    </span>
                  </section>

                  <section>
                    <span>
                      <img src={IconPrize} alt="Prize" />
                    </span>
                    <span>
                      <h3>完成任務，集獎章</h3>
                      <p>點選「獎章集點冊」，可以查看任務完成進度，探索完AR導覽點將解鎖問答任務，快來蒐集獎章換限定好禮！</p>
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
