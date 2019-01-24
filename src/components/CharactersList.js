import React, { Component } from 'react';
import CharacterCard from './CharacterCard';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class CharactersList extends Component {
    render() {
        return (
            <ul className="app__list">
                {this.props.arrayFromFilter.map(item => {
                    return (
                        <li className="app__list-item" id={item.id} key={item.id} >
                            <Link className="app__list-link" to={`/person/${item.id}`}>
                                <CharacterCard character={item} />
                            </Link>
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