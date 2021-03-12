import logo from './logo.svg';
import './App.css';
import React from 'react'
import styled from 'styled-components'

const Grid = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  border: 1px solid black;
  height: 100vh;
  width: 600px;
  margin: 0 auto;
  background-color: #e5ddd5;
`

const FormEnvio = styled.div`
  display: grid;
  grid-template-columns: 130px 10fr 1fr;
  align-items: center;
  box-sizing: border-box;
  padding: 10px;
  grid-gap: 10px;

  &>input{
    height: 40px;
  }
  &>button{
    height: 40px;
    font-size: 16px;
    font-weight: bold;
    padding: 0px;
  }
`

const Mensagens = styled.div`
  grid-row: 1/2;
  display: flex;
  flex-direction: column-reverse;
  /* background-color: rgba(0,0,0,0) */
  padding: 10px;
  box-sizing: border-box;
  width: 100%;
  /* height: 100%; */
`

const ElementoUsuario = styled.div`
  padding: 10px;
  background-color: #fff;
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  max-width: 40%;
`

const ElementoEu = styled.div`
  padding: 10px;
  align-self: flex-end;
  background-color: #dcf8c6;
  margin: 10px 0;
  max-width: 40%;
`

export class App extends React.Component {

  state = {
    mensagens: [
      
      
    ],
    inputUsuario: "",
    inputMensagem:""
  }

  onChangeUsuario = (event)=>{
    this.setState({
      inputUsuario: event.target.value
    })
    // console.log(this.state.inputUsuario)
  }

  onChangeMensagem = (event)=>{
    this.setState({
      inputMensagem: event.target.value
    })
    // console.log(event.target)
  }

  onClickEnviar = ()=>{
    const novaMensagem = {
      usuario: this.state.inputUsuario,
      mensagem: this.state.inputMensagem
    }
    this.setState({
      mensagens:[novaMensagem,...this.state.mensagens],
      inputUsuario: "",
      inputMensagem: ""
    })

  }

  onKeyDownEnter = (event)=>{
    if(event.key ==="Enter"){
      this.onClickEnviar()
    }
  }

  clickDuplo = (index)=>{
    
    if(window.confirm("Você realmente deseja excluir a mensagem?")===true){
      const novaMensagens = this.state.mensagens.filter((mensagem,m_index)=>{
        if(index === m_index) return false
        return true
      })
      
      this.setState({
        mensagens : novaMensagens
      })
    }
  }

  render(){
    let mensagensEnviadas = this.state.mensagens.map((mensagem, index)=>{
      if(mensagem.usuario!=="eu")
        return <ElementoUsuario onDoubleClick={()=>this.clickDuplo(index)}>
          <strong>{mensagem.usuario}</strong>{mensagem.mensagem}
          
        </ElementoUsuario>

      else return <ElementoEu onDoubleClick={()=>this.clickDuplo(index)}>
           {mensagem.mensagem}
      </ElementoEu>
    })
  return (
    <Grid>
      
        <Mensagens>{mensagensEnviadas}</Mensagens>
      
      <FormEnvio>
        <input placeholder="Usuário" onChange={this.onChangeUsuario} value={this.state.inputUsuario} />
        <input placeholder="Mensagem"onChange={this.onChangeMensagem} onKeyDown={this.onKeyDownEnter} value={this.state.inputMensagem}/>
        <button onClick={this.onClickEnviar}>Enviar</button>
      </FormEnvio>



    </Grid>
  );
  }
}

export default App;
