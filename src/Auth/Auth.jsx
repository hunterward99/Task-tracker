import './css/general.css';
import Authorization from './Pages/Authorization/Authorization';
import Registration from './Pages/Registration/Registration';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Reset from './Pages/Reset/Reset';

function Auth() {
  return (
    <>
    <div className="bg"></div>

        <form className="form">         
            <BrowserRouter >
            <Routes >
                <Route path='*' element={<Authorization />}></Route>
                <Route path='reg' element={<Registration />}></Route>
                <Route path='reset' element={<Reset />}></Route>
            </Routes>
            </BrowserRouter>
    </form>
    </>
  );
}

export default Auth;