import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import InternationalStudent from './components/InternationalStudents';
import PermanentResidence from './components/PermanentResidence';

import { Route, Routes } from 'react-router-dom';

function App() {
  // let component
  // switch (window.location.pathname) {
  //   case "/":
  //     component = <Home />
  //     break;
  //   case "/about":
  //     component = <About />
  //     break;
  //   case "/international-student":
  //     component = <InternationalStudent />
  //     break;
  //   case "/permanent-residence":
  //     component = <PermanentResidence />
  //     break;
  //   default:
  //     break;
  // }
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
            </Routes>
          </div>
     
    </>
  );
}

export default App;
