import { IoMdCloseCircle } from "react-icons/io";
import './Colaborador.css'

const Colaborador = (props) => {
    //console.log(props)
    return (<div className='colaborador'>
        {/* Botão delete colaborador */}
        <IoMdCloseCircle
            size={25}
            className='deletar'
            //evento chama função deletar atravez do id
            onClick={() => props.aoDeletar(props.colaboradorId)}
        />
        <div className='cabecalho' style={{ backgroundColor: props.corColaborador }}>
            <img src={props.imagem} alt={props.nome} />
        </div>
        <div className='rodape'>
            <h4>{props.nome}</h4>
            <h5>{props.cargo}</h5>
        </div>
    </div>

    )
}

export default Colaborador