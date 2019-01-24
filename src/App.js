import React, { Component } from 'react';
import './App.css';


const ENDPOINT = 'http://hp-api.herokuapp.com/api/characters';


class App extends Component {

  constructor(props){
    super(props);

    this.state={
      characters : []
    }
  }

  getData(){
    fetch(ENDPOINT)
      .then(response => response.json())
      .then(data => {
        this.setState({
          characters: data
        });
      });

  }

  render() {

    const characterArray = this.getData();
    return (
      <div className="App">
       
        <header className="app__header">
          <h1 className="app__title">Harry Potter characters </h1>
          {/* <div className="app__input">
            <div className="app__filter-itm">
              <input type="text" className="app__filter-full-name" placeholder="Busca a los culpables" onKeyUp={this.getUserInput}/>
            </div>
          </div> */}
        </header>
        <main className="app__main">
          <ul className="app__list">
            {this.state.characters.map(item => { 
              return (
                <li className="app__list-item" >
                  <div className="character">
                    <img src={item.image} alt={item.name}className="character__image" />
                    <h2 className="character__name">{item.name}</h2>
                    <div className="character__house">{item.house}</div>
                  </div>
                </li>
              );
            })}
          </ul>
        </main>


      </div>
    );
  }
}

export default App;
