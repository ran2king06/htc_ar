import IconAbout from './../../assets/img/icon/icon-about.png';
import TourD01 from './../../assets/img/tour/d/1.png';
import TourD02 from './../../assets/img/tour/d/2.png';
import TourD03 from './../../assets/img/tour/d/3.png';

const Tour04 = () => {
  return (
    <section className="tour-content">
      <div className="tour-content-about">
        <h2>
          <img src={IconAbout} alt="Icon About" className="tour-content-icon" />
          關於「港史館」
        </h2>
        <img src={TourD01} alt="Tour D01" />
        <h3>
          跨越百年歷史
        </h3>
        <p>
          建於西元1914年，為了配合當時的打狗港第二期築港工程所建造，在日本統治台灣的時代，這裡是當時的高雄港稅辦公處，在西元1943年的時候，改成「高雄港務局」，承辦所有和高雄港相關的行政業務。在西元1997年重新整修成港史館，做為保存、展示高雄港相關資料的場所。
        </p>
        <img src={TourD02} alt="Tour D02" />
        <h3>
          建築特色：不對稱的和諧
        </h3>
        <p>
          港史館是一座巴洛克風格的兩層樓房，因紅磚外觀而被稱為「紅樓」。紅白相間的外牆、圓拱形大門與白色裝飾帶是其顯著特色。整座建築採用不對稱設計，不僅正面外牆兩側不對稱，窗戶樣式也各不相同。四面外牆、館內裝飾，甚至挑高樓板上的鑽孔洞，都各自表現差異。雖然設計看似不工整，但整體和諧而富有美感，展現了其獨特的不規則魅力。
        </p>
        <img src={TourD03} alt="Tour D03" />
        <h3>
          探尋歷史與美景
        </h3>
        <p>
          港史館內展示了許多珍貴的高雄港歷史文物、照片和文史資料，讓您探索高雄港的開發歷程。除了深入了解港灣歷史，也可到附近瀏覽漁人碼頭、觀海台，欣賞高雄港美麗的港埠景色喔！
        </p>

        <div className="tour-openTime">
          <h3>港史館開放時間</h3>
          <div>週一至週四：09:00 ~ 17:00</div>
          <div>週五：10:00 ~ 17:00</div>
          <div>※原則六、日及國定假日休館。</div>
          <div>(例外將視實際情況彈性調整開放時間)</div>
        </div>
      </div>
    </section>
  );
}

export default Tour04;
