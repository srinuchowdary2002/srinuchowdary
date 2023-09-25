import logo from './logo.svg';
import './App.css';
import Home from './home';
import About from './About';
import Service from './service';
import Contact from './Contact';
import Menu from './menu';
import Trainees from './trainees';
import Events from './events.js/events';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Form from './form';
import Form1 from './form1';
import Newproduct from './newproduct';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Menu />
      <Routes>
      <Route path="/" element={<Home  />} />
        {/* <Route path="/Home" element={<Home />} />    */}
        <Route path="/About" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/trainees" element={<Trainees />} /> 
        <Route path="/events" element={<Events />} />
        <Route path="/form" element={<Form />} />
        <Route path="/form1" element={<Form1 />} />
        <Route path="/newproduct" element={<Newproduct />} /> 
       {/* // by using here name also we can call by taking function argument */}

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
