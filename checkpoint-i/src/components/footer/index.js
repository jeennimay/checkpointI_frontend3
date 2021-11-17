import RedesSociais from './redes-sociais';
import './style.scss';

const Footer = () => {
    return (
        <footer id="contato">
            <section className="footer-redes">
                <RedesSociais />
            </section>
                <p>Projeto realizado para avaliação de Front End III, 2021.</p>
        </footer>

    );
}

export default Footer;