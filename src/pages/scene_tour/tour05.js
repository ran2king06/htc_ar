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
  return (
    <section className="tour-content">
      <div className="tour-content-about">
        <h2>
          <img src={IconAbout} alt="Icon About" className="tour-content-icon" />
          關於「高港水花園」
        </h2>
        <img src={TourE01} alt="Tour E01" />
        <h3>
          跨越百年歷史
        </h3>
        <p>
          建於西元1914年，為了配合當時的打狗港第二期築港工程所建造，在日本統治台灣的時代，這裡是當時的高雄港稅辦公處，在西元1943年的時候，改成「高雄港務局」，承辦所有和高雄港相關的行政業務。在西元1997年重新整修成港史館，做為保存、展示高雄港相關資料的場所。
        </p>

        <div className="custom-tour-images">
          <div>
            <img src={TourE02} alt="Tour E02" className="custom-img" />
            <span>
              <img src={IconCaption} alt="Caption" />
              日光樹樹洞
            </span>
          </div>
          <div>
            <img src={TourE03} alt="Tour E03" className="custom-img" />
            <span>
              <img src={IconCaption} alt="Caption" />
              日光樹樹洞
            </span>
          </div>
        </div>
        <h3>
          城市森林與自然景觀
        </h3>
        <p>
          從入口處的日光樹樹洞進入，彷彿踏入熱帶島嶼的城市森林，高港花園內有以高雄柴山為意象的森林流瀑、迷霧氛圍的忘憂潭、忘憂橋以及樹拱門，還有探索小徑、愛心石滬、幸運草風車等主題景區。
        </p>

        <img src={TourE04} alt="Tour E04" />
        <h3>
          熱帶南洋風景觀亭
        </h3>
        <p>
          來到景觀原木亭，可見陽光沙灘、倒影椰林組成一幅充滿南島假期的風景，細緻的金色沙灘成為小孩玩沙的聖地、親子共享時光的熱門地點。
        </p>

        <img src={TourE05} alt="Tour E05" />
        <h3>
          在瞭望台上一覽高雄港的景色
        </h3>
        <p>
          若是站在防空洞頂端的瞭望台上，能將港區周邊的美景盡收眼底，幸運的話，可以看到郵輪或大船入港，再搭配遠方碧海藍天的港灣景致，讓前來拜訪的旅人感受不一樣的港都風光。
        </p>
      </div>

      <div className="tour-content-store">
        <h2>
          <img src={IconStore} alt="Icon About" className="tour-content-icon" />
          「高港水花園」周邊景點
        </h2>
        <img src={TourE06} alt="Tour E06" />
        {/* INFO DISTANCE */}
        <div className="tour-store-box">
          <h3>棧貳庫KW2</h3>
          <div>
            <img src={IconWalker} alt="Icon Walker" />
            步行5分鐘
          </div>
        </div>
        <p>
          匯集全台職人、臺灣代表品牌，在這個新舊並陳的歷史場域裡，共同創作與圓夢，打造高雄港區親水購物、休憩新體驗。
        </p>
      </div>
    </section>
  );
}

export default Tour05;
