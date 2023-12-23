import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import InternationalStudent from './components/InternationalStudents';
import PermanentResidence from './components/PermanentResidence';
import Footer from './components/Footer';

import { Route, Routes } from 'react-router-dom';
// import RegistrationForm from './components/ImmigrationRegistrationForm';

function App() {
  console.log(process.env.REACT_APP_PUBLIC_KEY)
  
  return (
    <>
          <Nav />
          {/* {component} */}
          <div>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/international-student" element={<InternationalStudent />}></Route>
              <Route path="/permanent-residence" element={<PermanentResidence />}></Route>
              {/* <Route path="/immigration-registration" element={<RegistrationForm />}></Route> */}
            </Routes>
          </div>
          <Footer />
     
    </>
  );
}

export default App;
