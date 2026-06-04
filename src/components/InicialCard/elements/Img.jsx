export default function Img({ imagem }){
    return(
        <div className="imagemCard">
            <img src={ imagem } alt="imagem do card" />
        </div>
    )
}