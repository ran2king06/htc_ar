import { useTranslation } from 'react-i18next';
import React, { useEffect } from 'react';

import IconAbout from './../../assets/img/icon/icon-about.png';

const Tour04 = () => {
  const { t, i18n } = useTranslation();
  const [tourData, setTourData] = React.useState([]);

  const zhApiPath = '/spottour/zh/tour04/';
  const enApiPath = '/spottour/en/tour04/';

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
  }, [i18n.language]);

  return (
    <section className="tour-content">
      <div className="tour-content-about">
        <h2>
          <img src={IconAbout} alt="Icon About" className="tour-content-icon" />
          {t('scene-tour.tour4.title_about')}
        </h2>

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
          <h3>{t('scene-tour.tour4.opentime1')}</h3>
          <div>{t('scene-tour.tour4.opentime2')}</div>
          <div>{t('scene-tour.tour4.opentime3')}</div>
          <div>{t('scene-tour.tour4.opentime4')}</div>
          <div>{t('scene-tour.tour4.opentime5')}</div>
        </div>
      </div>
    </section>
  );
}

export default Tour04;
