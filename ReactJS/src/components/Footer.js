import { Link } from "react-router-dom";

export default function Footer (){

    return(
        <footer>
            <nav className="footer_link">
                <p>Términos y condiciones</p>
                <p>Política de Privacidad</p>
                <p>Pólitica de cookies</p>
                <p>Contactos</p>
            </nav>
            <div className="dev_name">
                <span>&copy; 2024. Develop By Don@Eny</span>
                <a href="#" className="fa fa-linkedin"></a>
                <a href="#" className="fa fa-whatsapp"></a>
                <a href="#" className="fa fa-facebook"></a>
            </div>
        </footer>
    )
}