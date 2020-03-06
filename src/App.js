import React, { Component } from "react";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";
import { Transition } from 'react-transition-group';

class App extends Component {
  state = {
    modalOpen: false,
    showBlock: false

  }
  toggleModal = () => {
    this.setState((prevState) => {
      return {
        modalOpen: !prevState.modalOpen,
      }
    })
  }
  render() {
    return (
      <div className="App">

        <button className="Button" onClick={() => { this.setState((prevState) => ({ showBlock: !prevState.showBlock })) }}>Toggle Block</button>

        <Transition 
          in={this.state.showBlock} 
          timeout={1000}
          mountOnEnter
          unmountOnExit
          >
          {state => (
              <div style={{
                backgroundColor: "red",
                width: 100,
                height: 100,
                margin: 'auto',
                opacity : state === 'exiting' ? 0 : 1,
                transition :' opacity 1s ease-out'
              }}>{state}</div>
          )}

        </Transition>
        <h1>React Animations</h1>

        <Transition mountOnEnter unmountOnExit in={this.state.modalOpen} timeout={500}>
          {(state) =>{
              return <Modal open={state} closed={this.toggleModal} />
          }}

        </Transition>

        
        <Backdrop open={this.state.modalOpen} />
        <button onClick={this.toggleModal} className="Button">Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
