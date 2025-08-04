import Header from './Header.js'
import Homepage from './Homepage.js'
import Footer from './Footer'
import Profilepage from './Profilepage.js'
import Friendpage from './Friendpage.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
      <BrowserRouter>
      <Header />
      {/*Browserrouter component is use to define routing*/}
      
        {/*Routes component is uses to group routes*/}
        <Routes>
          {/*Route component is used to define path with our page component */}
          <Route path='/home' element={<Homepage />} />
          <Route path='/profile' element={<Profilepage />} />
          <Route path='/friend' element={<Friendpage />} />


        </Routes>
      

      <Footer />
      </BrowserRouter>
  
  );
}

export default App;