import './style.scss';
import foto1 from '../../../assets/img/Jennifer-mayumi (3).svg';

const Bio = () => {
    return (
        <section className="main-bio" id="bio">
            <div className="bio">
                <div className="bio-texto">
                    <h1>Jennifer Mayumi</h1>
                    <p>Tenho 24 anos, formada em comunicação social com ênfase em publicidade e propaganda.</p>
                    <p>No começo da pandemia, em abril de 2020, comecei a estuda UX e UI por curiosidade sobre a área e para tentar "me descobrir" em algum lugar.</p>
                    <p>Aos poucos, durante vários bootcamps e workshops me deparei com o desenvolvimento web e também por curiosidade fui fazer o workshop da Kenzie Academy. Novidade? Descobri minha mais nova paixão, que com o curso CTD, Certified Tech Developer da Digital House com pareceria do Mercado Livre e da Globant, vem se transformando em <span>amor</span>.</p>
                </div>
                <div className="bio-foto">
                    <picture>
                        <img src={foto1} alt="Mulher japonesa, com cabelo curto cortado com side-cut" />
                    </picture>
                </div>
            </div>


        </section>
    );
}

export default Bio;

