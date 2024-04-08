import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";

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

    </div>
  );
}

export default App;
