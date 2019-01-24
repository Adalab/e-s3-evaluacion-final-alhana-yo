import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CharacterCard extends Component {
    render() {
        const {character} = this.props
        return (
            
            <div className="app__list-item" id={character.id} >
                <div className="character">
                    <img src={character.image} alt={character.name} className="character__image" />
                    <h2 className="character__name">{character.name}</h2>
                    <div className="character__house">{character.house}</div>
                </div>
            </div>

        );
    }
}

CharacterCard.propTypes = {
    arrayFromFilter: PropTypes.object
}

export default CharacterCard;