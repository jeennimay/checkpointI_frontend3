import './style.scss';

const Banner = ({children}) => {
    return(
        <section className="banner">
            {children}
        </section>
    );
}
export default Banner;