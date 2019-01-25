import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GoBack from './GoBack';
import NoData from './NoData';
import coffin from '../icons/coffin.svg';
import laugh from '../icons/laugh.svg';
import lion from '../icons/lion.svg';
import snake from '../icons/snake.svg';
import crow from '../icons/crow.svg';
import badger from '../icons/badger.svg';
import '../scss/components/characterDetail.scss';


class CharacterDetail extends Component {

    hasPatronus(patronus) {
        return (patronus === '') ? 'No conocemos el Patronus que conjura este personaje' : patronus;
    }

    isAlive(alive) {
        return alive ? <div className="status"><span className="status__name">Vivo</span><img className="status__alive" src={laugh} alt="status vivo" /></div> : <div className="status"><span className="status__death">Muerto</span><img className="status__death" src={coffin} alt="status muerto" /></div>;
        //<span role="img" aria-label="alive">🤯</span>

    }
    getHouse(house) {

        if (house.toLocaleLowerCase() === 'gryffindor') {
            return <div className="house"><span className="house__name">{house}</span><img className="house__img" src={lion} alt={house} /></div>

        } else if (house.toLocaleLowerCase() === 'slytherin') {
            return <div className="house"><span className="house__name">{house}</span><img className="house__img" src={snake} alt={house} /></div>


        } else if (house.toLocaleLowerCase() === 'ravenclaw') {
            return <div className="house"><span className="house__name">{house}</span><img className="house__img" src={crow} alt={house} /></div>
        } else if (house.toLocaleLowerCase() === 'hufflepuff') {
            return <div className="house"><span className="house">{house}</span><img className="house__img" src={badger} alt={house} /></div>
        } else {
            return 'no tiene casa'

        }

    }

    render() {
        const { characters } = this.props;
        const characterId = this.props.match.params.id;

        if (characters.length === 0 || characterId >= characters.length) {
            return <NoData />

        } else {
            const selectedCharacter = characters[characterId];
            return (
                <div className="character__detail">
                    <div className="character__detail-wrapper">
                        <img className="character__photo" src={selectedCharacter.image} alt={selectedCharacter.name} className="character__detail-image" />
                        <div className="character__detail-info">
                            <h2 className="character__detail-name">{selectedCharacter.name}</h2>
                            <p className="character__detail-house">{this.getHouse(selectedCharacter.house)}</p>
                            <p className="character__detail-birth">{selectedCharacter.yearOfBirth}</p>
                            <p className="character__detail-patronus">{this.hasPatronus(selectedCharacter.patronus)}</p>
                            <p className="character__detail-status">{this.isAlive((selectedCharacter.alive))}</p>
                        </div>

                    </div>
                    <GoBack />
                </div>
            );

        }
    }
}

CharacterDetail.propTypes = {
    characters: PropTypes.array.isRequired,
    match: PropTypes.object.isRequired
}

export default CharacterDetail;