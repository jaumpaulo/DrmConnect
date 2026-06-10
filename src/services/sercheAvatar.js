import { supabase } from "../supabase/supabase"
export async function buscarImagem() {
    // aqui eu busco o usuário logado
    const { data: { user }, error } = await supabase.auth.getUser()
    if(!user || error){
        alert("usuário não logado!!")
        return
    }
    // e pego do json dele o url do avatar/foto de perfil
    const avatar = user.user_metadata?.avatar_url || null
    return avatar 
}