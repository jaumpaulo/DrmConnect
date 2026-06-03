import { supabase } from "../supabase/supabase"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Login(){
    const [ email, setEmail ] = useState("")
    const [ senha, setSenha ] = useState("")
    const irPara = useNavigate()

     async function logar() {
        const res = await supabase.auth.signInWithPassword({
            email,
            password: senha
        })
        if(res.error){
           alert("Você inseriu algo errado!") 
        } else{
            alert("login feito!")
            irPara("/Home")
        }
    }

    const handleOAuthLogin = async () => {
        const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
            redirectTo: `${window.location.origin}/home`,
            queryParams: {
            access_type: 'offline',
            prompt: 'consent',
            },
        },
        });
        if (error) toast.error(error.message);
    };

    async function resetSenha() {
        if(email == " " || email == ""){
            alert("insira seu email!")
            return
        }
        const res = await supabase.auth.resetPasswordForEmail(email, {
            redirectTo: 'https://problemas.vercel.app/resetSenha'
        })
        if(res.error){
            alert("Algo deu errado, verifique se inseriu o email corretamente!")
        } else{
            alert("vá no email e mude sua senha")   
        }
    }

    return(
        <div className="login-tudo">
            <h1>Login</h1>

            <div className="form-login">
                <input type="text" onChange={e => setEmail(e.target.value)} placeholder="Insira seu email"/><br />
                <input type="password" onChange={e => setSenha(e.target.value)} placeholder="Insira sua senha"/> <br />
              <button onClick={logar}>Logar</button> <br />
                <button onClick={handleOAuthLogin}>Entrar com o google</button> <br />
                <p>Não tem conta? crie!</p>
                <button onClick={() => irPara("/cadastro")}>Cadastrar</button> 
                <p>Esqueceu sua senha? redefinar</p>
                <button onClick={() => resetSenha()}>Redefinir senha</button>
            </div>
        </div>
    )
}