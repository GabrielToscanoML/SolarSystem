import React from 'react';
import propTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card" className="missionCardID">
        <p data-testid="mission-name">{name}</p>
        <section className="noNameMission">
          <p data-testid="mission-year">{year}</p>
          <p data-testid="mission-country" className="country">{country}</p>
          <p data-testid="mission-destination">{destination}</p>
        </section>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: propTypes.string.isRequired,
  year: propTypes.string.isRequired,
  country: propTypes.string.isRequired,
  destination: propTypes.string.isRequired,
};

export default MissionCard;
