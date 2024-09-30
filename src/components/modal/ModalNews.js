import './css/modal-news.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import React, { useEffect, useRef } from 'react';
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
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const modeQuery = urlParams.get('mode');

  const [newsData, setNewsData] = React.useState([]);

  // 使用 useRef 存储 Swiper 实例和 swiper-container 引用
  const swiperRef = useRef(null);
  const swiperContainerRef = useRef(null);

  // 获取新闻数据
  useEffect(() => {
    fetch('/news.json?nocache='+ (new Date()).getTime())
      .then((response) => response.json())
      .then((data) => {
        if (modeQuery) {
          const fData = data.filter((child) => child.mode === modeQuery);
          console.log('fData', fData);
          setNewsData(fData);
        } else {
          setNewsData(data);
        }
      })
      .catch((error) => {
        console.error('Error fetching JSON:', error);
      });
  }, [props.modalIsOpen]);

  // 初始化 Swiper 并处理事件监听器
  useEffect(() => {
    // 确保 newsData 加载完毕，并且 swiperContainerRef 已经挂载
    if (newsData.length > 0 && swiperContainerRef.current) {
      // 在初始化新的 Swiper 实例之前，销毁之前的实例
      if (swiperRef.current) {
        swiperRef.current.destroy(true, true);
        swiperRef.current = null;
      }

      swiperRef.current = new Swiper(swiperContainerRef.current, {
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

      // 为每个 swiper-body-text 元素添加事件监听器
      const swiperBodyText = document.querySelectorAll('.swiper-body-text');
      const handleMouseEnter = () => {
        if (swiperRef.current && swiperRef.current.autoplay) {
          swiperRef.current.autoplay.stop();
        }
      };
      const handleMouseLeave = () => {
        if (swiperRef.current && swiperRef.current.autoplay) {
          swiperRef.current.autoplay.start();
        }
      };

      swiperBodyText.forEach((element) => {
        element.addEventListener('mouseenter', handleMouseEnter);
        element.addEventListener('mouseleave', handleMouseLeave);
        element.addEventListener('touchstart', handleMouseEnter);
        element.addEventListener('touchend', handleMouseLeave);
      });

      // 清理函数，移除事件监听器并销毁 Swiper 实例
      return () => {
        if (swiperRef.current) {
          swiperRef.current.destroy(true, true);
          swiperRef.current = null;
        }
        swiperBodyText.forEach((element) => {
          element.removeEventListener('mouseenter', handleMouseEnter);
          element.removeEventListener('mouseleave', handleMouseLeave);
          element.removeEventListener('touchstart', handleMouseEnter);
          element.removeEventListener('touchend', handleMouseLeave);
        });
      };
    }
  }, [newsData]);

  return (
    <>
      {newsData && props.modalIsOpen ? (
        // 模态框遮罩
        <div className="modal-mask modal-news-custom">
          <div className="modal-intro">
            <span className="close" onClick={props.closeModal}>
              <img src={IconClose} alt="Close" />
            </span>
            <div className="modal-content">
              <div className="modal-header">
                <h2>
                  <img src={IconNews} alt="News" />
                  {t('modal-news.title')}
                </h2>
              </div>

              <div className="modal-body">
                <div className="swiper-container" ref={swiperContainerRef}>
                  <div className="swiper-wrapper">
                    {newsData &&
                      newsData.map((news, index) => (
                        <div className="swiper-slide" key={index}>
                          <div className="swiper-body">
                            <img
                              src={news.img}
                              alt={news.title}
                              className="swiper-body-img"
                            />
                            <div className="swiper-body-text">
                              <h4>{news.title}</h4>
                              <p>{news.content}</p>
                            </div>
                          </div>
                        </div>
                      ))}
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
      ) : null}
    </>
  );
};

export default ModalNews;
