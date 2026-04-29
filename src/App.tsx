import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Quiz from './pages/Quiz';
import MyData from './pages/MyData';


function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MyData/>} />
        <Route path="/Quiz" element={<Quiz/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;