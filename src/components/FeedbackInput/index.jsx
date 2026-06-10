import Estrelas from "./elements/Estrelas";
import Inputs from "./elements/Inputs";
import { useState } from "react";
import { supabase } from "../../supabase/supabase"
import { useNavigate } from "react-router-dom";
import "../../styles/feedBackCSS.css"
/* Componente de feedback */
export default function FeedbackInput(){
    const [ titulo, setTitulo ] = useState("")
    // assunto do feedback, aqui onde guardaa isso
    const [ descricao, setDescricao ] = useState("")
    // descrição do feedback
    const [ estrelas, setEstrelas ] = useState(0)
    // estado para amazenar as estrelas/avaliação
    const irPara = useNavigate()

    async function enviar(){
        const res = await supabase
        .from("feedbacks")
        .insert({
            titulo,
            descricao,
            avaliacao: estrelas
        })

        if(res.error){
            alert("envio falhou, tente novamente mais tarde")
        } else{
            alert("feedback enviado! Muito obrigado pela a sua opinião!")
            setTitulo("")
            setDescricao("")
        }
    }
    return(
        <>
        <button onClick={() => irPara("/home")}>Voltar</button>
        <h1>Area de FeedBacks</h1>
        <p>Nos ajude com sua opinião</p>
        <div>
        <Inputs funcaoTitulo={setTitulo} estadoTitulo={titulo} funcaoDescricao={setDescricao} esatadoDescricao={descricao}/>
        <Estrelas funcao={setEstrelas}/>
        <button onClick={() => enviar()} style={{marginTop: "10px"}}>Enviar</button>
        </div>
        </>
    )
}