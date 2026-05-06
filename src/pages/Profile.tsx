import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav"
import Noticia from "../components/Noticia";



function Profile(){
    return (
    <div style={{backgroundColor:"#98a9c6"}}>

        <Header></Header>

        <Nav></Nav>

        <hr></hr>

        <h1 className="text-center" style={{fontSize: "10em"}}>Perfil do usuário</h1>

        <div className="container">
            <h2 className="text-center" style={{fontSize: "2em"}}>
                Aqui ficaria a área de perfil do usuário, onde teria uma Dashboard para acessar as configurações e as informações de seu perfil, e também acessar o questionário sobre segurança para saber o quão bem sua empresa está indo nesse quesito.
            </h2>
        </div>

        <hr style={{paddingBottom:"100%"}}></hr>
        <Footer></Footer>
    </div>
    );
}

export default Profile;