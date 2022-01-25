import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import JoinPage from './pages/JoinPage';
import NotFoundPage from './pages/NotFoundPage';

const App = (): JSX.Element =>
  (
    <div className="app-wrap">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/join" element={<JoinPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );

export default App;
