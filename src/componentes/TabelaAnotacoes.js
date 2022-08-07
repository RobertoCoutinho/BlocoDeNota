import './TabelaAnotacoes.css';
import React from "react";


export default function(props){

    const prepararEditar = (elemento) => {
        //alert(elemento)
        props.setDadosEditar(elemento)
        props.editarModal()
    }    

    const listaAnotacoes = props.anotacoes.map(
        (c)=>
            <tr> 
                <fieldset>
                    <div className='conteiner4'>
                        <div className='div-text'>
                            <label>{c.anotacao}</label>
                        </div>
                        <div className='conteiner5'>
                            <button value = {c.id} onClick={(e)=>prepararEditar(e.target.value)}>Editar</button><br/>
                            <button value = {c.id} onClick={(e)=>props.deletar(e.target.value)}>Excluir</button>
                        </div>
                    </div>
                </fieldset>
            </tr>
    ) 
    return(
        <table className='tabela-anotacoes'>
            {listaAnotacoes}
        </table>
    );   
}