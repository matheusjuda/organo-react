import { useState } from 'react'
import './CampoTexto.css'

const CampoTexto = (props) => {

    const placeholderModificado = `${props.placeholder}...`

    //guardando o input
    //let valor = 'fdfg'


    //array com duas variaveis, definimos `valor` como 'vazio' e `setValor` como uma função para atualizar o estado.           useState= hook, variavel de estado
    const [valor, setValor] = useState('Matheus')

    //capturando input
    const aoDigitado = (evento) => {
        setValor(evento.target.value)
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