import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GoBack from './GoBack';
import NoData from './NoData';

class CharacterDetail extends Component {

    hasPatronus(patronus){

        return (patronus==='') ? 'No conocemos el Patronus que conjura este personaje': patronus ; 
    }

    isAlive(alive){

        return alive ? 'vivo' : 'muerto';

    }

    render() {
        const { characters } = this.props;
        const characterId = this.props.match.params.id;

        if (characters.length === 0 || characterId >= characters.length) {
            return <NoData/>

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
    match: PropTypes.object
}

export default CharacterDetail;