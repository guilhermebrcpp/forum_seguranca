import CKMT from "../assets/logos/CKMT.png"
import "../css/teste.css"
import pfp_user from "../assets/placeholders/pfp.png"
import { Link } from "react-router-dom";

function Header(){
    return (
        <div style={{backgroundColor:"#122B40", overflow:"hidden"}}>
            <Link to="/" style={{display:"block", float:"left", marginLeft:"2em"}}>
                <img style={{color:"black", display:"block", float:"left", paddingLeft:"0.5em", paddingTop:"0.4em"}} src={CKMT} height={"70em"} ></img>
                <h1 style={{color:"lightgray", display:"block", float:"left", paddingLeft:"0.5em", paddingTop:"0.4em"}}>CKMT</h1>
            </Link>

            <Link to="/Profile" className="direita" style={{display:'inline-block', fontSize:"2em"}}><img height="70em" width="70em" src={pfp_user}/></Link>
        </div>
    );
}

export default Header;