import './CampoTexto.css'

const CampoTexto = (props) => {

    const placeholderModificado = `${props.placeholder}...`

    //guardando o input
    let valor = 'fdfg'

    //capturando input
    const aoDigitado = (evento) => {
        valor = evento.target.value
        console.log(valor)
    }

    return (
        <div className='campo-texto'>
            <label>{props.label}</label>
            {/*required= obrigatorio para validar formulario / onChange= evento ocorre quando o valor de um elemento HTML é alterado*/}
            <input value={valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificado} />
        </div>
    )
}

export default CampoTexto