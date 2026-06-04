import Img from "./elements/Img";
import Texto from "./elements/Texto";

export default function InicialCard({ imagem, titulo, texto }){
    return(
     <div className="card">
        <Img
            imagem={imagem}
        />
        <Texto
            titulo={titulo}
            texto={texto}
        />
     </div>   
    )
}