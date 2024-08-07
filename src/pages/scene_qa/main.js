import './css/main.scss';

import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import BtnBack from './../../assets/img/btn/btn-back.png';
import AnsCorrect from './../../assets/img/common/ans_correct.png';
import AnsWrong from './../../assets/img/common/ans_wrong.png';
import BearCorrect from './../../assets/img/common/bear_correct.png';
import BearWrong from './../../assets/img/common/bear_wrong.png';
import EnAnsCorrect from './../../assets/img/common/en/ans_correct.png';
import EnAnsWrong from './../../assets/img/common/en/ans_wrong.png';
import EnIconQaHeader1 from './../../assets/img/icon/en/qa1.png';
import EnIconQaHeader2 from './../../assets/img/icon/en/qa2.png';
import EnIconQaHeader3 from './../../assets/img/icon/en/qa3.png';
import EnIconQaHeader4 from './../../assets/img/icon/en/qa4.png';
import EnIconQaHeader5 from './../../assets/img/icon/en/qa5.png';
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
  const { t, i18n } = useTranslation();

  const [modeStart, setModeStart] = useState('');
  const [qaQuestion, setQaQuestion] = useState(0);
  const [answer, setAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [anwCorrect, setAnwCorrect] = useState(false);
  const [language, setLanguage] = useState('');

  useEffect(() => {
    // 取得 local storage 語系
    const currentLanguage = localStorage.getItem('i18nextLng_htc_ar');
    if (currentLanguage) {
      i18n.changeLanguage(currentLanguage);
      setLanguage(currentLanguage);
    }
  }, [language]);

  useEffect(() => {
    // 取得 param query
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const mode = urlParams.get('mode');
    const quiz = urlParams.get('qa');
    setModeStart('/collection?mode=' + mode);

    // console.log(quiz);

    // 取得 local storage , 是否已經作答過
    const userData = localStorage.getItem('htcAr_localStorgeData');
    if (userData) {
      const user = JSON.parse(userData);

      if (
        (quiz === '1' && user.missionA_2) ||
        (quiz === '2' && user.missionB_2) ||
        (quiz === '3' && user.missionC_2) ||
        (quiz === '4' && user.missionD_2) ||
        (quiz === '5' && user.missionE_2)
      ) {
        setShowResult(true);
        setAnwCorrect(true);
      }
    }

    if (quiz) {
      setQaQuestion(parseInt(quiz));
    }

  }, [qaQuestion, showResult, anwCorrect]);

  const pickAnswer = (answer) => {
    if (showResult) {
      return;
    }
    setAnswer(answer);
  }

  const sendAnswer = () => {
    if (answer === '') {
      alert(t('scene-qa.alert'));
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
        user.getNewScoreA_2 = true;
        localStorage.setItem('htcAr_localStorgeData', JSON.stringify(user));
      }

      if (qaQuestion === 2 && answer === 2 && !userData.missionB_2) {
        user.missionB_2 = true;
        user.rewardPoints = user.rewardPoints + 1;
        user.getNewScoreB_2 = true;
        localStorage.setItem('htcAr_localStorgeData', JSON.stringify(user));
      }

      if (qaQuestion === 3 && answer === 3 && !userData.missionC_2) {
        user.missionC_2 = true;
        user.rewardPoints = user.rewardPoints + 1;
        user.getNewScoreC_2 = true;
        localStorage.setItem('htcAr_localStorgeData', JSON.stringify(user));
      }

      if (qaQuestion === 4 && answer === 2 && !userData.missionD_2) {
        user.missionD_2 = true;
        user.rewardPoints = user.rewardPoints + 1;
        user.getNewScoreD_2 = true;
        localStorage.setItem('htcAr_localStorgeData', JSON.stringify(user));
      }

      if (qaQuestion === 5 && answer === 0 && !userData.missionE_2) {
        user.missionE_2 = true;
        user.rewardPoints = user.rewardPoints + 1;
        user.getNewScoreE_2 = true;
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

        <h1>
          {t('scene-qa.title')}
        </h1>

        <div className="header-right">
          {/* FLEX EMPTY BOX */}
        </div>
      </header>

      {/* 答對或答錯的Bear */}
      <div className="ans-feedback">
        {
          showResult && anwCorrect ? (
            <>
              {
                language === 'en' ? <img src={EnAnsCorrect} alt="答對" className="ans-result" /> : <img src={AnsCorrect} alt="答對" className="ans-result" />
              }
              <div className="ans-text">{t('scene-qa.correct')}</div>
              <img src={BearCorrect} alt="Bear" className="ans-bear" />
            </>
          )
            : showResult && !anwCorrect ? (
              <>
                {
                  language === 'en' ? <img src={EnAnsWrong} alt="答錯" className="ans-result" /> : <img src={AnsWrong} alt="答錯" className="ans-result" />
                }
                <div className="ans-text">{t('scene-qa.wrong')}</div>
                <img src={BearWrong} alt="Bear" className="ans-bear" />
              </>
            )
              : null
        }

      </div>

      <div className={`qa-content ${showResult ? 'margin-dlc' : ''}`}>
        <div className={`qa-header ${language === 'en' ? 'en' : ''}`}>
          {
            language === 'en' && !showResult ?
              <>
                {
                  qaQuestion === 1 ? <img src={EnIconQaHeader1} alt="Icon Q&A" />
                    :
                    qaQuestion === 2 ? <img src={EnIconQaHeader2} alt="Icon Q&A" />
                      :
                      qaQuestion === 3 ? <img src={EnIconQaHeader3} alt="Icon Q&A" />
                        :
                        qaQuestion === 4 ? <img src={EnIconQaHeader4} alt="Icon Q&A" />
                          :
                          qaQuestion === 5 ? <img src={EnIconQaHeader5} alt="Icon Q&A" />
                            :
                            null
                }
              </>
              :
              <>
                <img src={IconQaHeader} alt="Icon Q&A" />
                <h2>
                  {
                    showResult === false ?
                      <>
                        {
                          qaQuestion === 1 ? <>{t('scene-qa.qa_place1')}</>
                            :
                            qaQuestion === 2 ? <>{t('scene-qa.qa_place2')}</>
                              :
                              qaQuestion === 3 ? <>{t('scene-qa.qa_place3')}</>
                                :
                                qaQuestion === 4 ? <>{t('scene-qa.qa_place4')}</>
                                  :
                                  qaQuestion === 5 ? <>{t('scene-qa.qa_place5')}</>
                                    :
                                    null
                        }
                      </> : <>{t('scene-qa.showResult')}</>
                  }
                </h2>
              </>
          }

        </div>

        <div className={`qa-container ${showResult ? 'show-result' : ''}`}>
          <div className="qa-content-box">
            <p>
              {
                qaQuestion === 1 ? <>{t('scene-qa.qa1.question')}</>
                  :
                  qaQuestion === 2 ? <>{t('scene-qa.qa2.question')}</>
                    :
                    qaQuestion === 3 ? <>{t('scene-qa.qa3.question')}</>
                      :
                      qaQuestion === 4 ? <>{t('scene-qa.qa4.question')}</>
                        :
                        qaQuestion === 5 ? <>{t('scene-qa.qa5.question')}</>
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
                    A. {t('scene-qa.qa1.options.0')}
                    <img src={IconX} alt="Icon X" className="icon-result" />
                  </button>
                  <button onClick={() => pickAnswer(1)} className={answer === 1 && qaQuestion === 1 ? 'active correctAnswer' : 'correctAnswer'}>
                    B. {t('scene-qa.qa1.options.1')}
                    <img src={IconV} alt="Icon V" className="icon-result" />
                  </button>
                  <button onClick={() => pickAnswer(2)} className={answer === 2 && qaQuestion === 1 ? 'active' : ''}>
                    C. {t('scene-qa.qa1.options.2')}
                    <img src={IconX} alt="Icon X" className="icon-result" />
                  </button>
                  <button onClick={() => pickAnswer(3)} className={answer === 3 && qaQuestion === 1 ? 'active' : ''}>
                    D. {t('scene-qa.qa1.options.3')}
                    <img src={IconX} alt="Icon X" className="icon-result" />
                  </button>
                </>
              ) :

                qaQuestion === 2 ? (
                  <>
                    <button onClick={() => pickAnswer(0)} className={answer === 0 && qaQuestion === 2 ? 'active' : ''}>
                      A. {t('scene-qa.qa2.options.0')}
                      <img src={IconX} alt="Icon X" className="icon-result" />
                    </button>
                    <button onClick={() => pickAnswer(1)} className={answer === 1 && qaQuestion === 2 ? 'active' : ''}>
                      B. {t('scene-qa.qa2.options.1')}
                      <img src={IconX} alt="Icon X" className="icon-result" />
                    </button>
                    <button onClick={() => pickAnswer(2)} className={answer === 2 && qaQuestion === 2 ? 'active correctAnswer' : 'correctAnswer'}>
                      C. {t('scene-qa.qa2.options.2')}
                      <img src={IconV} alt="Icon V" className="icon-result" />
                    </button>
                    <button onClick={() => pickAnswer(3)} className={answer === 3 && qaQuestion === 2 ? 'active' : ''}>
                      D. {t('scene-qa.qa2.options.3')}
                      <img src={IconX} alt="Icon X" className="icon-result" />
                    </button>
                  </>
                ) :

                  qaQuestion === 3 ? (
                    <>
                      <button onClick={() => pickAnswer(0)} className={answer === 0 && qaQuestion === 3 ? 'active' : ''}>
                        A. {t('scene-qa.qa3.options.0')}
                        <img src={IconX} alt="Icon X" className="icon-result" />
                      </button>
                      <button onClick={() => pickAnswer(1)} className={answer === 1 && qaQuestion === 3 ? 'active' : ''}>
                        B. {t('scene-qa.qa3.options.1')}
                        <img src={IconX} alt="Icon X" className="icon-result" />
                      </button>
                      <button onClick={() => pickAnswer(2)} className={answer === 2 && qaQuestion === 3 ? 'active' : ''}>
                        C. {t('scene-qa.qa3.options.2')}
                        <img src={IconX} alt="Icon X" className="icon-result" />
                      </button>
                      <button onClick={() => pickAnswer(3)} className={answer === 3 && qaQuestion === 3 ? 'active correctAnswer' : ' correctAnswer'}>
                        D. {t('scene-qa.qa3.options.3')}
                        <img src={IconV} alt="Icon V" className="icon-result" />
                      </button>
                    </>
                  ) :

                    qaQuestion === 4 ? (
                      <>
                        <button onClick={() => pickAnswer(0)} className={answer === 0 && qaQuestion === 4 ? 'active' : ''}>
                          A. {t('scene-qa.qa4.options.0')}
                          <img src={IconX} alt="Icon X" className="icon-result" />
                        </button>
                        <button onClick={() => pickAnswer(1)} className={answer === 1 && qaQuestion === 4 ? 'active' : ''}>
                          B. {t('scene-qa.qa4.options.1')}
                          <img src={IconX} alt="Icon X" className="icon-result" />
                        </button>
                        <button onClick={() => pickAnswer(2)} className={answer === 2 && qaQuestion === 4 ? 'active correctAnswer' : ' correctAnswer'}>
                          C. {t('scene-qa.qa4.options.2')}
                          <img src={IconV} alt="Icon V" className="icon-result" />
                        </button>
                        <button onClick={() => pickAnswer(3)} className={answer === 3 && qaQuestion === 4 ? 'active' : ''}>
                          D. {t('scene-qa.qa4.options.3')}
                          <img src={IconX} alt="Icon X" className="icon-result" />
                        </button>
                      </>
                    ) :

                      qaQuestion === 5 ? (
                        <>
                          <button onClick={() => pickAnswer(0)} className={answer === 0 && qaQuestion === 5 ? 'active correctAnswer' : 'correctAnswer'}>
                            A. {t('scene-qa.qa5.options.0')}
                            <img src={IconV} alt="Icon V" className="icon-result" />
                          </button>
                          <button onClick={() => pickAnswer(1)} className={answer === 1 && qaQuestion === 5 ? 'active' : ''}>
                            B. {t('scene-qa.qa5.options.1')}
                            <img src={IconX} alt="Icon X" className="icon-result" />
                          </button>
                          <button onClick={() => pickAnswer(2)} className={answer === 2 && qaQuestion === 5 ? 'active' : ''}>
                            C. {t('scene-qa.qa5.options.2')}
                            <img src={IconX} alt="Icon X" className="icon-result" />
                          </button>
                          <button onClick={() => pickAnswer(3)} className={answer === 3 && qaQuestion === 5 ? 'active' : ''}>
                            D. {t('scene-qa.qa5.options.3')}
                            <img src={IconX} alt="Icon X" className="icon-result" />
                          </button>
                        </>
                      ) : null
            }
          </div>

          <button className="qa-done" onClick={() => sendAnswer()}>
            {t('scene-qa.done')}
          </button>

          {/* 作答完后跳出 QA 提示 */}
          {
            showResult ?
              <div className="qa-hint">
                {
                  qaQuestion === 1 ?
                    <>
                      <p>
                        {t('scene-qa.qa1.answer')}
                      </p>
                      <img src={ResultImg1} alt="Result" />
                    </>
                    : qaQuestion === 2 ?
                      <>
                        <p>
                          {t('scene-qa.qa2.answer')}
                        </p>
                        <img src={ResultImg2} alt="Result" />
                      </>
                      : qaQuestion === 3 ?
                        <>
                          <p>
                            {t('scene-qa.qa3.answer')}
                          </p>
                          <img src={ResultImg3} alt="Result" />
                        </>
                        : qaQuestion === 4 ?
                          <>
                            <p>
                              {t('scene-qa.qa4.answer')}
                            </p>
                            <img src={ResultImg4} alt="Result" />
                          </>
                          : qaQuestion === 5 ?
                            <>
                              <p>
                                {t('scene-qa.qa5.answer')}
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
