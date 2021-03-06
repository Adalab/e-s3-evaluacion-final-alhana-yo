import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../scss/components/filter.scss';

class Filter extends Component {
    render() {
        return (
            <div className="app__input">
            <div className="app__filter-itm">
              <input type="text" className="app__filter-full-name" placeholder="Busca a los culpables" onKeyUp={this.props.actionGetUserInput}/>
            </div>
          </div>
        );
    }
}

Filter.propTypes = {
    arrayFromFilter: PropTypes.func
}

export default Filter;