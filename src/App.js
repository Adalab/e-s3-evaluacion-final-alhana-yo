import React, { Component } from 'react';
import './App.css';
import { fetchData } from './services/DataService';



class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      query:'',
      //characters: []
      //me falla recuperar el local Storage
      character: this.getSavedDataFromLocalStorage()
    }
    this.getUserInput = this.getUserInput.bind(this);
  }

  /**REQUEST FOR THE */

  getData() {
    fetchData()
      .then(data => {
        const dataWithId = data.map((item, index) => {
          return { ...item, id: index }
        });
        this.setState({
          characters: dataWithId
        })
        this.saveDataInLocalStorage(dataWithId);
      })
  }

  /*LOCAL STORAGE*/ 

  // componentDidMount(){
  //   this.getSavedDataFromLocalStorage();
  // }

  saveDataInLocalStorage(data){
    localStorage.setItem('HP_characters', JSON.stringify(data));
  }

  getSavedDataFromLocalStorage(){
    const savedData = localStorage.getItem('HP_characters');
   
    if(savedData !== null){
      console.log('estoy dentro del if')
      return JSON.parse(savedData);
    }else{
      console.log('estoy dentro del else');
      this.getData();
      return [];
    }
  }

  /** FILTER */
  getUserInput(e) {
    const userQuery = e.currentTarget.value;
    this.setState({
      query: userQuery
    });
  }

  filterData(){
    const filteredCharacters = this.state.character.filter(item => {
      if(item.name.toLocaleLowerCase().includes(this.state.query.toLocaleLowerCase())){
        return true;
      }else{
        return false;
      }
    });
    return filteredCharacters;
  }


  render() {

    const arrayFromFilter = this.filterData();
    console.log(arrayFromFilter);
    
    return (
      <div className="App">

        <header className="app__header">
          <h1 className="app__title">Harry Potter characters </h1>
          <div className="app__input">
            <div className="app__filter-itm">
              <input type="text" className="app__filter-full-name" placeholder="Busca a los culpables" onKeyUp={this.getUserInput}/>
            </div>
          </div>
        </header>

        <main className="app__main">
          <ul className="app__list">
            {arrayFromFilter.map(item => {
              return (
                <li className="app__list-item" id={item.id} key={item.id} >
                  <div className="character">
                    <img src={item.image} alt={item.name} className="character__image" />
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
