import { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

import Header1 from './Header1';
import Header2 from './Header2';
import Footer from './Footer';
import Homepage from './Homepage';
import CreateAccountpage from './CreateAccountpage';
import Loginpage from './Loginpage';
import BankDetailpage from './BankDetailpage';
import Transferpage from './Transferpage';
import Transactionpage from './Transactionpage';
import Logoutpage from './Logoutpage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate('/bank-details'); 
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/'); 
  };

  return (
    <>
      {isLoggedIn ? <Header2 /> : <Header1 />}

      <Routes>
        {!isLoggedIn && (
          <>
            <Route path="/" element={<Homepage />} />
            <Route path="/CreateAccountpage" element={<CreateAccountpage />} />
            <Route path="/Loginpage" element={<Loginpage onLogin={handleLogin} />} />
          </>
        )}

        {isLoggedIn && (
          <>
            <Route path="/bank-details" element={<BankDetailpage />} />
            <Route path="/transfer" element={<Transferpage />} />
            <Route path="/transactions" element={<Transactionpage />} />
            <Route path="/logout" element={<Logoutpage onLogout={handleLogout} />} />
          </>
        )}
      </Routes>

      <Footer />
    </>
  );
}

export default function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
