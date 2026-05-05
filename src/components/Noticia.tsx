import CKMT from "../assets/logos/CKMT.png"

function Noticia(){
    return (
    <div style={{backgroundColor:"#1C82CC"}}>
        <img src={CKMT}></img>
        <div style={{display:"inline-block", verticalAlign:"top"}}>
            <h3>Titulo da noticia, hackearam todos os CPFs do Brasil, vá mudar seu CPF agora.</h3>
            <p>Descrição da noticia, venderam os CPFs dos caras que verificaram idade em rede social kkk muito otarios.</p>
        </div>
    </div>
    );
}

export default Noticia;