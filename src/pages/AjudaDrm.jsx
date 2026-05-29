import { useState, useEffect } from "react";
import { supabase } from "../supabase/supabase";
import { Link, useNavigate } from "react-router-dom";
import Pergunta from "../components/Pergunta";
import { buscarImagem } from "../services/sercheAvatar";

export default function AjudaDrm(){
    const [titulo, setTitulo] = useState("")
    const [descricao, setDescricao] = useState("")
    const [perguntas, setPerguntas] = useState([])
    const [imgUrl, setImgUrl] = useState("")
    const irPara = useNavigate()

    async function buscarPerguntas() {
        const res = await supabase
        .from("perguntas")
        .select("*")

        if(res.error){
            alert("algo deu errado " + res.error.message)
        } else{
            setPerguntas(res.data)
        }
    }

    useEffect(() => {
        buscarPerguntas()
        setImgUrl(buscarImagem())
    }, [perguntas])

    return(
        <div className="ajudadrm-tudo">
            <div className="enviar-pergunta">
                <h3>Crie um pergunta</h3>
                <button onClick={() => irPara("/criarpergunta")}>+</button>
            </div>
            <div className="Perguntas">
                {perguntas.map((item) => (
                    <Link 
                    to={`/perguntas/${item.id}`}
                    key={item.id}
                    style={{ textDecoration: "none", color: 'inherit'}}>
                        <Pergunta titulo={item.titulo} user={item.user_nome} userAvatar={item.user_avatar}/>
                    </Link>
                ))}
            </div>
        </div>
    )
}