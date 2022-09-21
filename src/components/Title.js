import React from 'react';
import propTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { headline } = this.props; // nao sei que erro é esse
    return (
      <div className="Title">
        <h2>{headline}</h2>
      </div>
    );
  }
}

Title.propTypes = {
  headline: propTypes.string.isRequired,
};

export default Title;
