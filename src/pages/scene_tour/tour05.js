import { useTranslation } from 'react-i18next';
import React, { useEffect } from 'react';

import IconAbout from './../../assets/img/icon/icon-about.png';
import IconCaption from './../../assets/img/icon/icon-caption.png';
import IconStore from './../../assets/img/icon/icon-store.png';
import IconWalker from './../../assets/img/icon/icon-walker.png';

const Tour05 = () => {
  const { t, i18n } = useTranslation();
  const [tourData, setTourData] = React.useState([]);
  const [viewData, setViewData] = React.useState([]);

  const zhApiPath = '/spottour/zh/tour05/';
  const enApiPath = '/spottour/en/tour05/';

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

    fetch(apiPath + 'view.json?nocache='+ (new Date()).getTime())
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
          {t('scene-tour.tour5.title_about')}
        </h2>

        {
          tourData.map((item) => (
            !item.imgAnother ? (
              <div key={item.title}>
                <img src={item.img} alt="Tour Img" />
                <h3>
                  {item.title}
                </h3>
                <p dangerouslySetInnerHTML={{ __html: item.content }} />
              </div>
            ) : (
              <div className="custom-tour-images" key={item.titleAnother}>
                <div>
                  <img src={item.img} alt="Tour E02" className="custom-img" />
                  <span>
                    <img src={IconCaption} alt="Caption" />
                    {item.imgLabel}
                  </span>
                </div>
                <div>
                  <img src={item.imgAnother} alt="Tour E03" className="custom-img" />
                  <span>
                    <img src={IconCaption} alt="Caption" />
                    {item.imgLabelAnother}
                  </span>
                </div>
              </div>
            )
          ))
        }
      </div>

      <div className="tour-content-store">
        <h2>
          <img src={IconStore} alt="Icon About" className="tour-content-icon" />
          {t('scene-tour.tour5.attraction_title')}
        </h2>

        {/* DATA */}
        {
          viewData.map((item) => (
            <div key={item.title}>
              <img src={item.img} alt="Tour Img" />
              <div className="tour-store-box">
                <h3 dangerouslySetInnerHTML={{ __html: item.title }} />
                <div>
                  <img src={IconWalker} alt="Icon Walker" />
                  {t('scene-tour.walk')}{item.distanceLong}{t('scene-tour.minute')}
                </div>
              </div>
              <p dangerouslySetInnerHTML={{ __html: item.content }} />
            </div>
          ))
        }
      </div>
    </section>
  );
}

export default Tour05;
