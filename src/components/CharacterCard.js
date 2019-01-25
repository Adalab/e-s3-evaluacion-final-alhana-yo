import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './characterCard.css';


class CharacterCard extends Component {

    render() {
        const {character} = this.props
        return (
            
            <div className="app__list-item" id={character.id} >
                <div className="character">
                    <img src={character.image} alt={character.name} className="character__image" />
                    <h2 className="character__name">{character.name}</h2>
                    <p className="character__house">{character.house}</p>
                </div>
            </div>
        );
    }
}

CharacterCard.propTypes = {
    character: PropTypes.object.isRequired
}

export default CharacterCard;