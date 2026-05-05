import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
function Nav(){
    return (
    <div className='conteiner text-center'>
        <Link to="/" style={{display:'inline-block', fontSize:"2em"}}>HomePage | </Link>
        <Link to="/Quiz" style={{display:'inline-block', fontSize:"2em"}}>{" "}Quiz</Link>
        <Link to="/Profile" style={{display:'inline-block', fontSize:"2em"}}>{" "}Profile</Link>
    </div>
    );
}

export default Nav;