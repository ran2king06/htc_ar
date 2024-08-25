import './css/modal-news.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Swiper from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import IconArrowLeft from './../../assets/img/icon/icon-arrow-left.png';
import IconArrowRight from './../../assets/img/icon/icon-arrow-right.png';
import IconClose from './../../assets/img/icon/icon-close.png';
import IconNews from './../../assets/img/icon/icon-news.png';

// import NewsImage1 from './../../assets/img/news/01.jpg';


const ModalNews = (props) => {
  const { t } = useTranslation();

  const [newsData, setNewsData] = React.useState([]);

  // Inside a React component
  useEffect(() => {
    fetch('/news.json')
      .then((response) => response.json())
      .then((data) => {
        console.log('Success fetching JSON:', data);
        setNewsData(data);
      })
      .catch((error) => {
        console.error('Error fetching JSON:', error);
      });
  }, []);

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const swiper = new Swiper('.swiper-container', {
      modules: [Navigation, Pagination, Autoplay],
      loop: true,
      autoplay: {
        delay: 5000000,
      },
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });


    // If swiper-body-text scrolling, stop swiper autoplay
    const swiperBodyText = document.querySelectorAll('.swiper-body-text');
    swiperBodyText.forEach((element) => {
      element.addEventListener('mouseenter', () => {
        swiper.autoplay.stop();
      });
      element.addEventListener('mouseleave', () => {
        swiper.autoplay.start();
      });

      element.addEventListener('touchstart', () => {
        swiper.autoplay.stop();
      });
      element.addEventListener('touchend', () => {
        swiper.autoplay.start();
      });
    });


  }, [props.modalIsOpen]);

  return (
    <>
      {
        props.modalIsOpen ? (
          // Modal Mask
          <div className="modal-mask modal-news-custom">
            <div className="modal-intro">
              <span className="close" onClick={props.closeModal}>
                <img src={IconClose} alt="Close" />
              </span>
              <div className="modal-content">
                <div className="modal-header">
                  <h2>
                    <img src={IconNews} alt="News" />{t('modal-news.title')}
                  </h2>
                </div>

                <div className="modal-body">
                  <div className="swiper-container">
                    <div className="swiper-wrapper">
                      {
                        newsData && newsData.map((news, index) => (
                          <div className="swiper-slide" key={index}>
                            <div className="swiper-body">
                              <img src={news.img}

                                alt={news.title} className="swiper-body-img" />
                              <div className="swiper-body-text">
                                <h4>
                                  {news.title}
                                </h4>
                                <p>
                                  {news.content}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))
                      }

                      {/* <div className="swiper-slide">
                        <div className="swiper-body">
                          {
                            newsData.length > 0 ? (
                              <img src={newsData[0].img} alt="News 1" className="swiper-body-img" />
                            ) : null
                          }

                          <div className="swiper-body-text">
                            <h4>
                              2024高雄海洋派對│大港倉/大港橋
                            </h4>
                            <p>
                              2024高雄海洋派對將在8/17(六)-8/25於大港橋及愛河灣周邊水域辦理，為期長達9天的活動🥳嗨翻暑假🥳玩好玩滿，7大精彩活動報你知👇🏻  <br />
                              2024海洋派對在高雄 大港橋造筏揚帆X最Chill水花樂園<br />
                              ➊高雄水花樂園-全新訂製大型遊具首次亮相，高達14公尺高滑道最消暑 <br />
                              ➋水上飛板秀-法國團隊首次來台，專屬高雄的客製化震撼演出🏂 <br />
                              ➌海派遊艇展-最沒有距離的「賞船」體驗，近距離觀賞各式遊艇和動力小船，還有海洋Cosplay服裝可免費借用拍照喔🛥️ <br />
                              ➍遊艇搭乘體驗-七夕過後的約會，海旅漫遊不要錯過⛵️ <br />
                              ➎大港造筏競賽-探索自然、挑戰自我、發揮創意和團隊合作的機會來了👫 <br />
                              ➏水域遊憩活動-SUP、水上腳踏車、獨木舟等免費活動，海玩一夏🏄🏻‍♀️ <br />
                              ➐水域趣味競賽-「是的！船長船員接力賽」，挑戰你的友情默契度及平衡感🙌🏻 更多活動消息及報名資訊陸續釋出中❤️請持續鎖定 高雄海味地圖-高雄市政府海洋局
                            </p>
                          </div>
                        </div>
                      </div> */}

                    </div>
                  </div>
                </div>

                <div className="swiper-button-wrapper">
                  <div className="swiper-button-prev">
                    <img src={IconArrowLeft} alt="Arrow Left" />
                  </div>
                  <div className="swiper-pagination"></div>
                  <div className="swiper-button-next">
                    <img src={IconArrowRight} alt="Arrow Right" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null
      }
    </>
  );
}

export default ModalNews;
