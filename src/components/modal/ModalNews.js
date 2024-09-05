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
        delay: 5000,
      },
      pagination: {
        el: '.swiper-news-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next-news',
        prevEl: '.swiper-button-prev-news',
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

                    </div>
                  </div>
                </div>

                <div className="swiper-button-wrapper">
                  <div className="swiper-button-prev-news">
                    <img src={IconArrowLeft} alt="Arrow Left" />
                  </div>
                  <div className="swiper-news-pagination"></div>
                  <div className="swiper-button-next-news">
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
