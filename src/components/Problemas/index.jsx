import Descricao from "./elements/Descricao";
import Titulo from "./elements/Titulo";

export default function Problemas({ user, titulo, conteudo, imgs, avatar }){
    return(
        <div>
            {avatar == null ? <span>{user}</span> : <span><img src={avatar} style={{width: "30px", borderRadius:"360px"}}/> {user}</span>} <br />
            <Titulo titulo={titulo} /> <br />
            {imgs == null ? <span></span> : <img src={imgs} style={{width: "100px"}}/>}
            <Descricao conteudo={conteudo} />
        </div>
    )
}