/* eslint-disable jsx-a11y/anchor-is-valid */
import './style.scss';
import logo from "../../assets/img/logo-amarela.svg";

const Header = () => {
    return (
        <header>
        
            <nav class="navbar fixed-top navbar-expand-lg navbar-dark">
                <a class="navbar-brand text-light" href="#">
                    <img src={logo} alt="logo, ilustração mulher com cabelo longo e preto" width="40" class="d-inline-block align-text-top" />
                    Jennifer Mayumi
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Alterna navegação">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse flex-row-reverse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link text-light" href="#bio">Um pouco sobre mim</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light" href="#projetos">Projetos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light" href="#contato">Contato</a>
                        </li>

                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;