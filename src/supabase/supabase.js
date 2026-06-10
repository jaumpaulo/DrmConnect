import { createClient } from "@supabase/supabase-js";
// passo minhas chaves para entrar no banco de dados
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY
// e crio cliente, para conseguir fazer minha requisições
export const supabase = createClient(supabaseUrl, supabaseKey, {
    auth:{
        // para a sessão nunca acabarem antes do tempo esperado
        persistSession: true,
        // sempre atualizar o token de forma segura
        autoRefreshToken: true,
        // e sempre verificar Url para valida a sessão
        detectSessionInUrl: true,
    }
})