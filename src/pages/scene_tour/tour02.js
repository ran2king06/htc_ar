import IconAbout from './../../assets/img/icon/icon-about.png';
import IconStore from './../../assets/img/icon/icon-store.png';
import IconWalker from './../../assets/img/icon/icon-walker.png';
import TourB01 from './../../assets/img/tour/b/1.png';
import TourB02 from './../../assets/img/tour/b/2.png';
import TourB03 from './../../assets/img/tour/b/3.png';
import TourB04 from './../../assets/img/tour/b/4.png';
import TourB05 from './../../assets/img/tour/b/5.png';

const Tour02 = () => {
  return (
    <section className="tour-content">
      <div className="tour-content-about">
        <h2>
          <img src={IconAbout} alt="Icon About" className="tour-content-icon" />
          關於「大港橋」
        </h2>
        <img src={TourB01} alt="Tour B01" />
        <h3>
          全台灣首座水平旋轉景觀橋樑
        </h3>
        <p>
          純白色系的大港橋，長110公尺，橋寬5到11公尺不等，可在3分鐘內完成水平運轉，供550人及自行車同時通行，為台灣首座水平旋轉橋、也是亞洲最長跨港旋轉橋。
        </p>
        <img src={TourB02} alt="Tour B02" />
        <h3>
          橋上觀景平台：眺望港都美景
        </h3>
        <p>
          大港橋身以貝殼及海豚為設計意象，流線外型充滿設計感，橋中心點設有空中觀景平台供人登高賞景，遊客可眺望高雄港城市水岸美景。
        </p>
        <img src={TourB03} alt="Tour B03" />
        <h3>
          融合技術與美感的地標
        </h3>
        <p>
          造型頂棚由高雄造船專業鋼構廠製作的金屬管構成主架，搭配在地遊艇製作廠的曲面成型技術，額外安裝骨架以達到鋼材難以實現的滑順曲線。不僅在外型上讓民眾與海港意象直接聯想，更融合高雄在地特色產業專長。延展80公尺的頂棚遮擋艷陽，迎著海風，船隻來往、港邊建築倒影，展現港都風采，使人們能自在舒適地停留。
        </p>
        <img src={TourB04} alt="Tour B04" />
        <h3>
          串聯新灣區增加觀光便利性
        </h3>
        <p>
          大港橋把整個新灣區的重要公共建設、高港棧庫群、駁二藝術特區串接在一起，形成一個龐大的觀光廊道，是目前最新潮的旅遊路線。白天吹海風、傍晚賞夕陽，晚間橋身燈光點綴，不同時刻都是打卡景色，此外，假日不定時推出的大港橋市集，精彩的美食、表演與文創小物帶來許多觀光人潮。
        </p>
        <div className="tour-openTime">
          <h3>大港橋旋轉開合秀</h3>
          <div>週一至週四：15:00</div>
          <div>週五至周日：15:00 / 19:00 </div>
          <div>(例外將視實際情況彈性調整開合時間)</div>
        </div>
      </div>
      <div className="tour-content-store">
        <h2>
          <img src={IconStore} alt="Icon About" className="tour-content-icon" />
          「大港橋」周邊景點
        </h2>
        <img src={TourB05} alt="Tour A05" />
        {/* INFO DISTANCE */}
        <div className="tour-store-box">
          <h3>大港迴聲</h3>
          <div>
            <img src={IconWalker} alt="Icon Walker" />
            步行1分鐘
          </div>
        </div>
        <p>
          「大港迴聲」音樂銅鐘，重現高雄港香蕉碼頭起重機吊起盛裝香蕉竹簍的歷史意象，由1座搖擺鐘、37顆銅鐘組成港灣熱鬧聲景，現為全台最大音樂銅鐘。 <br /> <br />

          “經典樂聲響徹大港”  <br />
          共收納72首耳熟能詳的樂曲，於每日整點進行演奏及報時。此外，大港橋旋轉前搭配演奏「快樂的出航」經典樂曲，譜出臺灣獨有的海島文化，旋轉時伴隨著搖擺鐘的聲響，讓大港聲景遠播。
        </p>

        <div className="tour-openTime">
          <h3>銅鐘敲擊演奏時間（整點演奏）</h3>
          <div>週一至週四 10:00-20:00</div>
          <div>週五至週日 10:00-21:00</div>
        </div>
      </div>
    </section>
  );
}

export default Tour02;
