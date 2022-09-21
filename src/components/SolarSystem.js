import React from 'react';
import Title from './Title';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system" id="solarSystemID">
        <Title headline="Planetas" />
        <section className="planet-info">
          { Planets.map((planeta) => (<PlanetCard
            key={ planeta.name }
            planetName={ planeta.name }
            planetImage={ planeta.image }
          />)) }
        </section>
      </div>
    );
  }
}

export default SolarSystem;
