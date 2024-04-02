import './CampoTexto.css'

const CampoTexto = (props) => {

    const placeholderModificado = `${props.placeholder}...`

    return (
        <div className='campo-texto'>
            <label>{props.label}</label>
            {/*required= obrigatorio para validar formulario*/}
            <input required={props.obrigatorio} placeholder={placeholderModificado} />
        </div>
    )
}

export default CampoTexto