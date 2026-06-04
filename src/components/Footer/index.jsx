import logoEp from "./../../assets/paginaInicial/patriocinadores/logoEP.png"
import instagram from "./../../assets/paginaInicial/socialMedias/Instagram_logo.png"
import tiktok from "./../../assets/paginaInicial/socialMedias/tiktok_logo.png"
import animeProfile from "./../../assets/paginaInicial/patriocinadores/animeprofile.png"

export default function Footer(){
    return(
        <footer className="footer">
            <div className="criadores">
                <img src={logoEp} alt="logo da ep"/>
                <p>Feito por: Segundo desenvolvimentos de Sistemas da <br /> escola EEEP Deputado Roberto Mesquita</p>
            </div>
            <div className="mediasSociais">
                <h3>Redes sociais</h3>
                <a href="https://www.instagram.com/2anodesenv.sistemas/" target="_blank"><img src={instagram} alt="logo do instagram"/></a>
                <a href="https://www.tiktok.com/@segundo.ds2025" target="_blank"><img src={tiktok} alt="logo do tiktok"/></a>
            </div>
            <div className="patriocinadores">
                <h3>Patriocinadores</h3>
                <a href="https://animeprofile.com.br/"><img src={animeProfile} alt="logo do anime profile" /></a>
            </div>
        </footer>
    )
}