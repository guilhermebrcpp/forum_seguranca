import CKMT from "../assets/logos/CKMT.png"
import sonic_cd from "../assets/placeholders/sonic cd.png"
import hacker from "../assets/placeholders/imagem de hacker.png"

function Noticia(){
    return (
        //style={{backgroundColor:"#3871b2"}}
    <div style={{backgroundColor:"#3871b2"}}>
        <img src={hacker} height={"250em"} width={"250em"}></img>
        <div style={{display:"inline-block", verticalAlign:"top", paddingTop:"1em", paddingLeft:"1em"}}>
            <h3>Titulo da noticia, hackearam todos os CPFs do Brasil, vá mudar seu CPF agora.</h3>
            <p style={{paddingTop:"1.5em", paddingLeft:"0.5em"}}>Descrição da noticia, venderam os CPFs dos caras que verificaram idade em rede social.</p>
        </div>
    </div>
    );
}

export default Noticia;