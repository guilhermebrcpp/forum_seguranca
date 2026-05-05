import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Quiz from './pages/Quiz';
import MyData from './pages/MyData';
import Profile from './pages/Profile';


function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MyData/>} />
        <Route path="/Quiz" element={<Quiz/>} />
        <Route path="/Profile" element={<Profile/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;