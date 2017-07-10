import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addWord } from '../actions';
import logo from '../logo.svg';
import '../App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: ''
    }
  }

  addWord = () => {
    return this.props.addWord(this.state.title);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Your vocabulary in hand</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="App-content">
          <div className="form-group">
            <input className="form-control" onChange={(e) => this.setState({title: e.target.value})}/>
            <button className="btn btn-primary" onClick={() => this.addWord()}>
              Add word
            </button>
          </div>
          <div className="word-list"></div>
        </div>
      </div>      
    );
  }
}

function mapStateToProps(state){
  console.log('state', state);
  return {
    words: state
  }
}

export default connect(mapStateToProps, {addWord}) (App);
