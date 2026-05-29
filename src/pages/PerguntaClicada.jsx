import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../supabase/supabase";
import PerguntaDetalhada from "../components/PerguntaDetalhada";
import RespostasPergunta from "../components/RespostasPergunta";
export default function PerguntaClicada(){
    const { id } = useParams()
    const [pergunta, setPergunta] = useState([])
    const [respostas, setRespostas] = useState([])
    const [carregando, setCarregando] = useState(false)

    async function carregarDados() {
        setCarregando(true)
        const resPergunta = await supabase
        .from("perguntas")
        .select('*')
        .eq('id', id)
        .single()

        const resRespostas = await supabase
        .from("respostas")
        .select('*')
        .eq("id_pergunta", id)

        if(resPergunta.error) return console.error(resPergunta.error.message);
        if(resRespostas.error) return console.error(resRespostas.error.message);
        
        setPergunta(resPergunta.data)
        setRespostas(resRespostas.data)
        setCarregando(false)
    }

    useEffect(() =>{
        carregarDados()
    }, [respostas])

    return(
        <div className="pergunta-tudo">
            <PerguntaDetalhada user={pergunta.user_nome} user_avatar={pergunta.user_avatar} titulo={pergunta.titulo} descricao={pergunta.descricao} />
            <RespostasPergunta respostas={respostas} funcaoDeAtualizar={carregarDados} id={id}/>
        </div>
    )
}