import './App.css';

import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import i18n from './i18n';
import Loading from './pages/loading/main';
import SceneIntro from './pages/scene_intro/main';
import SceneStart from './pages/scene_start/main';

function App() {
  const [loading, setLoading] = useState(false);

  // 取得localStorage的語言設定
  const currentLanguage = localStorage.getItem('i18nextLng_htc_ar');

  useEffect(() => {
    if (currentLanguage) {
      i18n.changeLanguage(currentLanguage);
    }
  }
    , [currentLanguage]);

  return (
    <div className="App">
      <div className='app-container'>
        <Router>
          <Routes>
            <Route path="/" element={<SceneStart />} />
            <Route path="/intro" element={<SceneIntro />} />
          </Routes>
        </Router>
      </div>
      {
        loading && <Loading />
      }
    </div>
  );
}

export default App;
