
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import IconAbout from './../../assets/img/icon/icon-about.png';
import IconHouse from './../../assets/img/icon/icon-house.png';
import IconRestaurant from './../../assets/img/icon/icon-restaurant.png';
import IconShopping from './../../assets/img/icon/icon-shopping.png';
import IconStore from './../../assets/img/icon/icon-store.png';

const Tour03 = () => {
  const { t, i18n } = useTranslation();
  const [chooseHouse, setChooseHouse] = React.useState(0);

  const [tourData, setTourData] = React.useState([]);
  const [viewData, setViewData] = React.useState([]);

  const zhApiPath = '/tour/zh/tour03/';
  const enApiPath = '/tour/en/tour03/';

  useEffect(() => {
    let apiPath = '';
    if (i18n.language === 'en') {
      apiPath = enApiPath;
    } else {
      apiPath = zhApiPath;
    }

    fetch(apiPath + 'about.json')
      .then((response) => response.json())
      .then((data) => {
        setTourData(data);
      });

    fetch(apiPath + 'view.json')
      .then((response) => response.json())
      .then((data) => {
        setViewData(data);
      });
  }, [i18n.language]);

  return (
    <section className="tour-content">
      <div className="tour-content-about">
        <h2>
          <img src={IconAbout} alt="Icon About" className="tour-content-icon" />
          {t('scene-tour.tour3.title_about')}
        </h2>

        {/* DATA */}
        {
          tourData.map((item) => (
            <div key={item.title}>
              <img src={item.img} alt="Tour Img" />
              <h3>
                {item.title}
              </h3>
              <p dangerouslySetInnerHTML={{ __html: item.content }} />
            </div>
          ))
        }

        <div className="tour-openTime">
          <h3>{t('scene-tour.tour3.opentime1')}</h3>
          <div>{t('scene-tour.tour3.opentime2')}</div>
          <div>{t('scene-tour.tour3.opentime3')}</div>
          <div>{t('scene-tour.tour3.opentime4')}</div>
        </div>
      </div>

      {/* STORE */}
      <div className="tour-content-store">
        <h2>
          <img src={IconStore} alt="Icon About" className="tour-content-icon" />
          {t('scene-tour.tour3.attraction_title')}
        </h2>

        {/* 選倉 */}
        <div className="tour-chooseHouse">
          <button className={chooseHouse === 0 ? 'active' : ''} onClick={() => setChooseHouse(0)}>
            {t('scene-tour.tour3.store.c1')}
          </button>

          {
            viewData.map((item, index) => (
              <button key={item.store} className={chooseHouse === index + 1 ? 'active' : ''} onClick={() => setChooseHouse(index + 1)}>
                {t('scene-tour.tour3.storeFine')}{item.store}
              </button>
            ))
          }

        </div>

        {/* DIVIDER */}
        <div className={`tour-divider ${chooseHouse === 1 || chooseHouse === 0 ? 'active' : ''}`}></div>
        {/* 倉7 */}

        {
          viewData.map((item, index) => (
            <div key={item.store} className={`tour-store-container ${chooseHouse === index + 1 || chooseHouse === 0 ? 'active' : ''}`}>
              <h3>
                <img src={IconHouse} alt="Icon Shopping" />
                {t('scene-tour.tour3.storeFine')}{item.store}
              </h3>

              {/*美食佳餚  */}
              <div className="tour-store-enjoy">
                {
                  item.eat && item.eat.length > 0 && (
                    <h4>
                      <img src={IconRestaurant} alt="Icon Restaurant" />
                      {t('scene-tour.tour3.store.title1')}
                    </h4>
                  )
                }
                <div className="tour-store-box-special">
                  {
                    item.eat && item.eat.map((item2, index2) => (
                      <div className="tour-store-box-item" key={index2}>
                        <img src={item2.img} alt="Tour" />
                        <h5>{item2.storeName}</h5>
                        <p dangerouslySetInnerHTML={{ __html: item2.desc }} />
                      </div>
                    ))
                  }
                </div>
              </div>

              {/*  樂享購物 */}
              <div className="tour-store-enjoy">
                {
                  item.shop && item.shop.length > 0 && (
                    <h4>
                      <img src={IconShopping} alt="IconShopping" />
                      {t('scene-tour.tour3.store.title2')}
                    </h4>
                  )
                }
                <div className="tour-store-box-special">
                  {
                    item.shop && item.shop.map((item3, index3) => (
                      <div className="tour-store-box-item" key={index3}>
                        <img src={item3.img} alt="Tour" />
                        <h5>{item3.storeName}</h5>
                        <p dangerouslySetInnerHTML={{ __html: item3.desc }} />
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  );
}

export default Tour03;
