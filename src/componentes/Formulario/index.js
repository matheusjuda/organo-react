import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampopTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

    //array com duas variaveis, definimos `nome` como 'vazio' e `setValor` como uma função para atualizar o estado. / useState= hook, variavel de estado
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')


    //Estado formulario
    const aoSalvar = (evento) => {
        evento.preventDefault() //previnindo o comportamento padrão de recarregar a pag
        props.colaboradorCadastrado({ //Passando objeto para App
            nome: nome,
            cargo: cargo,
            imagem: imagem,
            time: time
        })

    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}> {/*aoSalvar escutando o formulario*/}
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label='Times'
                    itens={props.times}
                    valor={time}
                    listaAlterada={valor => setTime(valor)}
                />
                <Botao>Criar Card</Botao>
            </form>
        </section>







    )
}

export default Formulario