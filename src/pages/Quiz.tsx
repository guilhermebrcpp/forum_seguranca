import Nav from "../components/Nav";
import questionario from "../json/teste.json"
import { useState } from "react";

function pressed(){
    alert("hihihi ha")
}



function Quiz(){
    const [pergunta_atual, setPergunta] = useState(0);
    const perguntas_max = questionario["questionario 1"]["questoes"].length
    //var pergunta_atual = 0;
    function proxima_pergunta(){
        if(pergunta_atual >= perguntas_max-1){
            alert("acabou se as perguntas")
        }else
            setPergunta(pergunta_atual+1);
    }
    return (
        <div>
            <div className="container text-center">
                <h1 style={{fontSize: "5em"}}>Quiz insano.</h1>
                <Nav></Nav>
                
                <div style={{backgroundColor:"lightgrey"}}>
                    <h3 style={{textAlign:"left"}}>
                        {questionario["questionario 1"]["questoes"][pergunta_atual]}
                    </h3>
                </div>
                <div>
                    <form className="text-start" style={{backgroundColor:"lightgrey"}}>
                        <input type="radio" id="opcao1" name="sla"/>
                        <label htmlFor="opcao1">{questionario["questionario 1"]["alternativas"][pergunta_atual][0]}</label><br/>

                        <input type="radio" id="opcao2" name="sla"/>
                        <label htmlFor="opcao2">{questionario["questionario 1"]["alternativas"][pergunta_atual][1]}</label><br/>

                        <input type="radio" id="opcao3" name="sla"/>
                        <label htmlFor="opcao3">{questionario["questionario 1"]["alternativas"][pergunta_atual][2]}</label><br/>

                        <input type="radio" id="opcao4" name="sla"/>
                        <label htmlFor="opcao4">{questionario["questionario 1"]["alternativas"][pergunta_atual][3]}</label><br/>
                        <br/>
                        
                    </form>
                    <button onClick={proxima_pergunta}>enviar2</button>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <button onClick={pressed}>oiiiiiii</button>
            </div>
        </div>
    )
}

export default Quiz;