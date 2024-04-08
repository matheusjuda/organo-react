import './Time.css'

const Time = (props) => {

    const corFundo = { backgroundColor: props.corFundo }
    const corBorda = { borderColor: props.corBorda }
    return (
        <section className='time' style={corFundo}>
            <h3 style={corBorda}>{props.nome}</h3>
        </section>
    )
}

export default Time