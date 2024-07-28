import { useTranslation } from 'react-i18next';

import IconAbout from './../../assets/img/icon/icon-about.png';
import TourD01 from './../../assets/img/tour/d/1.png';
import TourD02 from './../../assets/img/tour/d/2.png';
import TourD03 from './../../assets/img/tour/d/3.png';

const Tour04 = () => {
  const { t } = useTranslation();

  return (
    <section className="tour-content">
      <div className="tour-content-about">
        <h2>
          <img src={IconAbout} alt="Icon About" className="tour-content-icon" />
          {t('scene-tour.tour4.title_about')}
        </h2>
        <img src={TourD01} alt="Tour D01" />
        <h3>
          {t('scene-tour.tour4.h3_1')}
        </h3>
        <p>
          {t('scene-tour.tour4.p_1')}
        </p>
        <img src={TourD02} alt="Tour D02" />
        <h3>
          {t('scene-tour.tour4.h3_2')}
        </h3>
        <p>
          {t('scene-tour.tour4.p_2')}
        </p>
        <img src={TourD03} alt="Tour D03" />
        <h3>
          {t('scene-tour.tour4.h3_3')}
        </h3>
        <p>
          {t('scene-tour.tour4.p_3')}
        </p>

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
