import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";
import Rodape from "./componentes/Rodape";

function App() {

  //Lista de times e cores
  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9',
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
    },
    {
      nome: 'Data Sciense',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2',
    },
    {
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8',
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#D86EBF',
      corSecundaria: '#FAE5F5',
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FEBA05',
      corSecundaria: '#FFF5D9',
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF',
    }


  ]

  //cada vez q o colaborador for cadastrado acrescente a lista
  const [colaboradores, setColaboradores] = useState([])


  const aoNovoColaboradorAdicionado = (colaborador) => {
    //console.log(colaborador)
    setColaboradores([...colaboradores, colaborador]) //espalhando colaboradores antigos e colocando os novos
  }

  function deletandoColaborador() {
    console.log('DELETEEEE')
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)}
        colaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
      {/*Para cada time da lista de times cria-se um componente chamado Time com esse nome*/}
      {times.map(time => <Time
        key={time.nome}
        nome={time.nome}
        corBorda={time.corPrimaria}
        corFundo={time.corSecundaria}
        // Filtrando array colaboradores 
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        aoDeletar={deletandoColaborador}
      />)}
      <Rodape />


    </div>
  );
}

export default App;
