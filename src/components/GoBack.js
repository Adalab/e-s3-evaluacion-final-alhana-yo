import '../scss/components/goBack.scss';

import React, {Component} from "react";
import {Link} from 'react-router-dom';

class GoBack extends Component {
  render() {
    return (

      <div className="app__go-back">
        <Link className="app__go-back-link" to="/"><div className="app__go-back-button"><p className="app__go-back-text">Volver al listado</p></div></Link>
      </div>
      
      
    );
  }
}

export default GoBack;