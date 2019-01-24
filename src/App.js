import React, { Component } from 'react';
import './App.css';
import { fetchData } from './services/DataService';
import CharactersList from './components/CharactersList';
import Filter from './components/Filter';
import CharacterDetail from './components/CharacterDetail';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      query:'',
      //characters: []
      
      characters: this.getSavedDataFromLocalStorage()
    }
    this.getUserInput = this.getUserInput.bind(this);
  }

  /**REQUEST FOR THE SERVER */

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
    const filteredCharacters = this.state.characters.filter(item => {
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
    const {characters} = this.state;

    return (
      
      <div className="App">
        <header className="app__header">
          <h1 className="app__title">Harry Potter characters </h1>
          <Filter actionGetUserInput={this.getUserInput}/>
        </header>

        <main className="app__main">
          <CharacterDetail characters={characters} characterId={1}/>
          <CharactersList arrayFromFilter={arrayFromFilter}/>
        </main>
      </div>
    );
  }
}

export default App;
