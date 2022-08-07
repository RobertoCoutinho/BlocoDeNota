import './App.css';
import Modal from 'react-modal';
import { useState } from 'react';
import TabelaAnotacoes from './componentes/TabelaAnotacoes';

Modal.setAppElement('#root')



function App() {

  const [dadosEditar, setDadosEditar] = useState()
  const [anotacaoEditar, setAnotacaoEditar] = useState()
  const [id, setId] = useState(0)

  const [conteudo, setConteudo] = useState()

  const [anotacoes, setAnotacoes] = useState([])
  const anotacoesHandle = (anotacao) => {
    setAnotacoes([...anotacoes, {"id":id, "anotacao":anotacao}])
    setId(id+1);
    handleCloseModalAdd()
  }

  const deletar = (id) => {
    var filtrado = anotacoes.filter((an) => an.id != id)
    setAnotacoes(filtrado)
  }
  const att = (x) => {
    setDadosEditar(anotacoes.findIndex((element) => element.id == x));
  }

  const setElementoEditar = () => {
    document.getElementById('input-editar').defaultValue = anotacoes[dadosEditar].anotacao
  }

  const editar = (elemento) => {
    var ax = [...anotacoes]
    ax[elemento.id] = elemento
    setAnotacoes(ax)
    handleCloseModalEdit()
  }

  const [modalAddIsOpen, setModalAddIsOpen] = useState(false)

  function handleOpenModalAdd(){
    setModalAddIsOpen(true)
  }

  function handleCloseModalAdd(){
    setModalAddIsOpen(false)
  }

  const [modalEditIsOpen, setModalEditIsOpen] = useState(false)

  

  function handleCloseModalEdit(){
    setModalEditIsOpen(false)
  }

  const customStyleModalAdd = {
    content: {
      top:'20%',
      left:'40%',
      right:'auto',
      bottom:'auto'
    }
  }

  function formAdd(){
    return(
      <div className='form-add'>
        <h2>Adicionar nota</h2>
        <label>Conteudo da nota</label>
        <input 
          type = "text" 
          name = "conteudo" 
          value={anotacoes.conteudo}
          onChange = {(e)=>setConteudo(e.target.value)} 
        />
        <button onClick={()=>anotacoesHandle(conteudo)}>Adicionar</button>
      </div>
    );
  }
  function formEdit(){
    return(
      <div className='form-add'>
        <h2>Editar nota</h2>
        <label>Conteudo da nota</label>
        <input 
          type = "text" 
          id = "input-editar"
          name = "anotacao" 
          onClick={()=>setElementoEditar()}
          onChange = {(e)=>setAnotacaoEditar(e.target.value)}         
        />
        <button onClick={()=>editar({"id":dadosEditar, "anotacao":anotacaoEditar})}>Editar</button>
      </div>
    );
  }

  function handleOpenModalEdit(){
    setModalEditIsOpen(true)
  }

  return (
    <>
      <div className='menu'>
        <label>Bloco de anotações</label>
      </div>
      <div>
        <Modal style={customStyleModalAdd} isOpen={modalAddIsOpen} onRequestClose={handleCloseModalAdd} >
          {formAdd()}
        </Modal>
        <Modal style={customStyleModalAdd} isOpen={modalEditIsOpen} onRequestClose={handleCloseModalEdit} >
          {formEdit()}
        </Modal>
      </div>
      <div className='conteiner1'>
        <div className='conteiner2'>
          <button id='button-add' onClick={()=>handleOpenModalAdd()}>Adicionar</button>
          <div className='conteiner3'>
              <TabelaAnotacoes setDadosEditar = {att} editarModal = {handleOpenModalEdit} anotacoes={anotacoes} deletar = {deletar} editar = {editar}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
