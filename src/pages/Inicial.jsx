import { useNavigate } from "react-router-dom";
import logo from "../assets/logo-sem-fundo.png"
/* LOGO JA IMPORTADA */
export default function  Inicial(){
    /* pagina de explicação do projeto, onde mostra pequena historia, e praq server */
    const irPara = useNavigate()

    return(
        <div className="inicial-tudo">
            <header className="navbar">
                <button onClick={() => irPara("/login")}>Logar</button>
                <button onClick={() => irPara("/cadastro")}>Cadastrar</button>
            </header>
            <div className="cabeca-inicial">
                <h1>DrmConnect</h1>
            </div>
            {/*Adicionar mais coisas, conforme o alta fidelidade*/}
        </div>
    )
}