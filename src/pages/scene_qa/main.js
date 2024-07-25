import './css/main.scss';

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import BtnBack from './../../assets/img/btn/btn-back.png';
import AnsCorrect from './../../assets/img/common/ans_correct.png';
import AnsWrong from './../../assets/img/common/ans_wrong.png';
import BearCorrect from './../../assets/img/common/bear_correct.png';
import BearWrong from './../../assets/img/common/bear_wrong.png';
import IconQaHeader from './../../assets/img/icon/icon-qa-head.png';
import IconV from './../../assets/img/icon/icon-v.png';
import IconX from './../../assets/img/icon/icon-x.png';
import ResultImg1 from './../../assets/img/result/1.png';
import ResultImg2 from './../../assets/img/result/2.png';
import ResultImg3 from './../../assets/img/result/3.png';
import ResultImg4 from './../../assets/img/result/4.png';
import ResultImg5 from './../../assets/img/result/5.png';
import Footer from './../../components/footer';

const SceneQA = () => {
  const [modeStart, setModeStart] = useState('');
  const [qaQuestion, setQaQuestion] = useState(0);
  const [answer, setAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [anwCorrect, setAnwCorrect] = useState(false);

  useEffect(() => {
    // 取得 param query
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const mode = urlParams.get('mode');
    const quiz = urlParams.get('qa');
    setModeStart('/collection?mode=' + mode);

    console.log(quiz);

    if (quiz) {
      setQaQuestion(parseInt(quiz));
    }

  }, [qaQuestion]);

  const pickAnswer = (answer) => {
    if (showResult) {
      return;
    }
    setAnswer(answer);
  }

  const sendAnswer = () => {
    if (answer === '') {
      alert('請選擇答案');
      return;
    }

    // 送出答案
    setShowResult(true);
    if (qaQuestion === 1 && answer === 1) {
      setAnwCorrect(true);
    }

    if (qaQuestion === 2 && answer === 2) {
      setAnwCorrect(true);
    }

    if (qaQuestion === 3 && answer === 3) {
      setAnwCorrect(true);
    }

    if (qaQuestion === 4 && answer === 2) {
      setAnwCorrect(true);
    }

    if (qaQuestion === 5 && answer === 0) {
      setAnwCorrect(true);
    }

    // 取得 local storage , 更新獎章, 更新獎勵點數
    const userData = localStorage.getItem('htcAr_localStorgeData');
    if (userData) {
      const user = JSON.parse(userData);

      // mission 根據答對的題目更新, 並加獎勵點數 , 1 point
      if (qaQuestion === 1 && answer === 1 && !userData.missionA_2) {
        user.missionA_2 = true;
        user.rewardPoints = user.rewardPoints + 1;
        localStorage.setItem('htcAr_localStorgeData', JSON.stringify(user));
      }

      if (qaQuestion === 2 && answer === 2 && !userData.missionB_2) {
        user.missionB_2 = true;
        user.rewardPoints = user.rewardPoints + 1;
        localStorage.setItem('htcAr_localStorgeData', JSON.stringify(user));
      }

      if (qaQuestion === 3 && answer === 3 && !userData.missionC_2) {
        user.missionC_2 = true;
        user.rewardPoints = user.rewardPoints + 1;
        localStorage.setItem('htcAr_localStorgeData', JSON.stringify(user));
      }

      if (qaQuestion === 4 && answer === 2 && !userData.missionD_2) {
        user.missionD_2 = true;
        user.rewardPoints = user.rewardPoints + 1;
        localStorage.setItem('htcAr_localStorgeData', JSON.stringify(user));
      }

      if (qaQuestion === 5 && answer === 0 && !userData.missionE_2) {
        user.missionE_2 = true;
        user.rewardPoints = user.rewardPoints + 1;
        localStorage.setItem('htcAr_localStorgeData', JSON.stringify(user));
      }
    }
  }


  return (
    <div className="scene-qa">
      <header>
        <Link to={modeStart}>
          <img src={BtnBack} alt="Back" />
        </Link>

        <h1>Q&A問答挑戰</h1>

        <div className="header-right">
          {/* FLEX EMPTY BOX */}
        </div>
      </header>

      {/* 答對或答錯的Bear */}
      <div className="ans-feedback">
        {
          showResult && anwCorrect ? (
            <>
              <img src={AnsCorrect} alt="答對" className="ans-result" />
              <div className="ans-text">恭喜獲得獎章</div>
              <img src={BearCorrect} alt="Bear" className="ans-bear" />
            </>
          )
            : showResult && !anwCorrect ? (
              <>
                <img src={AnsWrong} alt="答錯" className="ans-result" />
                <div className="ans-text">真是可惜，再挑戰一次吧!</div>
                <img src={BearWrong} alt="Bear" className="ans-bear" />
              </>
            )
              : null
        }

      </div>

      <div className={`qa-content ${showResult ? 'margin-dlc' : ''}`}>
        <div className="qa-header">
          <img src={IconQaHeader} alt="Icon Q&A" />
          <h2>
            {
              qaQuestion === 1 ? <>高雄港</>
                :
                qaQuestion === 2 ? <>大港橋</>
                  :
                  qaQuestion === 3 ? <>大港倉</>
                    :
                    qaQuestion === 4 ? <>港史館</>
                      :
                      qaQuestion === 5 ? <>高港水花園</>
                        :
                        null
            }
            {
              showResult ? 'QA解析' : ''
            }
          </h2>
        </div>

        <div className={`qa-container ${showResult ? 'show-result' : ''}`}>
          <div className="qa-content-box">
            <p>
              {
                qaQuestion === 1 ? <>在1925年建成後，高雄港蓬萊商港區主要輸出的商品有哪些？</>
                  :
                  qaQuestion === 2 ? <>大港橋是一座可以水平旋轉的橋樑，純白流線的外型充滿設計感。這座橋的設計靈感來自於什麼呢？</>
                    :
                    qaQuestion === 3 ? <>大港倉410的建築保留了歷史的印記，並在翻新過程中保留了原有結構的一部分，請問保留的結構是什麼呢？</>
                      :
                      qaQuestion === 4 ? <>建於1914年的港史館，具有紅白相間的外牆和不對稱設計，請問其建築風格是什麼？</>
                        :
                        qaQuestion === 5 ? <>高港水花園裡的入口處，有一個美麗的設計叫什麼？</>
                          :
                          null
              }
            </p>
          </div>
          <div className="qa-answer">
            {
              qaQuestion === 1 ? (
                <>
                  <button onClick={() => pickAnswer(0)} className={answer === 0 && qaQuestion === 1 ? 'active' : ''}>
                    A. 茶和棉花
                    <img src={IconX} alt="Icon X" className="icon-result" />
                  </button>
                  <button onClick={() => pickAnswer(1)} className={answer === 1 && qaQuestion === 1 ? 'active correctAnswer' : 'correctAnswer'}>
                    B. 米和糖
                    <img src={IconV} alt="Icon V" className="icon-result" />
                  </button>
                  <button onClick={() => pickAnswer(2)} className={answer === 2 && qaQuestion === 1 ? 'active' : ''}>
                    C. 鐵礦和銅
                    <img src={IconX} alt="Icon X" className="icon-result" />
                  </button>
                  <button onClick={() => pickAnswer(3)} className={answer === 3 && qaQuestion === 1 ? 'active' : ''}>
                    D. 木材和橡膠
                    <img src={IconX} alt="Icon X" className="icon-result" />
                  </button>
                </>
              ) :

                qaQuestion === 2 ? (
                  <>
                    <button onClick={() => pickAnswer(0)} className={answer === 0 && qaQuestion === 2 ? 'active' : ''}>
                      A. 鯨魚和海草
                      <img src={IconX} alt="Icon X" className="icon-result" />
                    </button>
                    <button onClick={() => pickAnswer(1)} className={answer === 1 && qaQuestion === 2 ? 'active' : ''}>
                      B. 海星和珊瑚
                      <img src={IconX} alt="Icon X" className="icon-result" />
                    </button>
                    <button onClick={() => pickAnswer(2)} className={answer === 2 && qaQuestion === 2 ? 'active correctAnswer' : 'correctAnswer'}>
                      C. 貝殼及海豚
                      <img src={IconV} alt="Icon V" className="icon-result" />
                    </button>
                    <button onClick={() => pickAnswer(3)} className={answer === 3 && qaQuestion === 2 ? 'active' : ''}>
                      D. 魚和海帶
                      <img src={IconX} alt="Icon X" className="icon-result" />
                    </button>
                  </>
                ) :

                  qaQuestion === 3 ? (
                    <>
                      <button onClick={() => pickAnswer(0)} className={answer === 0 && qaQuestion === 3 ? 'active' : ''}>
                        A. 舊船隻的外殼
                        <img src={IconX} alt="Icon X" className="icon-result" />
                      </button>
                      <button onClick={() => pickAnswer(1)} className={answer === 1 && qaQuestion === 3 ? 'active' : ''}>
                        B. 舊工廠的煙囪
                        <img src={IconX} alt="Icon X" className="icon-result" />
                      </button>
                      <button onClick={() => pickAnswer(2)} className={answer === 2 && qaQuestion === 3 ? 'active' : ''}>
                        C. 舊燈塔的塔身
                        <img src={IconX} alt="Icon X" className="icon-result" />
                      </button>
                      <button onClick={() => pickAnswer(3)} className={answer === 3 && qaQuestion === 3 ? 'active correctAnswer' : ' correctAnswer'}>
                        D. 舊倉庫的樑柱結構
                        <img src={IconV} alt="Icon V" className="icon-result" />
                      </button>
                    </>
                  ) :

                    qaQuestion === 4 ? (
                      <>
                        <button onClick={() => pickAnswer(0)} className={answer === 0 && qaQuestion === 4 ? 'active' : ''}>
                          A. 哥德式
                          <img src={IconX} alt="Icon X" className="icon-result" />
                        </button>
                        <button onClick={() => pickAnswer(1)} className={answer === 1 && qaQuestion === 4 ? 'active' : ''}>
                          B. 文藝復興風格
                          <img src={IconX} alt="Icon X" className="icon-result" />
                        </button>
                        <button onClick={() => pickAnswer(2)} className={answer === 2 && qaQuestion === 4 ? 'active correctAnswer' : ' correctAnswer'}>
                          C. 巴洛克風格
                          <img src={IconV} alt="Icon V" className="icon-result" />
                        </button>
                        <button onClick={() => pickAnswer(3)} className={answer === 3 && qaQuestion === 4 ? 'active' : ''}>
                          D. 新古典風格
                          <img src={IconX} alt="Icon X" className="icon-result" />
                        </button>
                      </>
                    ) :

                      qaQuestion === 5 ? (
                        <>
                          <button onClick={() => pickAnswer(0)} className={answer === 0 && qaQuestion === 5 ? 'active correctAnswer' : 'correctAnswer'}>
                            A. 日光樹樹洞
                            <img src={IconV} alt="Icon V" className="icon-result" />
                          </button>
                          <button onClick={() => pickAnswer(1)} className={answer === 1 && qaQuestion === 5 ? 'active' : ''}>
                            B. 仙女噴泉
                            <img src={IconX} alt="Icon X" className="icon-result" />
                          </button>
                          <button onClick={() => pickAnswer(2)} className={answer === 2 && qaQuestion === 5 ? 'active' : ''}>
                            C. 夢幻拱門
                            <img src={IconX} alt="Icon X" className="icon-result" />
                          </button>
                          <button onClick={() => pickAnswer(3)} className={answer === 3 && qaQuestion === 5 ? 'active' : ''}>
                            D. 彩虹橋
                            <img src={IconX} alt="Icon X" className="icon-result" />
                          </button>
                        </>
                      ) : null
            }
          </div>

          <button className="qa-done" onClick={() => sendAnswer()}>
            完成作答
          </button>

          {/* 作答完后跳出 QA 提示 */}
          {
            showResult ?
              <div className="qa-hint">
                {
                  qaQuestion === 1 ?
                    <>
                      <p>
                        高雄港蓬萊商港區是日治時期打狗港計劃的一部分，僅次於西側的新濱町碼頭。這裡原本是鹽田，經過日本人的港道疏浚和填海造陸，逐漸建成商港碼頭區和鹽埕區。1917年，蓬萊商港區的建設完成超過一半，到1925年基本完工。這個港區的運作推動了高雄市的都市發展，成為南部重要的港口，主要輸出米和糖。經歷戰爭破壞和戰後復甦後，1960年代的高雄港超越基隆港，成為台灣最大的港口。
                      </p>
                      <img src={ResultImg1} alt="Result" />
                    </>
                    : qaQuestion === 2 ?
                      <>
                        <p>
                          全台灣首座水平旋轉景觀橋樑 純白色系的大港橋，長110公尺，橋寬5到11公尺不等，可在3分鐘內完成水平運轉，供550人及自行車同時通行，為台灣首座水平旋轉橋、也是亞洲最長跨港旋轉橋。大港橋身以貝殼及海豚為設計意象，流線外型充滿設計感，橋中心點設有空中觀景平台供人登高賞景，遊客可眺望高雄港城市水岸美景。
                        </p>
                        <img src={ResultImg2} alt="Result" />
                      </>
                      : qaQuestion === 3 ?
                        <>
                          <p>
                            一茶一樹一咖啡一酒一鞄一食肆 「大港倉410」緊鄰高雄港、大港橋、棧貳庫、駁二藝術特區、高雄流行音樂中心。昔日為「裏船溜」的第三船渠所在地，含括KD7至KD10這4座倉庫，藉由翻新老高港的歷史面貌，建築保留舊倉庫的樑柱結構，並將磚牆改建為通透的玻璃、金屬構成風格櫥窗。昔日儲貨舊倉庫群轉身為職人食肆、大港潮文創禮店、裏船溜花園，港灣魅力景緻結合蓬萊港區舊有碼頭場域特色，遊逛水岸饒富況味風情。
                          </p>
                          <img src={ResultImg3} alt="Result" />
                        </>
                        : qaQuestion === 4 ?
                          <>
                            <p>
                              建築特色：不對稱的和諧 港史館是一座巴洛克風格的兩層樓房，因紅磚外觀而被稱為「紅樓」。紅白相間的外牆、圓拱形大門與白色裝飾帶是其顯著特色。整座建築採用不對稱設計，不僅正面外牆兩側不對稱，窗戶樣式也各不相同。四面外牆、館內裝飾，甚至挑高樓板上的鑽孔洞，都各自表現差異。雖然設計看似不工整，但整體和諧而富有美感，展現了其獨特的不規則魅力。
                            </p>
                            <img src={ResultImg4} alt="Result" />
                          </>
                          : qaQuestion === 5 ?
                            <>
                              <p>
                                位在高雄港3號至5號碼頭後面的高港水花園，以海洋花園城市作為發想，佔地4,300坪，栽種超過5萬株的造景植栽，並結合港區的防空洞與既有的植物，打造一座隱藏於港灣的小型森林秘境。 從入口處的日光樹樹洞進入，彷彿踏入熱帶島嶼的城市森林，高港花園內有以高雄柴山為意象的森林流瀑、迷霧氛圍的忘憂潭、忘憂橋以及樹拱門，還有探索小徑、愛心石滬、幸運草風車等主題景區。
                              </p>
                              <img src={ResultImg5} alt="Result" />
                            </>
                            : null
                }
              </div>
              : null
          }

        </div>
      </div>

      <Footer />
    </div>
  );
}

export default SceneQA;
