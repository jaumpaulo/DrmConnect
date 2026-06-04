export default function Texto({ titulo , texto }){
    return(
        <div className="textoCard">
            <div className="titulo">
                <h1>{titulo}</h1>
            </div>
            <div className="texto">
                <p>{texto}</p>
            </div>
        </div>
    )
}