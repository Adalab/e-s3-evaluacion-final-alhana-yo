import React, {Component} from "react";
import GoBack from './GoBack';

class NoData extends Component {
  render() {
    return (
      <div className="app__noData">
        <p>No hay datos para esa busqueda</p>
        <GoBack />
      </div>
    );
  }
}

export default NoData;