import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GoBack from './GoBack';

class CharacterDetail extends Component {

    hasPatronus(patronus){

        return (patronus==='') ? 'Este personaje no sabe conjurar un Patronus': patronus ; 
    }

    isAlive(alive){

        return alive ? 'vivo' : 'muerto';

    }

    render() {
        const { characters, characterId } = this.props;

        if (characters.length === 0 || characterId >= characters.length) {
            return <p>No hay datos para esa busqueda</p>

        } else {
            const selectedCharacter = characters[characterId];
            return (
                <div className="character__detail">
                    <div className="character__detail-wrapper">
                        <img src={selectedCharacter.image} alt={selectedCharacter.name} className="character__detail-image" />
                        <h2 className="character__detail-name">{selectedCharacter.name}</h2>
                        <p className="character__detail-house">{selectedCharacter.house}</p>
                        <p className="character__detail-birth">{selectedCharacter.yearOfBirth}</p>
                        <p className="character__detail-patronus">{this.hasPatronus(selectedCharacter.patronus)}</p>
                        <p className="character__detail-status">{this.isAlive((selectedCharacter.alive))}</p>


                    </div>
                    <GoBack />
                </div>
            );

        }
    }
}

CharacterDetail.propTypes = {
    characters: PropTypes.array,
    characterId: PropTypes.number
}

export default CharacterDetail;