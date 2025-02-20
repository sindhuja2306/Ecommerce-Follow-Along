import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {LoginPage,SignupPage,HomePage} from './Routes.jsx'

import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/sign-up"element={<SignupPage/>}/>
      <Route path="/home"element={<HomePage/>}/>
    </Routes>
    </BrowserRouter>
 
  );
}

export default App;