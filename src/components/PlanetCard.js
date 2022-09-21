import React from 'react';
import propTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    const altString = `Planeta ${planetName}`;
    return (
      <div data-testid="planet-card" id="planetCardID">
        <p data-testid="planet-name">{planetName}</p>
        <img src={ planetImage } alt={ altString } width="200px" />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: propTypes.string.isRequired,
  planetImage: propTypes.string.isRequired,
};

export default PlanetCard;
