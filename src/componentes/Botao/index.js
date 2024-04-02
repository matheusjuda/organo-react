import './Botao.css'

const Botao = (props) => {
    return (
        //O children recebe tudo que é passado no botão
        <button className='botao'>{props.children}</button>
    )
}

export default Botao