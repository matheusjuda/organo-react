import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";

function App() {

  //cada vez q o colaborador for cadastrado acrescente a lista
  const [colaboradores, setColaboradores] = useState([])


  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador]) //espalhando colaboradores antigos e colocando os novos
  }

  return (
    <div className="App">
      <Banner />
      <Formulario colaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
      <Time nome='Programação' />
      <Time nome='Front-End' />
      <Time nome='Mobile' />

    </div>
  );
}

export default App;
