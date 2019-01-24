import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CharacterCard from './CharacterCard';

class CharactersList extends Component {
    render() {
        return (
            <ul className="app__list">
                {this.props.arrayFromFilter.map(item => {
                    return (
                        <li className="app__list-item" id={item.id} key={item.id} >

                        <CharacterCard character={item}/>
                        </li>
                    );
                })}
            </ul>
        );
    }
}

CharactersList.propTypes = {
    arrayFromFilter: PropTypes.array
}

export default CharactersList;