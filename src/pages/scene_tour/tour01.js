import { useTranslation } from 'react-i18next';

import IconAbout from './../../assets/img/icon/icon-about.png';
import IconStore from './../../assets/img/icon/icon-store.png';
import IconWalker from './../../assets/img/icon/icon-walker.png';
import TourA01 from './../../assets/img/tour/a/1.png';
import TourA02 from './../../assets/img/tour/a/2.png';
import TourA03 from './../../assets/img/tour/a/3.png';
import TourA04 from './../../assets/img/tour/a/4.png';
import TourA05 from './../../assets/img/tour/a/5.png';

const Tour01 = () => {
  const { t } = useTranslation();

  return (
    <section className="tour-content">
      <div className="tour-content-about">
        <h2>
          <img src={IconAbout} alt="Icon About" className="tour-content-icon" />
          {t('scene-tour.tour1.title_about')}
        </h2>
        <img src={TourA01} alt="Tour A01" />
        <h3>
          {t('scene-tour.tour1.h3_1')}
        </h3>
        <p>
          {t('scene-tour.tour1.p_1')}
        </p>
        <img src={TourA02} alt="Tour A02" />
        <h3>
          {t('scene-tour.tour1.h3_2')}
        </h3>
        <p>
          {t('scene-tour.tour1.p_2')}
        </p>
        <img src={TourA03} alt="Tour A03" />
        <h3>
          {t('scene-tour.tour1.h3_3')}
        </h3>
        <p>
          {t('scene-tour.tour1.p_3')}
        </p>
      </div>
      <div className="tour-content-store">
        <h2>
          <img src={IconStore} alt="Icon About" className="tour-content-icon" />
          {t('scene-tour.tour1.attraction_title')}
        </h2>
        <img src={TourA04} alt="Tour A04" />
        {/* INFO DISTANCE */}
        <div className="tour-store-box">
          <h3>
            {t('scene-tour.tour1.h3_4')}
          </h3>
          <div>
            <img src={IconWalker} alt="Icon Walker" />
            {t('scene-tour.tour1.p_4')}
          </div>
        </div>
        <p>
          <span className="span-blue special-display-block">
            {t('scene-tour.tour1.p_5')}
          </span>
          {t('scene-tour.tour1.p_6')}
        </p>

        <img src={TourA05} alt="Tour A05" />
        {/* INFO DISTANCE */}
        <div className="tour-store-box">
          <h3>
            {t('scene-tour.tour1.h3_5')}
          </h3>
          <div>
            <img src={IconWalker} alt="Icon Walker" />
            {t('scene-tour.tour1.p_7')}
          </div>
        </div>
        <p>
          {t('scene-tour.tour1.p_8')}
        </p>
      </div>
    </section>
  );
}

export default Tour01;
