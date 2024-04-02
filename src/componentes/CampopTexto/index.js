import './CampoTexto.css'

const CampoTexto = (props) => {

    const placeholderModificado = `${props.placeholder}...`

    //capturando input
    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)


    }

    return (
        <div className='campo-texto'>
            <label>{props.label}</label>
            {/*required= obrigatorio para validar formulario / onChange= evento ocorre quando o valor de um elemento HTML é alterado*/}
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificado} />
        </div>
    )
}

export default CampoTexto