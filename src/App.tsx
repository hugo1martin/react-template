import { BrowserRouter, Routes, Route } from 'react-router-dom';

import DesignSystem from './pages/design_system';

import './assets/styles/styles.scss';

function App () {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/designsystem' element={<DesignSystem />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
