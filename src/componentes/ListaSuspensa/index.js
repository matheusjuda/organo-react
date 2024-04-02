import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select>
                {/* Para cada item retorne uma option */}
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>

    )
}

export default ListaSuspensa