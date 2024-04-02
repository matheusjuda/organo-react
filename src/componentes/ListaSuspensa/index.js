import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select
                onChange={evento => props.listaAlterada(evento.target.value)} //capturando alteração de lista
                required={props.required}> {/*obrigatorio para validar formulario */}
                value={props.valor}
                {props.itens.map(item => <option key={item}>{item}</option>)} {/* Para cada item retorne uma option */}
            </select>
        </div>

    )
}

export default ListaSuspensa