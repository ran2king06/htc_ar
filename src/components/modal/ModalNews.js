import './css/modal-news.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import React, { useEffect } from 'react';
import Swiper from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import IconArrowLeft from './../../assets/img/icon/icon-arrow-left.png';
import IconArrowRight from './../../assets/img/icon/icon-arrow-right.png';
import IconClose from './../../assets/img/icon/icon-close.png';
import IconNews from './../../assets/img/icon/icon-news.png';
import NewsImage1 from './../../assets/img/news/01.png';

const ModalNews = (props) => {

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
                    <img src={IconNews} alt="News" />最新消息
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
                              高雄港大港橋─全台首座水平旋轉橋
                            </h4>
                            <p>
                              高雄港大港橋座落於鹽埕區大義路底，位在高雄港第三船渠，也是亞洲最長跨港旋轉橋，可在3分鐘內完成水平運轉，由臺灣港務公司獨立設計與建造，進行周邊護岸設施、碼頭鞏固及景觀工程。緊臨高雄輕軌駁二大義站，為亞洲新灣區北端重要水岸拼圖，結合高雄水岸輕軌，串連駁二藝術特區、高港棧庫群，形塑高雄港水岸觀光廊道。 每日下午3點 大港橋開合秀，高雄打卡新景點欣賞夕陽、港濱約會 大港橋每日下午3點進行開合秀，開啟、閉合可在3分鐘內完成水平運轉，開放行人、單車通行，除了維持第三船渠內航道通行，還可縮減民眾進入蓬萊商港區的路程，從輕軌大義站下車，即可經過大港橋直接進入高港棧庫群（蓬萊商港區），將節省至少30分鐘的步行路程，也成了欣賞夕陽、港濱約會的打卡新景點。 Great Harbor Bridge is located in Yancheng District and was officially opened to the public this July. Constructed by Taiwan International Ports Corporation Ltd. Great Harbor Bridge connects Pier-2 Art Center with Peng-lai Harbor Commercial District. It has become the city's most attractive new landmark. Before the bridge was built, pedestrians had to walk a kilometer from Pier-2 Art Center to Peng-lai Harbor Commercial District. However, with the construction of the bridge, it is now only a three-minute (110-meter) walk. Great Harbor Bridge is the first pedestrians only swing bridge in Taiwan. It rotates approximately 90 degrees, to allow boats through and then rotates back for pedestrians. It is rotates once a day at 3 p.m. and 7 p.m. on Fridays, Saturdays and Sundays. It also has an observation deck, which provides panoramic views of the port. It is situated in close proximity to Kaohsiung's Light Rail's Dayi Pier-2 Station, at the heart of Pier-2 on Dayi Street. Since the bridge is designated for pedestrians only, cyclists must walk their bicycles across. 高雄港で今年7月に開通した「大港橋」は、台湾港務公司により建設された、台湾初の旋回橋だ。駁二芸術特区と蓬莱商港区をつなぎ、両エリア間で歩行者の行き来が可能になった。旋回橋は決まった時間に旋回して船を通らせた後、再び元どおりの橋へと戻る。現在、高雄の新たな観光スポットとして注目を浴びている。 　大港橋がつなぐのは、高雄ライトレールの駁二大義駅を中心とした駁二芸術特区と、その対岸にある蓬莱商港区である。駁二芸術特区から蓬莱商港区までの距離は1キロメートル以上あるが、大港橋の長さはたったの110メートル。大港橋の開通によって、徒歩３分で対岸に着けるようになったのだ。 　駁二芸術特区は台湾を代表するカルチャースポットの一つだが、その中心が駁二倉庫群だ。一年中様々な展覧会が行われているほか、アートギャラリーやショップ、飲食店が集まっており、高雄市でも人気のエリアとなっている。
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="swiper-body">
                          <img src={NewsImage1} alt="News 1" className="swiper-body-img" />

                          <div className="swiper-body-text">
                            <h4>
                              振興演唱會經濟！ 加食延暢續攤大港倉、棧貳庫
                            </h4>
                            <p>
                              加食延暢適用店家│棧貳庫KW2、大港倉410 🎤 高雄繼續唱 .ᐟ.ᐟ.ᐟ 2024商圈夜市優惠券啟動 🙌 來高雄聽歌換券享優惠 今年上半年，包含紅髮艾德 Ed Sheeran、Rod Stewart、五月天、7-ELEVEN 高雄櫻花季音樂節及 2024 大港開唱等演唱會蓄勢待發，高雄市政府為了回應歌迷與店家的期待，推出 2024 年的「商圈夜市優惠券」，使用期限至 2024/4/30 ，歡迎歌迷朋友們踴躍領取使用！ ▍鼓勵大眾運輸，高捷車站設攤兌換 2/2-2/4 歌迷朋友只要憑紅髮艾德 Ed Sheeran 演唱會門票，在「左營高鐵、巨蛋、高雄車站、美麗島、三多商圈、鹽埕埔站」6處捷運站就能兌換「加食延暢 2024 商圈夜市優惠券」。 ▍合作商圈夜市及夜生活好店 使用範圍除高雄 44 處商圈、夜市外，還有棧貳庫、大港倉，超過50家居酒屋、餐酒館、小吃、火鍋的特色店家。 ▍無痕換券，掃描驗證保留門票完整 歌迷朋友憑 Ed Sheeran 演唱會門票領取時，票根僅會掃描 QR Code 驗證領取， 不回收 不蓋章 不影響收藏及入場。 後續還有 Rod Stewart、五月天、7-ELEVEN高雄櫻花季音樂節及2024 大港開唱等演唱會等著歌迷來領取，將歌迷導引入商圈、夜市延續消費。
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="swiper-body">
                          <img src={NewsImage1} alt="News 1" className="swiper-body-img" />

                          <div className="swiper-body-text">
                            <h4>
                              高雄港大港橋─全台首座水平旋轉橋
                            </h4>
                            <p>
                              高雄港大港橋座落於鹽埕區大義路底，位在高雄港第三船渠，也是亞洲最長跨港旋轉橋，可在3分鐘內完成水平運轉，由臺灣港務公司獨立設計與建造，進行周邊護岸設施、碼頭鞏固及景觀工程。緊臨高雄輕軌駁二大義站，為亞洲新灣區北端重要水岸拼圖，結合高雄水岸輕軌，串連駁二藝術特區、高港棧庫群，形塑高雄港水岸觀光廊道。 每日下午3點 大港橋開合秀，高雄打卡新景點欣賞夕陽、港濱約會 大港橋每日下午3點進行開合秀，開啟、閉合可在3分鐘內完成水平運轉，開放行人、單車通行，除了維持第三船渠內航道通行，還可縮減民眾進入蓬萊商港區的路程，從輕軌大義站下車，即可經過大港橋直接進入高港棧庫群（蓬萊商港區），將節省至少30分鐘的步行路程，也成了欣賞夕陽、港濱約會的打卡新景點。 Great Harbor Bridge is located in Yancheng District and was officially opened to the public this July. Constructed by Taiwan International Ports Corporation Ltd. Great Harbor Bridge connects Pier-2 Art Center with Peng-lai Harbor Commercial District. It has become the city's most attractive new landmark. Before the bridge was built, pedestrians had to walk a kilometer from Pier-2 Art Center to Peng-lai Harbor Commercial District. However, with the construction of the bridge, it is now only a three-minute (110-meter) walk. Great Harbor Bridge is the first pedestrians only swing bridge in Taiwan. It rotates approximately 90 degrees, to allow boats through and then rotates back for pedestrians. It is rotates once a day at 3 p.m. and 7 p.m. on Fridays, Saturdays and Sundays. It also has an observation deck, which provides panoramic views of the port. It is situated in close proximity to Kaohsiung's Light Rail's Dayi Pier-2 Station, at the heart of Pier-2 on Dayi Street. Since the bridge is designated for pedestrians only, cyclists must walk their bicycles across. 高雄港で今年7月に開通した「大港橋」は、台湾港務公司により建設された、台湾初の旋回橋だ。駁二芸術特区と蓬莱商港区をつなぎ、両エリア間で歩行者の行き来が可能になった。旋回橋は決まった時間に旋回して船を通らせた後、再び元どおりの橋へと戻る。現在、高雄の新たな観光スポットとして注目を浴びている。 　大港橋がつなぐのは、高雄ライトレールの駁二大義駅を中心とした駁二芸術特区と、その対岸にある蓬莱商港区である。駁二芸術特区から蓬莱商港区までの距離は1キロメートル以上あるが、大港橋の長さはたったの110メートル。大港橋の開通によって、徒歩３分で対岸に着けるようになったのだ。 　駁二芸術特区は台湾を代表するカルチャースポットの一つだが、その中心が駁二倉庫群だ。一年中様々な展覧会が行われているほか、アートギャラリーやショップ、飲食店が集まっており、高雄市でも人気のエリアとなっている。
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
