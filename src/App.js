import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import { fetchData } from './services/DataService';
import CharactersList from './components/CharactersList';
import Filter from './components/Filter';
import CharacterDetail from './components/CharacterDetail';
import './App.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      query:'',
      characters: []
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

  componentDidMount(){
    this.getSavedDataFromLocalStorage();
  }

  saveDataInLocalStorage(data){
    localStorage.setItem('HP_characters', JSON.stringify(data));
  }

  getSavedDataFromLocalStorage(){
    const savedData = localStorage.getItem('HP_characters');
   
    if(savedData !== null){
      this.setState({
        characters: JSON.parse(savedData)
      });
    }else{
      this.getData();
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
          <Switch>
            <Route exact path="/" render={()=><Filter actionGetUserInput={this.getUserInput}/>}/>

          </Switch>
        </header>

        <main className="app__main">
      
          <Switch>
            <Route exact path="/" render={()=><CharactersList arrayFromFilter={arrayFromFilter}/>} />
            <Route path="/character/:id" render={props=><CharacterDetail match={props.match} characters={characters} /> }/>
          </Switch>

        </main>
      </div>
    );
  }
}

export default App;
