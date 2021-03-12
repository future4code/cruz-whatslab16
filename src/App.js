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
`

const FormEnvio = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  align-items: center;
`

const Mensagens = styled.div`
  grid-row: 1/2;
  display: flex;
  flex-direction: column-reverse;
  background-color: #ddd;
  padding: 10px;
  box-sizing: border-box;
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
      mensagens:[...this.state.mensagens, novaMensagem],
      inputUsuario: "",
      inputMensagem: ""
    })

  }

  onKeyDownEnter = (event)=>{
    if(event.key ==="Enter"){
      this.onClickEnviar()
    }
  }

  render(){
    let mensagensEnviadas = this.state.mensagens.map((mensagem)=>{
      return <div>
        <strong>{mensagem.usuario}:</strong>{mensagem.mensagem}
      </div>
    })
  return (
    <Grid>
      <Mensagens>{mensagensEnviadas}</Mensagens>
      <FormEnvio>
        <input placeholder="Usuario" onChange={this.onChangeUsuario} value={this.state.inputUsuario} />
        <input placeholder="Mensagem"onChange={this.onChangeMensagem} onKeyDown={this.onKeyDownEnter} value={this.state.inputMensagem}/>
        <button onClick={this.onClickEnviar}>Enviar</button>
      </FormEnvio>



    </Grid>
  );
  }
}

export default App;
