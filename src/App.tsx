import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import JoinPage from './pages/JoinPage';

const App = (): JSX.Element =>
  (
    <div className="app-wrap">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/join" element={<JoinPage />} />
      </Routes>
    </div>
  );

export default App;
