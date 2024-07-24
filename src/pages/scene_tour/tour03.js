import React from 'react';

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
  const [chooseHouse, setChooseHouse] = React.useState(0);

  return (
    <section className="tour-content">
      <div className="tour-content-about">
        <h2>
          <img src={IconAbout} alt="Icon About" className="tour-content-icon" />
          關於「大港倉」
        </h2>
        <img src={TourC01} alt="Tour A01" />
        <h3>
          一茶一樹一咖啡一酒一鞄一食肆
        </h3>
        <p>
          「大港倉410」緊鄰高雄港、大港橋、棧貳庫、駁二藝術特區、高雄流行音樂中心。昔日為「裏船溜」的第三船渠所在地，含括KD7至KD10這4座倉庫，藉由翻新老高港的歷史面貌，建築保留舊倉庫的樑柱結構，並將磚牆改建為通透的玻璃、金屬構成風格櫥窗。昔日儲貨舊倉庫群轉身為職人食肆、大港潮文創禮店、裏船溜花園，港灣魅力景緻結合蓬萊港區舊有碼頭場域特色，遊逛水岸饒富況味風情。
        </p>
        <img src={TourC02} alt="Tour A02" />
        <h3>
          連接港口與城市的風格櫥窗
        </h3>
        <p>
          大港倉410將維持港口碼頭場域的「公共性、開放性、服務性」，保存舊倉庫的樑柱結構，但將磚牆改為通透的玻璃、金屬等材質，讓4座倉庫更具開放性，並能盡攬大港橋與港口風景。以「風格櫥窗」構想出發，引入藝文、餐飲、科技娛樂等商業機能，結合水岸休憩，吸引從駁二一帶步行而來的遊客，並和棧庫群連成一個連續性的水岸遊憩帶。
        </p>
      </div>
      <div className="tour-content-store">
        <h2>
          <img src={IconStore} alt="Icon About" className="tour-content-icon" />
          「大港倉」在地商家
        </h2>

        {/* 選倉 */}
        <div className="tour-chooseHouse">
          <button className={chooseHouse === 0 ? 'active' : ''} onClick={() => setChooseHouse(0)}>
            全部
          </button>

          <button className={chooseHouse === 1 ? 'active' : ''} onClick={() => setChooseHouse(1)}>
            倉7
          </button>

          <button className={chooseHouse === 2 ? 'active' : ''} onClick={() => setChooseHouse(2)}>
            倉8
          </button>

          <button className={chooseHouse === 3 ? 'active' : ''} onClick={() => setChooseHouse(3)}>
            倉9
          </button>

          <button className={chooseHouse === 4 ? 'active' : ''} onClick={() => setChooseHouse(4)}>
            倉10
          </button>
        </div>

        {/* DIVIDER */}
        <div className={`tour-divider ${chooseHouse === 1 || chooseHouse === 0 ? 'active' : ''}`}></div>
        {/* 倉7 */}
        <div className={`tour-store-container ${chooseHouse === 1 || chooseHouse === 0 ? 'active' : ''}`}>
          <h3>
            <img src={IconHouse} alt="Icon Shopping" />
            倉7
          </h3>

          <div className="tour-store-enjoy">
            <h4>
              <img src={IconRestaurant} alt="Icon Restaurant" />
              美食佳餚
            </h4>
            <div className="tour-store-box-special">
              <div className="tour-store-box-item">
                <img src={TourC701} alt="Tour C701" />
                <h5>永心浮島</h5>
                <p>全新海鮮餐酒餐廳 弛放生活新節奏</p>
              </div>
            </div>
          </div>

          <div className="tour-store-enjoy">
            <h4>
              <img src={IconShopping} alt="IconShopping" />
              樂享購物
            </h4>
            <div className="tour-store-box-special">
              <div className="tour-store-box-item">
                <img src={TourC702} alt="Tour C702" />
                <h5>olivo LIFE</h5>
                <p>
                  正式又休閒的<br />
                  都市休閒風穿著性格
                </p>
              </div>
              <div className="tour-store-box-item">
                <img src={TourC703} alt="Tour C703" />
                <h5>E-WEAR</h5>
                <p>平易近人的個性魅力</p>
              </div>
              <div className="tour-store-box-item">
                <img src={TourC704} alt="Tour C704" />
                <h5>KISS KISS 選物店</h5>
                <p>
                  就是要你幸福的<br />
                  首選飾品
                </p>
              </div>
              <div className="tour-store-box-item">
                <img src={TourC705} alt="Tour C705" />
                <h5>yunique Backyard</h5>
                <p>
                  以自然萬物為設計主軸<br />
                  給喜歡精緻工藝的妳
                </p>
              </div>
              <div className="tour-store-box-item">
                <img src={TourC706} alt="Tour C706" />
                <h5>IPANEMA</h5>
                <p>
                  穿上Ipanema<br />
                  找到最輕鬆美好的自己
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
            倉8
          </h3>

          {/*美食佳餚  */}
          <div className="tour-store-enjoy">
            <h4>
              <img src={IconRestaurant} alt="Icon Restaurant" />
              美食佳餚
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
              樂享購物
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
            倉9
          </h3>

          {/*美食佳餚  */}
          <div className="tour-store-enjoy">
            <h4>
              <img src={IconRestaurant} alt="Icon Restaurant" />
              美食佳餚
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
              樂享購物
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
            倉10
          </h3>

          {/*美食佳餚  */}
          <div className="tour-store-enjoy">
            <h4>
              <img src={IconRestaurant} alt="Icon Restaurant" />
              美食佳餚
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
              樂享購物
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
