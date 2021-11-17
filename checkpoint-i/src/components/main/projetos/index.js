import listaProjetos from './listaProjetos';
import './style.scss';

const Projetos = () => {
    return (
        listaProjetos.map((projeto) => {

            return (
                <div className="projeto-card">
                    <picture>
                        <img src={projeto.img} alt={projeto.nome} />
                    </picture>
                    <h3>{projeto.nome}</h3>
                    <p>{projeto.descricao}</p>
                    <div className="card-links">
                        <a href={projeto.linkGitPages} target="_blank" rel="noreferrer">GitPage</a>
                        <a href={projeto.linkGitHub} target="_blank" rel="noreferrer">GitHub</a>
                    </div>
                    <p className="projeto-linguagem">Linguagens: {projeto.linguagens.join(" ")}</p>
                </div>
            )
        })
    );
}
export default Projetos;