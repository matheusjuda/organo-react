import './Rodape.css'

const Rodape = () => {
    return (<footer className="footer">
        <section>
            <div class="links">
                <a href="https://github.com/matheusjuda" target="_blank" rel='nooperner noreferrer'>
                    <img src="./svg/logo-github.svg" alt="icon-github" />
                </a>
                <a href="https://www.instagram.com/mbjuda_/" target="_blank" rel='nooperner noreferrer'>
                    <img src="./svg/logo-insta.svg" alt="icon-insta" />
                </a>
                <a
                    href="https://www.linkedin.com/in/matheus-ben-jud%C3%A1-972916235/"
                    target="_blank" rel='nooperner noreferrer'
                >
                    <img src="./svg/logo-linkedin.svg" alt="icon-linkin" />
                </a>
            </div>
        </section>
        <section>
            <img src="/imagens/logo.png" alt="" />
        </section>
        <section>
            <p>
                Desenvolvido por Judá.
            </p>
        </section>
    </footer>)

}

export default Rodape