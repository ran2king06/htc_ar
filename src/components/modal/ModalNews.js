import './css/modal-news.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Swiper from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import IconArrowLeft from './../../assets/img/icon/icon-arrow-left.png';
import IconArrowRight from './../../assets/img/icon/icon-arrow-right.png';
import IconClose from './../../assets/img/icon/icon-close.png';
import IconNews from './../../assets/img/icon/icon-news.png';
import NewsImage1 from './../../assets/img/news/01.jpg';
import NewsImage2 from './../../assets/img/news/02.jpg';
import NewsImage3 from './../../assets/img/news/03.png';



const ModalNews = (props) => {
  const { t } = useTranslation();

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const swiper = new Swiper('.swiper-container', {
      modules: [Navigation, Pagination, Autoplay],
      loop: true,
      autoplay: {
        delay: 5000,
      },
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });


    // If swiper-body-text scrolling, stop swiper autoplay
    const swiperBodyText = document.querySelectorAll('.swiper-body-text');
    swiperBodyText.forEach((element) => {
      element.addEventListener('mouseenter', () => {
        swiper.autoplay.stop();
      });
      element.addEventListener('mouseleave', () => {
        swiper.autoplay.start();
      });

      element.addEventListener('touchstart', () => {
        swiper.autoplay.stop();
      });
      element.addEventListener('touchend', () => {
        swiper.autoplay.start();
      });
    });


  }, [props.modalIsOpen]);

  return (
    <>
      {
        props.modalIsOpen ? (
          // Modal Mask
          <div className="modal-mask modal-news-custom">
            <div className="modal-intro">
              <span className="close" onClick={props.closeModal}>
                <img src={IconClose} alt="Close" />
              </span>
              <div className="modal-content">
                <div className="modal-header">
                  <h2>
                    <img src={IconNews} alt="News" />{t('modal-news.title')}
                  </h2>
                </div>

                <div className="modal-body">
                  <div className="swiper-container">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="swiper-body">
                          <img src={NewsImage1} alt="News 1" className="swiper-body-img" />
                          <div className="swiper-body-text">
                            <h4>
                              2024高雄海洋派對│大港倉/大港橋
                            </h4>
                            <p>
                              2024高雄海洋派對將在8/17(六)-8/25於大港橋及愛河灣周邊水域辦理，為期長達9天的活動🥳嗨翻暑假🥳玩好玩滿，7大精彩活動報你知👇🏻  <br />
                              2024海洋派對在高雄 大港橋造筏揚帆X最Chill水花樂園<br />
                              ➊高雄水花樂園-全新訂製大型遊具首次亮相，高達14公尺高滑道最消暑 <br />
                              ➋水上飛板秀-法國團隊首次來台，專屬高雄的客製化震撼演出🏂 <br />
                              ➌海派遊艇展-最沒有距離的「賞船」體驗，近距離觀賞各式遊艇和動力小船，還有海洋Cosplay服裝可免費借用拍照喔🛥️ <br />
                              ➍遊艇搭乘體驗-七夕過後的約會，海旅漫遊不要錯過⛵️ <br />
                              ➎大港造筏競賽-探索自然、挑戰自我、發揮創意和團隊合作的機會來了👫 <br />
                              ➏水域遊憩活動-SUP、水上腳踏車、獨木舟等免費活動，海玩一夏🏄🏻‍♀️ <br />
                              ➐水域趣味競賽-「是的！船長船員接力賽」，挑戰你的友情默契度及平衡感🙌🏻 更多活動消息及報名資訊陸續釋出中❤️請持續鎖定 高雄海味地圖-高雄市政府海洋局
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="swiper-body">
                          <img src={NewsImage2} alt="News 1" className="swiper-body-img" />

                          <div className="swiper-body-text">
                            <h4>
                              高雄升格百年「百年好市」<br />
                              推遊程講座交流活動
                            </h4>
                            <p>
                              雄躍南方，百年好市<br />
                              因港而生，順鐵路而起，循工業而發的城市 1924年高雄設市升格 高雄百年蛻變與榮耀 1924年12月25日「高雄街」升格為「高雄市」，今(2024)年是這座南部港口城市百年的里程碑。<br />
                              高雄市政府將啟動為期近半年的「百年好市」計畫，策畫一連串遊程遶境、講座、論壇、展示、國際交流等活動，首波活動將於8月登場。<br />
                              此次活動主視覺以象徵高雄百年發展的「海空雙港」為意象，傳達海空聯運造就了高雄城市發展的歷史底蘊。<br />
                              高雄市長陳其邁表示，繼1920年「打狗」更名「高雄」後，1924年市制升格，高雄市始成為地方政府團體、具公共財源，這項體質改變，擘劃了這個鄰海小鎮的發展藍圖。<br />
                              同一年，武德殿啟用、「高雄女中」成立、壽山紀念公園與鼓山魚市場開始籌建，政經中心哈瑪星日漸完善。<br />
                              而後幾年間，開通壽山洞(西子灣隧道)，改善海水浴場，並設置運動娛樂設施如棒球場、游泳池等。<br />
                              西子灣成為高雄市民休閒、外地遊客觀光的新天地；城市中心、運動娛樂和公園休閒等空間規劃，全數到位。<br />
                              從那時起，高雄因先進產業移植展開狂飆發展的百年。<br />
                              日治時期有製糖、製磚、水泥、重化工業、煉油工業；在此基礎上，戰後順勢發展塑化、石化、代工業、重工業，乃至近十多年在大家共同努力下漸成高科技、文創觀光之城。<br />
                              高雄是座因港而生，順鐵路而起，循著產業蛻變而成的工業重鎮。歷經數次行政轄區變遷，人口從4萬多到現今的273萬，2024年回望百年，<br />
                              作為移民城市的高雄，仍持續匯聚來自全臺各地的人一起打拚、一起生活，成為如今大家所認知的「高雄」模樣。<br />
                              高雄市政府文化局長王文翠表示，此次「百年好市」以數字100，和翻轉90度的”高“字幾何結合，作為高雄設市百年的紀念LOGO；帶著透視，如膠卷般看似正在出格的100，也象徵前進和延續。主視覺用船、飛機，去呈現這個山海圍繞，藉由海港與空港交織，帶來歷史、繁華和人文的港都工業城。故此次活動策畫將圍繞著「百年高雄的成長與發展」，以「工業」、「鐵道」、「海洋」、「歷史」四個面向，用遊程探索大家所不知道的高雄、用講座論壇深度討論這座城市的發展、用展覽娓娓訴說高雄故事、更有百年好市特別企劃，期待大家在2024年整個下半年，一起來加入了解這座光榮城市的行列中。                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="swiper-body">
                          <img src={NewsImage3} alt="News 1" className="swiper-body-img" />

                          <div className="swiper-body-text">
                            <h4>
                              振興演唱會經濟！ <br />
                              加食延暢續攤大港倉、棧貳庫
                            </h4>
                            <p>
                              加食延暢適用店家│棧貳庫KW2、大港倉410 <br />
                              🎤 高雄繼續唱 .ᐟ.ᐟ.ᐟ 2024商圈夜市優惠券啟動 <br />
                              🙌 來高雄聽歌換券享優惠 今年上半年，包含紅髮艾德 Ed Sheeran、Rod Stewart、五月天、7-ELEVEN 高雄櫻花季音樂節及 2024 大港開唱等演唱會蓄勢待發，高雄市政府為了回應歌迷與店家的期待，推出 2024 年的「商圈夜市優惠券」，使用期限至 2024/4/30 ，歡迎歌迷朋友們踴躍領取使用！<br />
                              ▍鼓勵大眾運輸，高捷車站設攤兌換 2/2-2/4 歌迷朋友只要憑紅髮艾德 Ed Sheeran 演唱會門票，在「左營高鐵、巨蛋、高雄車站、美麗島、三多商圈、鹽埕埔站」6處捷運站就能兌換「加食延暢 2024 商圈夜市優惠券」。 <br />
                              ▍合作商圈夜市及夜生活好店 使用範圍除高雄 44 處商圈、夜市外，還有棧貳庫、大港倉，超過50家居酒屋、餐酒館、小吃、火鍋的特色店家。 <br />
                              ▍無痕換券，掃描驗證保留門票完整 歌迷朋友憑 Ed Sheeran 演唱會門票領取時，票根僅會掃描 QR Code 驗證領取， 不回收 不蓋章 不影響收藏及入場。 後續還有 Rod Stewart、五月天、7-ELEVEN高雄櫻花季音樂節及2024 大港開唱等演唱會等著歌迷來領取，將歌迷導引入商圈、夜市延續消費。
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="swiper-button-wrapper">
                  <div className="swiper-button-prev">
                    <img src={IconArrowLeft} alt="Arrow Left" />
                  </div>
                  <div className="swiper-pagination"></div>
                  <div className="swiper-button-next">
                    <img src={IconArrowRight} alt="Arrow Right" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null
      }
    </>
  );
}

export default ModalNews;
