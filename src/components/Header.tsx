import CKMT from "../assets/logos/CKMT.png"
import "../css/teste.css"

function Header(){
    return (
        <div style={{backgroundColor:"#1C82CC", overflow:"hidden"}}>
            <img src={CKMT} height={"90em"} style={{display:"block", float:"left", backgroundColor:"#000000", marginLeft:"2em"}}></img>
            <h1 style={{display:"block", float:"left", paddingLeft:"0.5em", paddingTop:"0.4em"}}>CKMT</h1>

            <h2 className="direita">Oi</h2>
            <h2 className="direita">Oi2</h2>
            <h2 className="direita">Oi3</h2>
        </div>
    );
}

export default Header;