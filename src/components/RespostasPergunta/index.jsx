import EnviarResposta from "./elements/EnviarResposta";
import RespostasVisor from "./elements/RespostasVisor";

export default function RespostasPergunta({ respostas, funcaoDeAtualizar, id }){
    return(
        <div className="respostas-tudo">
            <EnviarResposta id={id} funcao={funcaoDeAtualizar}/>
            <RespostasVisor respostas={respostas} />
        </div>
    )
}