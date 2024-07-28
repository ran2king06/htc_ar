import { useTranslation } from 'react-i18next';

import IconAbout from './../../assets/img/icon/icon-about.png';
import IconCaption from './../../assets/img/icon/icon-caption.png';
import IconStore from './../../assets/img/icon/icon-store.png';
import IconWalker from './../../assets/img/icon/icon-walker.png';
import TourE01 from './../../assets/img/tour/e/1.png';
import TourE02 from './../../assets/img/tour/e/2.png';
import TourE03 from './../../assets/img/tour/e/3.png';
import TourE04 from './../../assets/img/tour/e/4.png';
import TourE05 from './../../assets/img/tour/e/5.png';
import TourE06 from './../../assets/img/tour/e/6.png';

const Tour05 = () => {
  const { t } = useTranslation();

  return (
    <section className="tour-content">
      <div className="tour-content-about">
        <h2>
          <img src={IconAbout} alt="Icon About" className="tour-content-icon" />
          {t('scene-tour.tour5.title_about')}
        </h2>
        <img src={TourE01} alt="Tour E01" />
        <h3>
          {t('scene-tour.tour5.h3_1')}
        </h3>
        <p>
          {t('scene-tour.tour5.p_1')}
        </p>

        <div className="custom-tour-images">
          <div>
            <img src={TourE02} alt="Tour E02" className="custom-img" />
            <span>
              <img src={IconCaption} alt="Caption" />
              {t('scene-tour.tour5.caption1')}
            </span>
          </div>
          <div>
            <img src={TourE03} alt="Tour E03" className="custom-img" />
            <span>
              <img src={IconCaption} alt="Caption" />
              {t('scene-tour.tour5.caption2')}
            </span>
          </div>
        </div>
        <h3>
          {t('scene-tour.tour5.h3_2')}
        </h3>
        <p>
          {t('scene-tour.tour5.p_2')}
        </p>

        <img src={TourE04} alt="Tour E04" />
        <h3>
          {t('scene-tour.tour5.h3_3')}
        </h3>
        <p>
          {t('scene-tour.tour5.p_3')}
        </p>

        <img src={TourE05} alt="Tour E05" />
        <h3>
          {t('scene-tour.tour5.h3_4')}
        </h3>
        <p>
          {t('scene-tour.tour5.p_4')}
        </p>
      </div>

      <div className="tour-content-store">
        <h2>
          <img src={IconStore} alt="Icon About" className="tour-content-icon" />
          {t('scene-tour.tour5.attraction_title')}
        </h2>
        <img src={TourE06} alt="Tour E06" />
        {/* INFO DISTANCE */}
        <div className="tour-store-box">
          <h3>
            {t('scene-tour.tour5.h3_5')}
          </h3>
          <div>
            <img src={IconWalker} alt="Icon Walker" />
            {t('scene-tour.tour5.p_5')}
          </div>
        </div>
        <p>
          {t('scene-tour.tour5.p_6')}
        </p>
      </div>
    </section>
  );
}

export default Tour05;
