export default function Inputs({funcaoTitulo, estadoTitulo, funcaoDescricao, esatadoDescricao}){
    return(
        <>
        <div>
            <input value={estadoTitulo} type="text" placeholder="Titulo" onChange={e => funcaoTitulo(e.target.value)}/> <br />
            <textarea value={esatadoDescricao} placeholder="O que podemos melhorar" style={{width:"390px", height: "200px"}} onChange={e => funcaoDescricao(e.target.value)}></textarea>
        </div>
        </>
    )
}