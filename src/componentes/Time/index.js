import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {

    const corFundo = { backgroundColor: props.corFundo }
    const corBorda = { borderColor: props.corBorda }
    return (
        //Se colaboradores for maior q 0 ele retornar a section
        (props.colaboradores.length > 0) && <section className='time' style={corFundo}>
            <h3 style={corBorda}>{props.nome}</h3>
            <div className='colaboradores'>
                {/*Trazendo input para Colaborador*/}
                {props.colaboradores.map(colaborador => <Colaborador
                    nome={colaborador.nome}
                    cargo={colaborador.cargo}
                    imagem={colaborador.imagem}
                />)}
            </div>

        </section>

    )
}

export default Time