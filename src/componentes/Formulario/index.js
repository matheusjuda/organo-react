import Botao from '../Botao'
import CampoTexto from '../CampopTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

    //Para ListaSuspensa
    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const aoSalvar = (evento) => {
        evento.preventDefault() //previnindo o comportamento padrão de recarregar a pag
        console.log('SALVE')

    }


    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}> {/*aoSalvar escutando o formulario*/}
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome" />
                <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
                <ListaSuspensa obrigatorio={true} label='Times' itens={times} />
                <Botao>Criar Card</Botao>
            </form>
        </section>




    )
}

export default Formulario