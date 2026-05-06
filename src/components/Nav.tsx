import { Link } from 'react-router-dom';
function Nav(){
    return (
    <div className='conteiner text-center'>
        <Link to="/" style={{display:'inline-block', fontSize:"2em"}}>HomePage | </Link>
        <Link to="/Quiz" style={{display:'inline-block', fontSize:"2em"}}>{" "}Quiz</Link>
    </div>
    );
}

export default Nav;