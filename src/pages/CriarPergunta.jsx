import { useState, useEffect, useRef } from "react";
import { supabase } from "../supabase/supabase";
import { useNavigate } from "react-router-dom";

export default function CriarPergunta(){
    const [titulo, setTitulo] = useState("")
    const [descricao, setDescricao] = useState("")
    const textareaRef = useRef(null)
    const irPara = useNavigate()
    
    async function criarPergunta() {
        if(titulo == "" || descricao == ""){
            alert("preencha todas as caixas!")
            return
        }
        const { data: {user}, error } = await supabase.auth.getUser()
        const usuarioNome = user.user_metadata?.full_name || user.user_metadata?.name ||  user.user_metadata?.display_name || "???"
        const avatar = user.user_metadata?.avatar_url || null 
        const res = await supabase
        .from("perguntas")
        .insert({
            titulo,
            descricao,
            user_id: user.id,
            user_nome: usuarioNome,
            user_avatar: avatar
        })
        if(res.error) return console.error(res.error.message);
        alert("pergunta Criada!")
        irPara("/perguntas")
    }

    useEffect(() =>{
        const textarea = textareaRef.current
        if(textarea){
            textarea.style.height = 'auto'
            textarea.style.height = `${textarea.scrollHeight}px`
        }
      }, [descricao])

    return(
        <div className="criarPergunta">
            <h1>Criar Pergunta</h1>
            <div className="criarPergunta-entrada">
                <input type="text" placeholder="insira o Titulo" value={titulo} onChange={e => setTitulo(e.target.value)}/> <br />
                <textarea maxLength={200} ref={textareaRef} value={descricao} onChange={e => setDescricao(e.target.value)} placeholder="O que você está pensando hoje?" style={{width: "500px"}}></textarea>
            </div>
            <button onClick={() => criarPergunta()}>Enviar Pergunta</button>
        </div>
    )
}