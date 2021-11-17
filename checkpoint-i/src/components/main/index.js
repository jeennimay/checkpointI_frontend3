import Banner from './banner';
import Bio from './bio';
import Projetos from './projetos';
import './style.scss';

const Main = () => {
    return (
        <main>
            <Banner>
                <h2>Vem conhecer um pouco do meu mundo!</h2>
            </Banner>
            <Bio />

            <section className="main-projetos" id="projetos">
                <Projetos />
            </section>
        </main>
    )
}

export default Main;