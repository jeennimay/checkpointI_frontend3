const redes = [
    {
        rede: "GitHub",
        icone: <i class="bi bi-github"></i>,
        link: "https://github.com/jennimay"
    },
    {
        rede: "Linkedin",
        icone: <i class="bi bi-linkedin"></i>,
        link: "https://www.linkedin.com/in/mundodajeje/"
    },
    {
        rede: "Instagram",
        icone: <i class="bi bi-instagram"></i>,
        link: "https://www.instagram.com/mundodajeje/"
    },
    {
        rede: "Gmail",
        icone: <i class="bi bi-envelope"></i>,
        link: "mailto:jennifer.mundodajeje@gmail.com"
    },
    {
        rede: "Behance",
        icone: <i class="bi bi-behance"></i>,
        link: "https://www.behance.net/mundodajeje"
    }
]
const RedesSociais = () => {
    return (
        redes.map((redeSocial) => {
            return (<a href={redeSocial.link} target="_blank" rel="noreferrer" title={redeSocial.rede}>{redeSocial.icone}</a>)
        })
    )
}
export default RedesSociais;