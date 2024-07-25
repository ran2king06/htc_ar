import IconAbout from './../../assets/img/icon/icon-about.png';
import IconStore from './../../assets/img/icon/icon-store.png';
import IconWalker from './../../assets/img/icon/icon-walker.png';
import TourA01 from './../../assets/img/tour/a/1.png';
import TourA02 from './../../assets/img/tour/a/2.png';
import TourA03 from './../../assets/img/tour/a/3.png';
import TourA04 from './../../assets/img/tour/a/4.png';
import TourA05 from './../../assets/img/tour/a/5.png';

const Tour01 = () => {
  return (
    <section className="tour-content">
      <div className="tour-content-about">
        <h2>
          <img src={IconAbout} alt="Icon About" className="tour-content-icon" />
          關於「高雄港」
        </h2>
        <img src={TourA01} alt="Tour A01" />
        <h3>
          台灣最大的國際港口
        </h3>
        <p>
          位於高雄市南端、橫跨六個行政區的高雄港，是臺灣第一大港口，也是世界第十三大港口。擁有116座營運碼頭，成為臺灣的海運樞紐和貨運進出口門戶，貨物吞吐量佔臺灣整體的六成以上，是高雄市的經濟命脈與象徵。巨型貨輪、軍艦、漁船在碧海藍天中穿梭，貨櫃場物流繁忙，與南部人熱情開朗的笑臉，交織成港都最美的風情。
        </p>
        <img src={TourA02} alt="Tour A02" />
        <h3>
          1-10 號碼頭的歷史軌跡
        </h3>
        <p>
          高雄港蓬萊商港區是日治時期打狗港計劃的一部分，僅次於西側的新濱町碼頭。這裡原本是鹽田，經過日本人的港道疏浚和填海造陸，逐漸建成商港碼頭區和鹽埕區。1917年，蓬萊商港區的建設完成超過一半，到1925年基本完工。這個港區的運作推動了高雄市的都市發展，成為南部重要的港口，主要輸出米和糖。經歷戰爭破壞和戰後復甦後，1960年代的高雄港超越基隆港，成為台灣最大的港口。
        </p>
        <img src={TourA03} alt="Tour A03" />
        <h3>
          蓬萊商港的新篇章
        </h3>
        <p>
          1949年起高雄港因港埠安全需要進行管制，讓蓬萊商港歷經70年「港」與「市」的隔離。而高港近年努力擴建高雄港港埠設施，得以讓蓬萊商港區於2018年12月卸下管制區之身份，讓市民親臨高雄港舊港區1-10號碼頭，自由遊逛體驗棧庫群港口地景風采。
        </p>
      </div>
      <div className="tour-content-store">
        <h2>
          <img src={IconStore} alt="Icon About" className="tour-content-icon" />
          「高雄港」周邊景點
        </h2>
        <img src={TourA04} alt="Tour A04" />
        {/* INFO DISTANCE */}
        <div className="tour-store-box">
          <h3>棧柒庫 KW7</h3>
          <div>
            <img src={IconWalker} alt="Icon Walker" />
            步行1分鐘
          </div>
        </div>
        <p>
          <span className="span-blue special-display-block">“最多遊戲類型的 VR 虛擬實境樂園”</span> XR 數位百老匯劇院(VIVELAND)，體驗全球首創的可移動式 5G XR 劇場，延伸自熱門的永恆聖母院和巴黎舞會 VR 體驗，使用 VIVE Focus 3 一體機和實景娛樂技術，提供多人同步的沉浸式互動體驗。遊客可在棧柒庫園區內盡情探索虛擬現實中的精彩內容。透過 5G 高傳輸速率及低延遲，享受流暢的視角轉換和高品質影像，無論是遊戲、劇場還是數位展演，都能在這裡找到最新鮮的數位內容體驗！
        </p>

        <img src={TourA05} alt="Tour A05" />
        {/* INFO DISTANCE */}
        <div className="tour-store-box">
          <h3>退役渡輪─壽山輪</h3>
          <div>
            <img src={IconWalker} alt="Icon Walker" />
            步行1分鐘
          </div>
        </div>
        <p>
          高雄港最資深的鋼鐵英雄─壽山輪 1996年交船的壽山輪，是高雄港區內首艘雙層渡輪，服役數十年後，在2019年正式光榮退役。早期在過港隧道受管制的年代，往來於「前鎮─中洲」航線，肩負運送民生物資、瓦斯及化學原料的任務，並開創高雄港內鐵殼渡輪艦隊，成為旗鼓航線渡輪的參考原型。如今退役後面臨拆解命運，幸得棧貳庫的堅持，將此情感轉化為記憶載點，延續高雄市民的回憶，並期許再創新的記憶點。
        </p>
      </div>
    </section>
  );
}

export default Tour01;
