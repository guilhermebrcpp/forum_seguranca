import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav"
import Noticia from "../components/Noticia";



function Profile(){
    return (
    <div style={{backgroundColor:"#C2E6E7"}}>

        <Header></Header>

        <Nav></Nav>

        <hr></hr>

        <h1 className="text-center" style={{fontSize: "10em"}}>CKMT Security</h1>

        <div className="container">
            <h2 className="text-center" style={{fontSize: "2em"}}>
                Forúm feito para falar sobre o quão importante é a websegurança de sua empresa e quais são os benefícios de focar nisso
                e de quais formas você pode se prejudicar se você não ligar para a seguraça de seus sistemas e o quanto isso pode ferir
                todos os seus usuários e tals.
            </h2>
        </div>
        
        <hr style={{margin:"20em, 0em"}}></hr>

        <hr></hr>
        <Footer></Footer>
    </div>
    );
}

export default Profile;