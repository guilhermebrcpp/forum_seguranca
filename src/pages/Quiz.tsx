import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav";
import questionario from "../json/teste.json"
import { useState } from "react";

function pressed(){
    alert("hihihi ha")
}



function Quiz(){
    const [pergunta_atual, setPergunta] = useState(0);
    const [opcao_atual, setOpcaoAtual] = useState(1);
    const perguntas_max = questionario["questionario 1"]["questoes"].length;

    const [opcoes_escolhidas, setOpcoesEscolhidas] = useState<number[]>([]);

    //var pergunta_atual = 0;
    function proxima_pergunta(){
        setOpcoesEscolhidas([...opcoes_escolhidas, opcao_atual]);

        if(pergunta_atual >= perguntas_max-1){
            alert("acabou se as perguntas");
            alert("as respostas suas foram:" + String(opcoes_escolhidas[1]))
        }else{
            alert("a resposta q vc botou é:" + opcao_atual);
            setPergunta(pergunta_atual+1);
        }
    }

    const selecionando_opcao = (event: any) =>{
        setOpcaoAtual(event.target.value);
    }

    return (
        <div style={{backgroundColor:"#98a9c6"}}>
            <Header></Header>

            <div className="container text-center">
                <h1 style={{fontSize: "8em"}}>Questionário de segurança.</h1>
                
                <div style={{backgroundColor:"#3871b2"}}>
                    <h3 style={{textAlign:"left"}}>
                        {questionario["questionario 1"]["questoes"][pergunta_atual]}
                    </h3>
                </div>
                <div>
                    <form className="text-center" style={{backgroundColor:"#3871b2"}}>
                        <div style={{justifyContent:"space-evenly"}}>
                            <input type="radio" id="opcao1" name="sla" value={1} onChange={selecionando_opcao}/>
                            <label htmlFor="opcao1">{questionario["questionario 1"]["alternativas"][pergunta_atual][0]}</label>

                            <input type="radio" id="opcao2" name="sla" value={2} onChange={selecionando_opcao}/>
                            <label htmlFor="opcao2">{questionario["questionario 1"]["alternativas"][pergunta_atual][1]}</label>

                            <input type="radio" id="opcao3" name="sla" value={3} onChange={selecionando_opcao}/>
                            <label htmlFor="opcao3">{questionario["questionario 1"]["alternativas"][pergunta_atual][2]}</label>

                            <input type="radio" id="opcao4" name="sla" value={4} onChange={selecionando_opcao}/>
                            <label htmlFor="opcao4">{questionario["questionario 1"]["alternativas"][pergunta_atual][3]}</label>
                        </div>
                    </form>
                    <button onClick={proxima_pergunta}>Responder</button>
                </div>
                <br></br>
                <br></br>
                <br></br>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Quiz;