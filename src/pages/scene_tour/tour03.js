import React from 'react';
import { useTranslation } from 'react-i18next';

import IconAbout from './../../assets/img/icon/icon-about.png';
import IconHouse from './../../assets/img/icon/icon-house.png';
import IconRestaurant from './../../assets/img/icon/icon-restaurant.png';
import IconShopping from './../../assets/img/icon/icon-shopping.png';
import IconStore from './../../assets/img/icon/icon-store.png';
import TourC01 from './../../assets/img/tour/c/1.png';
import TourC1001 from './../../assets/img/tour/c/10/1.png';
import TourC1010 from './../../assets/img/tour/c/10/10.png';
import TourC1011 from './../../assets/img/tour/c/10/11.png';
import TourC1012 from './../../assets/img/tour/c/10/12.png';
import TourC1002 from './../../assets/img/tour/c/10/2.png';
import TourC1003 from './../../assets/img/tour/c/10/3.png';
import TourC1004 from './../../assets/img/tour/c/10/4.png';
import TourC1005 from './../../assets/img/tour/c/10/5.png';
import TourC1006 from './../../assets/img/tour/c/10/6.png';
import TourC1007 from './../../assets/img/tour/c/10/7.png';
import TourC1008 from './../../assets/img/tour/c/10/8.png';
import TourC1009 from './../../assets/img/tour/c/10/9.png';
import TourC02 from './../../assets/img/tour/c/2.png';
import TourC701 from './../../assets/img/tour/c/7/1.png';
import TourC702 from './../../assets/img/tour/c/7/2.png';
import TourC703 from './../../assets/img/tour/c/7/3.png';
import TourC704 from './../../assets/img/tour/c/7/4.png';
import TourC705 from './../../assets/img/tour/c/7/5.png';
import TourC706 from './../../assets/img/tour/c/7/6.png';
import TourC801 from './../../assets/img/tour/c/8/1.png';
import TourC802 from './../../assets/img/tour/c/8/2.png';
import TourC803 from './../../assets/img/tour/c/8/3.png';
import TourC804 from './../../assets/img/tour/c/8/4.png';
import TourC805 from './../../assets/img/tour/c/8/5.png';
import TourC901 from './../../assets/img/tour/c/9/1.png';
import TourC902 from './../../assets/img/tour/c/9/2.png';
import TourC903 from './../../assets/img/tour/c/9/3.png';
import TourC904 from './../../assets/img/tour/c/9/4.png';
import TourC905 from './../../assets/img/tour/c/9/5.png';
import TourC906 from './../../assets/img/tour/c/9/6.png';

const Tour03 = () => {
  const { t } = useTranslation();
  const [chooseHouse, setChooseHouse] = React.useState(0);

  return (
    <section className="tour-content">
      <div className="tour-content-about">
        <h2>
          <img src={IconAbout} alt="Icon About" className="tour-content-icon" />
          {t('scene-tour.tour3.title_about')}
        </h2>
        <img src={TourC01} alt="Tour A01" />
        <h3>
          {t('scene-tour.tour3.h3_1')}
        </h3>
        <p>
          {t('scene-tour.tour3.p_1')}
        </p>
        <img src={TourC02} alt="Tour A02" />
        <h3>
          {t('scene-tour.tour3.h3_2')}
        </h3>
        <p>
          {t('scene-tour.tour3.p_2')}
        </p>

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

          <button className={chooseHouse === 1 ? 'active' : ''} onClick={() => setChooseHouse(1)}>
            {t('scene-tour.tour3.store.c2')}
          </button>

          <button className={chooseHouse === 2 ? 'active' : ''} onClick={() => setChooseHouse(2)}>
            {t('scene-tour.tour3.store.c3')}
          </button>

          <button className={chooseHouse === 3 ? 'active' : ''} onClick={() => setChooseHouse(3)}>
            {t('scene-tour.tour3.store.c4')}
          </button>

          <button className={chooseHouse === 4 ? 'active' : ''} onClick={() => setChooseHouse(4)}>
            {t('scene-tour.tour3.store.c5')}
          </button>
        </div>

        {/* DIVIDER */}
        <div className={`tour-divider ${chooseHouse === 1 || chooseHouse === 0 ? 'active' : ''}`}></div>
        {/* 倉7 */}
        <div className={`tour-store-container ${chooseHouse === 1 || chooseHouse === 0 ? 'active' : ''}`}>
          <h3>
            <img src={IconHouse} alt="Icon Shopping" />
            {t('scene-tour.tour3.store.c2')}
          </h3>

          <div className="tour-store-enjoy">
            <h4>
              <img src={IconRestaurant} alt="Icon Restaurant" />
              {t('scene-tour.tour3.store.title1')}
            </h4>
            <div className="tour-store-box-special">
              <div className="tour-store-box-item">
                <img src={TourC701} alt="Tour C701" />
                <h5>
                  {t('scene-tour.tour3.store.c1_item.h5_1')}
                </h5>
                <p>
                  {t('scene-tour.tour3.store.c1_item.p_1_1')}
                  <br />
                  {t('scene-tour.tour3.store.c1_item.p_1_2')}
                </p>
              </div>
            </div>
          </div>

          <div className="tour-store-enjoy">
            <h4>
              <img src={IconShopping} alt="IconShopping" />
              {t('scene-tour.tour3.store.title2')}
            </h4>
            <div className="tour-store-box-special">
              <div className="tour-store-box-item">
                <img src={TourC702} alt="Tour C702" />
                <h5>
                  {t('scene-tour.tour3.store.c1_item.h5_2')}
                </h5>
                <p>
                  {t('scene-tour.tour3.store.c1_item.p_2_1')}
                  <br />
                  {t('scene-tour.tour3.store.c1_item.p_2_2')}
                </p>
              </div>
              <div className="tour-store-box-item">
                <img src={TourC703} alt="Tour C703" />
                <h5>
                  {t('scene-tour.tour3.store.c1_item.h5_3')}
                </h5>
                <p>
                  {t('scene-tour.tour3.store.c1_item.p_3')}
                </p>
              </div>
              <div className="tour-store-box-item">
                <img src={TourC704} alt="Tour C704" />
                <h5>
                  {t('scene-tour.tour3.store.c1_item.h5_4')}
                </h5>
                <p>
                  {t('scene-tour.tour3.store.c1_item.p_4_1')}
                  <br />
                  {t('scene-tour.tour3.store.c1_item.p_4_2')}
                </p>
              </div>
              <div className="tour-store-box-item">
                <img src={TourC705} alt="Tour C705" />
                <h5>
                  {t('scene-tour.tour3.store.c1_item.h5_5')}
                </h5>
                <p>
                  {t('scene-tour.tour3.store.c1_item.p_5_1')}
                  <br />
                  {t('scene-tour.tour3.store.c1_item.p_5_2')}
                </p>
              </div>
              <div className="tour-store-box-item">
                <img src={TourC706} alt="Tour C706" />
                <h5>
                  {t('scene-tour.tour3.store.c1_item.h5_6')}
                </h5>
                <p>
                  {t('scene-tour.tour3.store.c1_item.p_6_1')}
                  <br />
                  {t('scene-tour.tour3.store.c1_item.p_6_2')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className={`tour-divider ${chooseHouse === 2 || chooseHouse === 0 ? 'active' : ''}`}></div>
        {/* 倉8 */}
        <div className={`tour-store-container ${chooseHouse === 2 || chooseHouse === 0 ? 'active' : ''}`}>
          <h3>
            <img src={IconHouse} alt="Icon Shopping" />
            {t('scene-tour.tour3.store.c3')}
          </h3>

          {/*美食佳餚  */}
          <div className="tour-store-enjoy">
            <h4>
              <img src={IconRestaurant} alt="Icon Restaurant" />
              {t('scene-tour.tour3.store.title1')}
            </h4>
            <div className="tour-store-box-special">
              <div className="tour-store-box-item">
                <img src={TourC801} alt="Tour C801" />
                <h5>樂檸漢堡</h5>
                <p>來樂檸， 記得穿短褲:)</p>
              </div>
              <div className="tour-store-box-item">
                <img src={TourC802} alt="Tour C802" />
                <h5>打水灣酒樓</h5>
                <p>您城中新晉的 夜生活好去處</p>
              </div>
            </div>
          </div>

          {/*  樂享購物 */}
          <div className="tour-store-enjoy">
            <h4>
              <img src={IconShopping} alt="IconShopping" />
              {t('scene-tour.tour3.store.title2')}
            </h4>
            <div className="tour-store-box-special">
              <div className="tour-store-box-item">
                <img src={TourC803} alt="TourC803" />
                <h5>貝克街</h5>
                <p>
                  英國羊駝翻玩品牌 全台熱銷中
                </p>
              </div>
              <div className="tour-store-box-item">
                <img src={TourC804} alt="TourC804" />
                <h5>PEANUTS</h5>
                <p>把可愛的史努比 與夥伴帶給大家</p>
              </div>
              <div className="tour-store-box-item">
                <img src={TourC805} alt="TourC805" />
                <h5>Lonsdale</h5>
                <p>
                  Sport is fashion 演繹在運動時尚服飾中
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className={`tour-divider ${chooseHouse === 3 || chooseHouse === 0 ? 'active' : ''}`}></div>
        {/* 倉9 */}
        <div className={`tour-store-container ${chooseHouse === 3 || chooseHouse === 0 ? 'active' : ''}`}>
          <h3>
            <img src={IconHouse} alt="Icon Shopping" />
            {t('scene-tour.tour3.store.c4')}
          </h3>

          {/*美食佳餚  */}
          <div className="tour-store-enjoy">
            <h4>
              <img src={IconRestaurant} alt="Icon Restaurant" />
              {t('scene-tour.tour3.store.title1')}
            </h4>
            <div className="tour-store-box-special">
              <div className="tour-store-box-item">
                <img src={TourC901} alt="TourC901" />
                <h5>鹿燒肉屋</h5>
                <p>我在鹿燒肉等你 一起來場肉的饗宴</p>
              </div>
            </div>
          </div>

          {/*  樂享購物 */}
          <div className="tour-store-enjoy">
            <h4>
              <img src={IconShopping} alt="IconShopping" />
              {t('scene-tour.tour3.store.title2')}
            </h4>
            <div className="tour-store-box-special">
              <div className="tour-store-box-item">
                <img src={TourC902} alt="TourC902" />
                <h5>摩曼頓</h5>
                <p>台灣知名連鎖 休閒運動品牌通路</p>
              </div>

              <div className="tour-store-box-item">
                <img src={TourC903} alt="TourC903" />
                <h5>KANGOL</h5>
                <p>英倫經典 街頭文化品牌</p>
              </div>

              <div className="tour-store-box-item">
                <img src={TourC904} alt="TourC904" />
                <h5>XING</h5>
                <p>銷售日本風格服飾 日系穿搭，簡單舒適</p>
              </div>

              <div className="tour-store-box-item">
                <img src={TourC905} alt="TourC903" />
                <h5>宸知 CHEZ</h5>
                <p>日系風格 簡單溫暖穿搭</p>
              </div>

              <div className="tour-store-box-item">
                <img src={TourC906} alt="TourC906" />
                <h5>哈瓦仕</h5>
                <p>秉持著持久且舒適的設計 適合所有人的人字拖</p>
              </div>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className={`tour-divider ${chooseHouse === 4 || chooseHouse === 0 ? 'active' : ''}`}></div>
        {/* 倉10 */}
        <div className={`tour-store-container ${chooseHouse === 4 || chooseHouse === 0 ? 'active' : ''}`}>
          <h3>
            <img src={IconHouse} alt="Icon Shopping" />
            {t('scene-tour.tour3.store.c5')}
          </h3>

          {/*美食佳餚  */}
          <div className="tour-store-enjoy">
            <h4>
              <img src={IconRestaurant} alt="Icon Restaurant" />
              {t('scene-tour.tour3.store.title1')}
            </h4>
            <div className="tour-store-box-special">
              <div className="tour-store-box-item">
                <img src={TourC1001} alt="TourC1001" />
                <h5>周氏蝦卷</h5>
                <p>五十年老店 獨家配方，傳統風味</p>
              </div>

              <div className="tour-store-box-item">
                <img src={TourC1002} alt="TourC1002" />
                <h5>慢慢來義式料理</h5>
                <p>義式手法，台灣食材 慢慢來的烹飪精神</p>
              </div>

              <div className="tour-store-box-item">
                <img src={TourC1003} alt="TourC1003" />
                <h5>小雞上樓</h5>
                <p>最好吃的 韓式炸雞</p>
              </div>

              <div className="tour-store-box-item">
                <img src={TourC1004} alt="TourC1004" />
                <h5>阿洛薩咖啡</h5>
                <p>SCA國際烘培師 親自淬煉出優質咖啡</p>
              </div>

              <div className="tour-store-box-item">
                <img src={TourC1005} alt="TourC1005" />
                <h5>微伊茶集 WEI TEA</h5>
                <p>一杯飲品、一種態度 用好心，做好茶</p>
              </div>

              <div className="tour-store-box-item">
                <img src={TourC1006} alt="TourC1006" />
                <h5>津芒果冰品店</h5>
                <p>實在、純粹、用心 吃冰拉</p>
              </div>

              <div className="tour-store-box-item">
                <img src={TourC1007} alt="TourC1007" />
                <h5>Queenny 葵米</h5>
                <p>一口珍珠 幸福滿足</p>
              </div>

              <div className="tour-store-box-item">
                <img src={TourC1008} alt="TourC1008" />
                <h5>糖小鴨港式甜品</h5>
                <p>堅持現點現烤 外酥內軟、香氣四溢</p>
              </div>

              <div className="tour-store-box-item">
                <img src={TourC1009} alt="TourC1009" />
                <h5>北海鮮物</h5>
                <p>現烤魷魚 賦予傳統的海味零嘴</p>
              </div>
            </div>
          </div>

          {/*  樂享購物 */}
          <div className="tour-store-enjoy">
            <h4>
              <img src={IconShopping} alt="IconShopping" />
              {t('scene-tour.tour3.store.title2')}
            </h4>
            <div className="tour-store-box-special">
              <div className="tour-store-box-item">
                <img src={TourC1010} alt="TourC1010" />
                <h5>散事舖</h5>
                <p>親自然材質包裝配件 職人品牌選物</p>
              </div>

              <div className="tour-store-box-item">
                <img src={TourC1011} alt="TourC1011" />
                <h5>大港潮-大港生活</h5>
                <p>潮玩選物，伴手禮</p>
              </div>

              <div className="tour-store-box-item">
                <img src={TourC1012} alt="TourC1012" />
                <h5>大港餅-職人手作</h5>
                <p>職選在地食材</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tour03;
