import { useTranslation } from 'react-i18next';

import IconAbout from './../../assets/img/icon/icon-about.png';
import IconStore from './../../assets/img/icon/icon-store.png';
import IconWalker from './../../assets/img/icon/icon-walker.png';
import TourB01 from './../../assets/img/tour/b/1.png';
import TourB02 from './../../assets/img/tour/b/2.png';
import TourB03 from './../../assets/img/tour/b/3.png';
import TourB04 from './../../assets/img/tour/b/4.png';
import TourB05 from './../../assets/img/tour/b/5.png';

const Tour02 = () => {
  const { t } = useTranslation();

  return (
    <section className="tour-content">
      <div className="tour-content-about">
        <h2>
          <img src={IconAbout} alt="Icon About" className="tour-content-icon" />
          {t('scene-tour.tour2.title_about')}
        </h2>
        <img src={TourB01} alt="Tour B01" />
        <h3>
          {t('scene-tour.tour2.h3_1')}
        </h3>
        <p>
          {t('scene-tour.tour2.p_1')}
        </p>
        <img src={TourB02} alt="Tour B02" />
        <h3>
          {t('scene-tour.tour2.h3_2')}
        </h3>
        <p>
          {t('scene-tour.tour2.p_2')}
        </p>
        <img src={TourB03} alt="Tour B03" />
        <h3>
          {t('scene-tour.tour2.h3_3')}
        </h3>
        <p>
          {t('scene-tour.tour2.p_3')}
        </p>
        <img src={TourB04} alt="Tour B04" />
        <h3>
          {t('scene-tour.tour2.h3_4')}
        </h3>
        <p>
          {t('scene-tour.tour2.p_4')}
        </p>
        <div className="tour-openTime">
          <h3>{t('scene-tour.tour2.opentime1')}</h3>
          <div>{t('scene-tour.tour2.opentime2')}</div>
          <div>{t('scene-tour.tour2.opentime3')}</div>
          <div>{t('scene-tour.tour2.opentime4')}</div>
        </div>
      </div>
      <div className="tour-content-store">
        <h2>
          <img src={IconStore} alt="Icon About" className="tour-content-icon" />
          {t('scene-tour.tour2.attraction_title')}
        </h2>
        <img src={TourB05} alt="Tour A05" />
        {/* INFO DISTANCE */}
        <div className="tour-store-box">
          <h3>
            {t('scene-tour.tour2.h3_5')}
          </h3>
          <div>
            <img src={IconWalker} alt="Icon Walker" />
            {t('scene-tour.tour2.p_5')}
          </div>
        </div>
        <p>
          {t('scene-tour.tour2.p_6')}<br /> <br />

          {t('scene-tour.tour2.p_7')}<br />
          {t('scene-tour.tour2.p_8')}
        </p>

        <div className="tour-openTime">
          <h3>{t('scene-tour.tour2.opentime5')}</h3>
          <div>{t('scene-tour.tour2.opentime6')}</div>
          <div>{t('scene-tour.tour2.opentime7')}</div>
        </div>
      </div>
    </section>
  );
}

export default Tour02;
