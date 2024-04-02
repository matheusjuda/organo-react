import CampoTexto from '../CampopTexto'
import './Formulario.css'

const Formulario = (props) => {
    return (
        <section>
            <form>
                <CampoTexto label="Nome" placeholder="Digite seu nome" />
                <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
            </form>
        </section>




    )
}

export default Formulario